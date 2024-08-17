import { Card } from "../Card/Card"

export function GradientCard() {
  return (
    <Card
      fill
      rounded="rounded-2xl"
      horizontalPadding
      verticalPadding
      backgroundColor="bg-gradient-to-b from-custom-200 to-custom-500 dark:from-custom-600 dark:to-custom-900"
    >
      <div className="h-auto min-[600px]:h-80 lg:h-[450px]">
        <p className="text-5xl md: lg:text-6xl font-black text-custom-700 dark:text-custom-200">
          There are{" "}
          <span className="text-custom-800 dark:text-custom-300">
            nine million bicycles
          </span>{" "}
          in Beijing
        </p>
      </div>
    </Card>
  )
}
