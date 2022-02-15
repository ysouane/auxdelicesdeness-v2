import { useState } from "react"

import inputRules from "./InputPatternRules"
import Divider from "@/components/base/Divider"

import { Modal, Button } from "react-bootstrap"

import currentDateUTCFormatted from "@/utils/currentDateUTCFormatted"

import styles from "./ContactPage.module.scss"

export default function Contact({ posts }: any) {
  const [show, setShow] = useState(false)
  const [messageModal, setMessageModal] = useState("")

  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => setShow(true)

  async function handleSubmit(e: any) {
    e.preventDefault()

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      eventType: e.target.eventType.value,
      date: e.target.date.value,
      message: e.target.message.value,
    }

    const setMsgErrorModal = () => {
      setMessageModal(
        "Un problème c'est produit lors de l'envoi du message, merci de réessayer ultérieurement."
      )
    }

    await fetch("api/mail", {
      method: "POST",
      headers: {
        "Contact-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setMessageModal(
            "Votre message à bien été envoyé. Une réponse vous sera apportée en 48h maximum."
          )
          handleShowModal()
        } else {
          setMsgErrorModal
          handleShowModal()
        }
      })
      .catch(() => {
        setMsgErrorModal
        handleShowModal()
      })
  }

  const star = "*"

  return (
    <>
      <div className={`container ${styles.contactForm}`}>
        <div className={styles.contactForm__contactMe}>Me contacter</div>
        <Divider />
        <div className={styles.contactForm__information}>{posts}</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Nom
              <span className={styles.contactForm__star}>{star}</span>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Entrer votre nom"
                aria-label="Champ obligatoire"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
              <span className={styles.contactForm__star}>{star}</span>
              <input
                type="email"
                name="email"
                pattern={inputRules.patternEmail}
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Email@exemple.com"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Téléphone
              <input
                type="tel"
                name="phone"
                pattern={inputRules.patternPhone}
                maxLength={inputRules.phoneMaxLength}
                className="form-control"
                id="phone"
                aria-describedby="phone"
                placeholder="Entrer votre numéro"
              />
            </label>
          </div>

          <div className="form-group">
            <select
              name="eventType"
              defaultValue=""
              aria-label="Type d'événement"
              required
            >
              <option hidden disabled value="">
                Type d&apos;événement
              </option>
              <option value="Mariage">Mariage</option>
              <option value="Anniversaire enfant">Anniversaire enfant</option>
              <option value="Anniversaire adulte">Anniversaire adulte</option>
              <option value="Baby shower">Baby shower</option>
              <option value="Autre">Autre</option>
            </select>
            <span className={styles.contactForm__star}>{star}</span>
          </div>

          <div className={`form-select ${styles.contactForm__dateEvent}`}>
            <label htmlFor="date">
              Date de l&apos;événement
              <input
                type="date"
                name="date"
                min={currentDateUTCFormatted}
                className="form-control"
                id="date"
                aria-describedby="date"
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
              <span className={styles.contactForm__star}>{star}</span>
              <textarea
                name="message"
                className="form-control"
                id="message"
                aria-describedby="message"
                placeholder="Veuillez écrire votre message ici"
                required
              />
            </label>
          </div>

          <div className={styles.contactForm__footer}>
            <button
              type="submit"
              className={`${styles.contactForm__footer__submit} mx-auto btn`}
            >
              Envoyer
            </button>

            <span className={styles.contactFormm__footer__legal}>
              Aucune donnée personnelle n’est conservée par notre site via ce
              formulaire
            </span>
          </div>
        </form>
      </div>

      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aux délices de Ness</Modal.Title>
        </Modal.Header>
        <Modal.Body>{messageModal}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
