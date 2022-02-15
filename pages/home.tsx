import { GetServerSideProps } from "next"
import { sanityClient } from "@/sanity"
import HomePage from "@/components/pageComponents/HomePage"

export default function Home({ posts }: any) {
  return <HomePage posts={posts} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query: string = '*[ _type == "homePage"]'
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
