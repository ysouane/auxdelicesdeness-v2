import { useEffect, useState } from "react"
import Image from "next/image"

import Carousel from "@/components/base/Carousel"
import Divider from "@/components/base/Divider"

import sanityRefs from "@/utils/sanityRefs"
import { urlFor } from "@/sanity"

import styles from "./HomePage.module.scss"

export default function HomePage({ posts }: any) {
  const [descriptiveText, setDescriptiveText] = useState("")

  useEffect(() => {
    if (posts && posts.length) {
      posts.map((post: any) => {
        const categoriesOfPost: string = post.categories[0]._ref

        if (categoriesOfPost === sanityRefs.homePageTextPresentation) {
          setDescriptiveText(post.body[0].children[0].text)
        }
      })
    }
  }, [posts])

  return (
    <div className={styles.homePage}>
      <Carousel posts={posts} />

      <Divider />

      <div className={styles.homePage__welcome}>
        Bienvenue aux délices de Ness
      </div>

      <div className={styles.homePage__history}>
        {posts.map((post: any) => {
          if (post.categories[0]._ref === sanityRefs.homePageImgPresentation) {
            return (
              <div className={styles.homePage__history__image}>
                <Image
                  src={urlFor(post.mainImage.asset._ref).url() as string}
                  alt="Gateau"
                  width={1280}
                  height={852}
                />
              </div>
            )
          }
        })}

        <p className={styles.homePage__history__text}>{descriptiveText}</p>
      </div>
    </div>
  )
}
