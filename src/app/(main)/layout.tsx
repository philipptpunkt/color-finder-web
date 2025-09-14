import { NavigationHeader } from "@/components/NavigationHeader/NavigationHeader"
import { Footer } from "@/components/Footer/Footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavigationHeader />
      {children}
      <Footer />
    </>
  )
}
