import SiteHead from "../SiteHead"
import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import BackToTop from "@/components/base/BackToTop"

export default function SiteLayout({ children }: any) {
  return (
    <>
      <SiteHead />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <BackToTop />
    </>
  )
}
