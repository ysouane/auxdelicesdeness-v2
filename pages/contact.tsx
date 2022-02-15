import { GetServerSideProps } from "next"
import ContactPage from "@/components/pageComponents/ContactPage"
import sanityRefs from "@/utils/sanityRefs"
import { sanityClient } from "@/sanity"

function ContactForm({ posts }: any) {
  const displayPosts = () => {
    return posts
      .find((info: any) => info.categories[0]._ref === sanityRefs.contactFormRef)
      .body?.map((text: any) => <p key={text._key}>{text.children[0].text}</p>)
  }

  return <ContactPage posts={displayPosts()} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query: string = '*[ _type == "contactForm"]'
  const posts = await sanityClient.fetch(query)

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  }

  return {
    props: {
      posts,
    },
  }
}

export default ContactForm
