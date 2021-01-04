import {
  Button,
  ButtonGroup,
  createStyles,
  Grow,
  makeStyles,
  MuiThemeProvider,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Colors } from '../../color/Color'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    kakao: {
      background: Colors.SummerTime,
      whiteSpace: 'pre-line',
      padding: theme.spacing(3),
    },
    papago: {
      background: Colors.BlueCuracao,
      whiteSpace: 'pre-line',
      padding: theme.spacing(3),
    },
    google: {
      background: Colors.CornFlower,
      whiteSpace: 'pre-line',
      padding: theme.spacing(3),
    },
    buttonGroup: {
      '& Button': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textTransform: 'none',
        textAlign: 'left',
        '@media (min-width: 320px) and (max-width: 480px)': {
          fontSize: '0.5rem',
        },
        textSizeAdjust: 'none',
      },
    },
  })
)

interface Props {
  readonly isShowing: boolean
  readonly handleClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<void>
  readonly typography: Theme
  readonly kakao: string
  readonly papago: string
  readonly google: string
}

const BtnGroup: React.FC<Props> = (props) => {
  const { isShowing, handleClick, typography, kakao, papago, google } = props
  const classes = useStyles()
  return (
    <div>
      <Grow in={isShowing} {...(isShowing ? { timeout: 1000 } : {})}>
        <ButtonGroup
          orientation="vertical"
          size="large"
          fullWidth={true}
          className={classes.buttonGroup}
        >
          <Button
            className={classes.kakao}
            onClick={handleClick}
            variant="contained"
          >
            <MuiThemeProvider theme={typography}>
              <Typography variant="h6">{kakao}</Typography>
            </MuiThemeProvider>
          </Button>

          <Button
            className={classes.papago}
            onClick={handleClick}
            variant="contained"
          >
            <MuiThemeProvider theme={typography}>
              <Typography variant="h6">{papago}</Typography>
            </MuiThemeProvider>
          </Button>

          <Button
            className={classes.google}
            onClick={handleClick}
            variant="contained"
          >
            <MuiThemeProvider theme={typography}>
              <Typography variant="h6">{google}</Typography>
            </MuiThemeProvider>
          </Button>
        </ButtonGroup>
      </Grow>
    </div>
  )
}

export default BtnGroup
