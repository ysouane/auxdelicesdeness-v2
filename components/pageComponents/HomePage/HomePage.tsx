import { useEffect, useState } from "react"

import Carousel from "@/components/base/Carousel"
import Divider from "@/components/base/Divider"

import sanityRefs from "@/utils/sanityRefs"
import { urlFor } from "@/sanity"

import styles from "./HomePage.module.scss"

export default function HomePage({ posts }: any) {
  const [welcomeImgUrl, setWelcomeImgUrl] = useState("")
  const [descriptiveText, setDescriptiveText] = useState("")

  useEffect(() => {
    posts.map((post: any) => {
      const categoriesOfPost: string = post.categories[0]._ref

      if (categoriesOfPost === sanityRefs.homePageImgPresentation) {
        setWelcomeImgUrl(post.mainImage.asset._ref)
      }

      if (categoriesOfPost === sanityRefs.homePageTextPresentation) {
        setDescriptiveText(post.body[0].children[0].text)
      }
    }, [])
  })

  return (
    <div className={styles.homePage}>
      <Carousel posts={posts} />

      <Divider />

      <div className={styles.homePage__welcome}>
        Bienvenue aux délices de Ness
      </div>

      <div className={styles.homePage__history}>
        <img src={urlFor(welcomeImgUrl).url()} alt="Gateau" />

        <p className={styles.homePage__welcome__text}>{descriptiveText}</p>
      </div>
    </div>
  )
}
