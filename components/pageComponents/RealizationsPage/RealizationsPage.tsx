import React, { useState } from "react"
import Image from "next/image"

import sanityRefs from "@/utils/sanityRefs"
import { urlFor } from "@/sanity"

import ArticleJsonLd from "@/components/seo/ArticleJsonLd"

import { Card, Modal } from "react-bootstrap"

import styles from "./RealizationsPage.module.scss"

const SortDropDown = () => {
  return (
    <>
      <label htmlFor="Sort" />
      <select
        className={styles.realizationsPage__sort__dropdown}
        name="sort"
        id="Sort"
        defaultValue={"Trier par"}
      >
        <option disabled value="Trier par">
          Trier par
        </option>
        <option value="creationDate">Date de création</option>
        <option value="modificationDate">Date de modification</option>
      </select>
    </>
  )
}

export default function Realizations({ posts }: any) {
  const [realizations, setRealizations] = useState(posts)
  const [show, setShow] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState("")
  const [modalTitlePost, setModalTitlePost] = useState("")
  const [modalTextPost, setModalTextPost] = useState("")

  const handleCloseModal = () => setShow(false)

  function handleShowModal(e: any) {
    const postId = e.currentTarget.dataset.id
    const postById = posts.find((post: any) => postId === post._id)

    setModalImageUrl(postById.mainImage.asset._ref)
    setModalTitlePost(postById.title)
    setModalTextPost(postById.body.map((text: any) => text.children[0].text))
    setShow(true)
  }

  function handleClickSort(e: any) {
    e.preventDefault()
    const { value } = e.target

    if (value === "creationDate") {
      setRealizations(
        posts
          .slice(0)
          .sort(
            (a: any, b: any) =>
              new Date(b._createdAt).getTime() -
              new Date(a._createdAt).getTime()
          )
      )
    } else if (value === "modificationDate") {
      setRealizations(
        posts
          .slice(0)
          .sort(
            (a: any, b: any) =>
              new Date(b._updatedAt).getTime() -
              new Date(a._updatedAt).getTime()
          )
      )
    }
  }

  return (
    <div className={styles.realizationsPage}>
      <div onClick={handleClickSort} className={styles.realizationsPage__sort}>
        <SortDropDown />
      </div>

      <div className={styles.realizationsPage__grid}>
        {realizations?.map((post: any, index: number) => {
          const categoriesOfPost = post?.categories[0]?._ref

          if (categoriesOfPost === sanityRefs.realizationsRef) {
            const stringClassNameGrid = "realizationsPage__grid__div"
            const gridDivClassNameComplete = `${stringClassNameGrid}${
              index + 1
            }`

            return (
              <div
                className={gridDivClassNameComplete}
                key={post._id}
                data-id={post._id}
                onClick={handleShowModal}
              >
                <Image
                  src={urlFor(post.mainImage.asset._ref).url() as string}
                  key={post._id}
                  alt={post.title}
                  layout="responsive"
                  width={1000}
                  height={1000}
                  className={styles.realizationsPage__grid__img}
                />
              </div>
            )
          }
        })}
      </div>

      <Modal centered show={show} onHide={handleCloseModal}>
        <Modal.Body>
          <Card>
            <Image
              src={urlFor(modalImageUrl).url() as string}
              alt="Gateau"
              width={1000}
              height={1000}
            />
            <Card.Title className="text-center mt-3 mb-3">
              {modalTitlePost}
            </Card.Title>
            <Card.Text className="m-3">{modalTextPost}</Card.Text>
          </Card>
        </Modal.Body>
      </Modal>

      <ArticleJsonLd cakes={posts} />
    </div>
  )
}
