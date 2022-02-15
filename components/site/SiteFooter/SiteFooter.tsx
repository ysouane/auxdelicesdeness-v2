import Link from "next/link"
import Image from "next/image"

import styles from "./SiteFooter.module.scss"

export default function SiteFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.reassurance}>
          <div className={styles.reassurance__item}>
            <Image
              src="/assets/reassurance/baker.svg"
              alt="baker"
              width={50}
              height={57}
            />

            <span className={styles.reassurance__item__title}>
              Pâtisserie fait main
            </span>

            <div className={styles.reassurance__item__description}>
              Gateaux personnalisés
              <br />
              Number Cake
              <br />
              Cupcakes
            </div>
          </div>

          <div className={styles.reassurance__item}>
            <Image
              src="/assets/reassurance/personalizeCake.svg"
              alt="personalize cake"
              width={50}
              height={57}
            />

            <span className={styles.reassurance__item__title}>
              Personnaliser votre gâteau
            </span>

            <div className={styles.reassurance__item__description}>
              Logo
              <br />
              Dessin
              <br />
              Thème
            </div>
          </div>

          <div className={styles.reassurance__item}>
            <Image
              src="/assets/reassurance/event.svg"
              alt="event"
              width={50}
              height={57}
            />

            <span className={styles.reassurance__item__title}>
              Pour tous vos événements
            </span>

            <div className={styles.reassurance__item__description}>
              Anniversaire
              <br />
              Mariage
              <br />
              Baby shower
            </div>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <div className={styles.media}>
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

          <div className={styles.media}>
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

          <div className={styles.media}>
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

        <div className={styles.allRightsReserved}>© Aux délices de Ness</div>
      </footer>
    </>
  )
}
