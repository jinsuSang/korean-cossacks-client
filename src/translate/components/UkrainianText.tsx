import {
  createStyles,
  Grow,
  makeStyles,
  MuiThemeProvider,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Colors } from '../../color/Color'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ukrainianText: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(12),
      whiteSpace: 'pre-line',
      backgroundColor: Colors.LynxWhite,
    },
  })
)

interface Props {
  readonly isShowing: boolean
  readonly ukrainian: string
  readonly typography: Theme
}

const UkrainianText: React.FC<Props> = (props) => {
  const { isShowing, ukrainian, typography } = props
  const classes = useStyles()
  return (
    <div>
      <Grow in={isShowing} {...(isShowing ? { timeout: 1000 } : {})}>
        <Paper className={classes.ukrainianText} elevation={3}>
          <MuiThemeProvider theme={typography}>
            <Typography variant="h6">{ukrainian}</Typography>
          </MuiThemeProvider>
        </Paper>
      </Grow>
    </div>
  )
}

export default UkrainianText
