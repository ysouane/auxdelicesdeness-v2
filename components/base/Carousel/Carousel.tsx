import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
  EffectFade,
} from "swiper"

import Image from "next/image"

import sanityRefs from "@/utils/sanityRefs"
import { urlFor } from "@/sanity"

SwiperCore.use([Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade])

export default function Carousel({ posts }: { posts: any }) {
  return (
    <Swiper
      autoplay={{
        delay: 1000,
      }}
      slidesPerView={1}
      loop
      effect="fade"
      scrollbar={{
        draggable: true,
      }}
    >
      {posts.map((img: any) => {
        const categoriesOfPost: string = img.categories[0]._ref

        if (categoriesOfPost === sanityRefs.homePageSliderRef) {
          return (
            <SwiperSlide key={img._id}>
              <Image
                className="carousel__image"
                src={urlFor(img.mainImage.asset._ref).url() as string}
                alt="cake"
                width={1000}
                height={400}
              />
            </SwiperSlide>
          )
        }
      })}
    </Swiper>
  )
}
