import {
  Button,
  createStyles,
  makeStyles,
  MuiThemeProvider,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Colors } from '../../color/Color'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '100%',
      background: Colors.CornFlower,
      whiteSpace: 'pre-line',
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      textTransform: 'none',
      '@media (min-width: 320px) and (max-width: 480px)': {
        fontSize: '0.5rem',
      },
      textSizeAdjust: 'none',
    },
  })
)

interface Props {
  readonly handleClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<void>
  readonly typography: Theme
  readonly text: string
}

const TranslationBtn: React.FC<Props> = (props: Props) => {
  const { handleClick, typography, text } = props
  const classes = useStyles()
  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleClick}
        variant="contained"
      >
        <MuiThemeProvider theme={typography}>
          <Typography variant="h6">{text}</Typography>
        </MuiThemeProvider>
      </Button>
    </div>
  )
}

export default TranslationBtn
