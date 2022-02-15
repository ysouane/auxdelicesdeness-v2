import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/StartPage.module.scss"

const StartPage: NextPage = () => {
  return (
    <div className={styles.startPage}>
      <Link href="/home" passHref>
        <Image
          priority
          src="/logos/logo.svg"
          alt="Logo aux délices de Ness"
          width={578}
          height={650}
        />
      </Link>
    </div>
  )
}

export default StartPage
