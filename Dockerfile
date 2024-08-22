FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Uncommend this line if you put something in the public folder - it seems that if it's empty it doesnt' get createds
# COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Install the next.js plugin after it copies the standalone server and static bits to workdir
# Nextjs removes unnecessary files and New Relic is not directly referenced.
# This however slows down the Docker pipeline and should be replaced with a better solution
RUN npm i @newrelic/next

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME
ENV NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY HOSTNAME="0.0.0.0" node -r @newrelic/next  server.js