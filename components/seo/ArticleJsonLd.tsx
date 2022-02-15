import { ArticleJsonLd as NextSeoArticleJsonLd } from "next-seo"

import { urlFor } from "@/sanity"

export default function ArticleJsonLd({ cakes }: any) {
  return (
    <>
      {cakes.map((cake: any) => {
        if (cake) {
          return (
            <NextSeoArticleJsonLd
              url="https://auxdelicesdeness/realisations"
              title={cake.title}
              key={cake._id}
              images={[
                urlFor(cake.mainImage?.asset._ref).url() as string,
                urlFor(cake.secondaryImage?.asset._ref).url() as string,
              ]}
              datePublished={cake._createdAt}
              dateModified={cake._updatedAt}
              description={cake.body?.map(
                (text: any) => text.children[0].text
              )}
              publisherLogo="/logos/logo.svg"
              publisherName="Ness"
              authorName="Ness"
            />
          )
        }
      })}
    </>
  )
}
