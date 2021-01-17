import { ButtonGroup, Grow, Theme } from '@material-ui/core'
import React from 'react'
import TranslationBtn from './TranslationBtn'
interface Props {
  readonly isShowing: boolean
  readonly handleClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<void>
  readonly typography: Theme
  readonly translationTexts: string[]
}

const BtnGroup: React.FC<Props> = (props) => {
  const { isShowing, handleClick, typography, translationTexts } = props

  const displayBtns = translationTexts.map((text, index) => (
    <TranslationBtn
      handleClick={handleClick}
      typography={typography}
      text={text}
      key={index}
    />
  ))

  return (
    <div>
      <Grow in={isShowing} {...(isShowing ? { timeout: 1000 } : {})}>
        <ButtonGroup orientation="vertical" size="large" fullWidth={true}>
          {displayBtns}
        </ButtonGroup>
      </Grow>
    </div>
  )
}

export default BtnGroup
