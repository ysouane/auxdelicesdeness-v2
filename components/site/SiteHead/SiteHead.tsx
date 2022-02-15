import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Head from "next/head"

export default function SiteHead() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [canonical, setCanonical] = useState("")
  const BRAND: string = "Aux délices de Ness"

  useEffect(() => {
    if (router.asPath) {
      const page: string = router.asPath

      if (page.includes("home")) {
        setTitle(`Accueil | ${BRAND}`)
        setDescription(
          "Page d'accueil des visiteurs avec la biographie de Ness."
        )
        setCanonical(`https://www.auxdelicesdeness${page}`)
      }

      if (page.includes("realisations")) {
        setTitle(`Réalisations | ${BRAND}`)
        setDescription(
          "Page affichant les gâteaux réalisés par Ness avec des images, le nom du gâteau et un texte descriptif."
        )
        setCanonical(`https://www.auxdelicesdeness${page}`)
      }

      if (page.includes("contact")) {
        setTitle(`Contact | ${BRAND}`)
        setDescription(
          "Page permettant aux visiteurs du site d'envoyer un message à Ness afin d'obtenir des informations ou un devis."
        )
        setCanonical(`https://www.auxdelicesdeness${page}`)
      }
    }
  }, [router.asPath])

  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width",
          },
        ]}
      />

      <Head>{/* TODO : google tag manager / google analytics */}</Head>
    </>
  )
}
