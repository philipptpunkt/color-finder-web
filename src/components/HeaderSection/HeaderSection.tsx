import { cn } from "@/utils/cn"

function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "w-full sm:w-1/2 rounded-md bg-slate-200 dark:bg-slate-900 p-8 sm:p-12",
        className
      )}
    >
      {children}
    </div>
  )
}

export function HeaderSection() {
  return (
    <div className="flex justify-center w-full mt-[67px]">
      <div className="flex flex-col sm:flex-row max-w-[1200px]">
        <Container className="mb-[3px] sm:mb-[0px] sm:mr-[3px]">
          <h1 className="max-w-[300px]">
            <span className="font-black">Find</span> Your Perfect{" "}
            <span className="font-black">Color</span>
          </h1>
        </Container>
        <Container className="flex">
          <div className="self-end">
            <p className="font-semibold">
              Easily <strong>generate</strong> and customize color palettes,{" "}
              <strong>preview</strong> color variations, and{" "}
              <strong>apply</strong> them to example components in real-time.
              Whether you are a <strong>designer, developer</strong>, or just
              someone who <strong>loves colors</strong>, this tool helps you
              find the perfect shade for your projects.
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}
