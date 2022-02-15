import type { AppProps } from "next/app"
import SiteLayout from "../components/site/SiteLayout"

import "../styles/globals.scss"

export default function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname === "/") {
    return <Component {...pageProps} />
  }

  return (
    <>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  )
}
