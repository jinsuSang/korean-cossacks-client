import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Container, responsiveFontSizes } from '@material-ui/core'
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'
import Form from './components/Form'
import BtnGroup from './components/BtnGroup'
import UkrainianText from './components/UkrainianText'

const typographyTheme = responsiveFontSizes(createMuiTheme())

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyItems: 'center',
    },
  })
)

const Translate = () => {
  const classes = useStyles()
  const [query, setQuery] = useState('')
  const [translatedWithKakao, setTranslatedWithKaKakao] = useState('')
  const [translatedWithPapago, setTranslatedWithPapago] = useState('')
  const [translatedWithGoogle, setTranslatedWithGoogle] = useState('')
  const [showButtonGroup, setShowButtonGroup] = useState(false)
  const [showUkrainianText, setShowUkrainianText] = useState(false)
  const [ukrainianText, setUkrainianText] = useState('')

  useEffect(() => {}, [
    translatedWithKakao,
    translatedWithPapago,
    translatedWithGoogle,
    ukrainianText,
  ])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowUkrainianText(false)
    setShowButtonGroup(false)
    if (!query) return
    const refinedQuery = query.trim()
    const source = 'ko'
    const target = 'en'
    const requestData = { query: refinedQuery, source: source, target: target }

    try {
      const responses: AxiosResponse[] = await Promise.all([
        axios.post(process.env.REACT_APP_KAKAO_TRANSLATE_URL, requestData),
        axios.post(process.env.REACT_APP_PAPAGO_TRANSLATE_URL, requestData),
        axios.post(process.env.REACT_APP_GOOGLE_TRANSLATE_URL, requestData),
      ])

      const [kakaoResult, papagoResult, googleResult]: string[] = responses.map(
        (response) => response.data.result
      )
      setTranslatedWithKaKakao(kakaoResult)
      setTranslatedWithPapago(papagoResult)
      setTranslatedWithGoogle(googleResult)
      setShowButtonGroup(true)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      setShowUkrainianText(false)
      if (event.currentTarget.hasChildNodes()) {
        const text: string = event.currentTarget.childNodes[0]
          .textContent as string

        if (!text) return

        const english = 'en'
        const russian = 'ru'
        const ukrainian = 'uk'

        const enToRuRequest = {
          query: text,
          source: english,
          target: russian,
        }
        const russianResponse: AxiosResponse = await axios.post(
          process.env.REACT_APP_GOOGLE_TRANSLATE_URL,
          enToRuRequest
        )
        const translatedRussian: string = russianResponse.data.result

        const ruToUkRequest = {
          query: translatedRussian,
          source: russian,
          target: ukrainian,
        }

        const ukrainianResponse: AxiosResponse = await axios.post(
          process.env.REACT_APP_GOOGLE_TRANSLATE_URL,
          ruToUkRequest
        )
        const translatedUkrainian: string = ukrainianResponse.data.result

        setUkrainianText(translatedUkrainian)
        setShowUkrainianText(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        typography={typographyTheme}
      />

      <BtnGroup
        isShowing={showButtonGroup}
        handleClick={handleClick}
        typography={typographyTheme}
        kakao={translatedWithKakao}
        papago={translatedWithPapago}
        google={translatedWithGoogle}
      />

      <UkrainianText
        isShowing={showUkrainianText}
        ukrainian={ukrainianText}
        typography={typographyTheme}
      />
    </Container>
  )
}

export default Translate
