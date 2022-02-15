import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

import styles from "./SiteHeader.module.scss"

export default function SiteHeader() {
  const router = useRouter()

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeader__socialMedia}>
        <div className={styles.siteHeader__socialMedia__media}>
          <Link href="https://www.facebook.com/auxdelicesdeness">
            <a>
              <Image
                src="/media/facebook.svg"
                alt="facebook"
                width={25}
                height={25}
              />
            </a>
          </Link>
        </div>
        <div className={styles.siteHeader__socialMedia__media}>
          <Link href="https://www.instagram.com/auxdelicesdeness">
            <a>
              <Image
                src="/media/instagram.svg"
                alt="instagram"
                width={25}
                height={25}
              />
            </a>
          </Link>
        </div>
        <div className={styles.siteHeader__socialMedia__media}>
          <Link href="https://twitter.com/auxness">
            <a>
              <Image
                src="/media/twitter.svg"
                alt="twitter"
                width={25}
                height={25}
              />
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.siteHeader__logo}>
        <Link href="/">
          <a>
            <Image
              className={styles.logo}
              src="/logos/logo.svg"
              alt="logo"
              width={150}
              height={150}
            />
          </a>
        </Link>
      </div>

      <div className={styles.siteHeader__navBar}>
        <ul className={styles.siteHeader__navBar__menus}>
          <li className={styles.siteHeader__navBar__menu}>
            <Link href="/home">
              <a className={router.pathname === "/home" ? styles.active : ""}>
                Accueil
              </a>
            </Link>
          </li>
          <li className={styles.siteHeader__navBar__menu}>
            <Link href="/realizations">
              <a
                className={
                  router.pathname === "/realizations" ? styles.active : ""
                }
              >
                Mes réalisations
              </a>
            </Link>
          </li>
          <li className={styles.siteHeader__navBar__menu}>
            <Link href="/contact">
              <a
                className={router.pathname === "/contact" ? styles.active : ""}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
