import { useState, useEffect } from "react"
import Image from "next/image"

import styles from "./BackToTop.module.scss"

function scrollTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  function toggleVisibility() {
    setIsVisible(window.pageYOffset > 300)
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  })

  if (isVisible) {
    return (
      <button
        type="button"
        className={styles.backToTop}
        onClick={scrollTop}
        onTouchStart={scrollTop}
      >
        <Image src="/assets/arrow-up.svg" alt="arrow" width={50} height={50} />
      </button>
    )
  }

  return null
}
