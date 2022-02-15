import { GetServerSideProps } from "next"
import { sanityClient } from "@/sanity"
import RealizationsPage from "@/components/pageComponents/RealizationsPage"

export default function Realizations({ posts }: any) {
  return <RealizationsPage posts={posts} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query: string = '*[ _type == "realizations"]'
  const posts = await sanityClient.fetch(query as string)

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
