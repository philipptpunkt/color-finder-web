interface LayoutContainerProps {
  children: React.ReactNode
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  )
}
