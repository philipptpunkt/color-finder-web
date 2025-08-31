import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
}

// Card 1: Basic neutral with subtle border
export function Card1({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-neutral-50',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-sm',
      'dark:bg-neutral-900',
      'dark:border-neutral-800'
    ], className)}>
      {children}
    </div>
  )
}

// Card 2: Linear gradient background
export function Card2({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-gradient-to-br',
      'from-neutral-50',
      'to-neutral-100',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:from-neutral-900',
      'dark:to-neutral-800',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 3: Radial gradient from center
export function Card3({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'radial-gradient(circle at center, rgb(245 245 245), rgb(250 250 250), rgb(245 245 245))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'radial-gradient(circle at center, rgb(38 38 38), rgb(23 23 23), rgb(38 38 38))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 4: No border, plain background
export function Card4({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-neutral-100',
      'rounded-lg',
      'p-6',
      'shadow-lg',
      'dark:bg-neutral-800'
    ], className)}>
      {children}
    </div>
  )
}

// Card 5: Three-color linear gradient
export function Card5({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-gradient-to-r',
      'from-neutral-50',
      'via-neutral-100',
      'to-neutral-50',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:from-neutral-900',
      'dark:via-neutral-800',
      'dark:to-neutral-900',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 6: Diagonal linear gradient
export function Card6({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-gradient-to-tr',
      'from-neutral-50',
      'to-neutral-100',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:from-neutral-900',
      'dark:to-neutral-800',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 7: Solid darker background
export function Card7({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-neutral-200',
      'border',
      'border-neutral-300',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:bg-neutral-700',
      'dark:border-neutral-600'
    ], className)}>
      {children}
    </div>
  )
}

// Card 8: Vertical linear gradient
export function Card8({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-gradient-to-b',
      'from-neutral-100',
      'to-neutral-50',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:from-neutral-800',
      'dark:to-neutral-900',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 9: Radial gradient from top-left
export function Card9({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'radial-gradient(circle at top left, rgb(245 245 245), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'radial-gradient(circle at top left, rgb(38 38 38), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 10: Four-color conic gradient
export function Card10({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'conic-gradient(from 0deg, rgb(250 250 250), rgb(245 245 245), rgb(240 240 240), rgb(245 245 245))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'conic-gradient(from 0deg, rgb(23 23 23), rgb(38 38 38), rgb(64 64 64), rgb(38 38 38))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 11: Subtle radial gradient from bottom
export function Card11({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'radial-gradient(circle at bottom, rgb(245 245 245), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'radial-gradient(circle at bottom, rgb(38 38 38), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 12: Horizontal linear gradient
export function Card12({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-gradient-to-l',
      'from-neutral-100',
      'to-neutral-50',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:from-neutral-800',
      'dark:to-neutral-900',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 13: Five-color linear gradient
export function Card13({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'linear-gradient(45deg, rgb(250 250 250), rgb(245 245 245), rgb(240 240 240), rgb(245 245 245), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'linear-gradient(45deg, rgb(23 23 23), rgb(38 38 38), rgb(64 64 64), rgb(38 38 38), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 14: Solid light background
export function Card14({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-neutral-100',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:bg-neutral-800',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 15: Radial gradient from top-right
export function Card15({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'radial-gradient(circle at top right, rgb(245 245 245), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'radial-gradient(circle at top right, rgb(38 38 38), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 16: Conic gradient
export function Card16({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'conic-gradient(from 0deg, rgb(250 250 250), rgb(245 245 245), rgb(240 240 240), rgb(245 245 245), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'conic-gradient(from 0deg, rgb(23 23 23), rgb(38 38 38), rgb(64 64 64), rgb(38 38 38), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 17: Diagonal linear gradient (bottom-left to top-right)
export function Card17({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-gradient-to-tr',
      'from-neutral-100',
      'to-neutral-50',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:from-neutral-800',
      'dark:to-neutral-900',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 18: Solid medium background
export function Card18({ children, className }: CardProps) {
  return (
    <div className={cn([
      'bg-neutral-100',
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:bg-neutral-800',
      'dark:border-neutral-700'
    ], className)}>
      {children}
    </div>
  )
}

// Card 19: Three-color vertical gradient
export function Card19({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'linear-gradient(to bottom, rgb(250 250 250), rgb(240 240 240), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'linear-gradient(to bottom, rgb(23 23 23), rgb(64 64 64), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Card 20: Radial gradient from center
export function Card20({ children, className }: CardProps) {
  return (
    <div className={cn([
      'border',
      'border-neutral-200',
      'rounded-lg',
      'p-6',
      'shadow-md',
      'dark:border-neutral-700',
      'relative'
    ], className)}
    style={{
      background: 'radial-gradient(circle at center, rgb(240 240 240), rgb(250 250 250))'
    }}>
      <div className="hidden dark:block absolute inset-0 rounded-lg" style={{
        background: 'radial-gradient(circle at center, rgb(64 64 64), rgb(23 23 23))'
      }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Default export for backward compatibility
export function ExampleCard() {
  return (
    <Card1>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        Example Card
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        This is an example card component with neutral styling.
      </p>
    </Card1>
  )
}
