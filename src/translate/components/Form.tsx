import {
  Button,
  createStyles,
  makeStyles,
  MuiThemeProvider,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Colors } from '../../color/Color'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      marginTop: theme.spacing(5),

      '& Button': {
        background: Colors.Tigerlily,
        width: '20vw',
        margin: 'auto',
        textTransform: 'none',
        '@media (min-width: 320px) and (max-width: 480px)': {
          width: '40vw',
        },
        textSizeAdjust: 'none',
      },

      '& .MuiInput-underline:hover:not($disabled):before': {
        border: 'none',
      },

      '& .MuiInput-underline:before': {
        border: 'none',
      },

      '& .MuiInput-underline:after': {
        borderBottomWidth: '1vw',
        borderColor: Colors.Tigerlily,
      },
    },

    input: {
      backgroundColor: Colors.LynxWhite,
      fontSize: '1.2rem',
      fontWeight: 'bold',
      padding: theme.spacing(3),
      borderRadius: '1vw',
      disableUnderline: true,
    },
  })
)

interface Props {
  readonly handleSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void>
  readonly handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  readonly typography: Theme
}

const Form: React.FC<Props> = (props) => {
  const { handleSubmit, handleChange, typography } = props
  const classes = useStyles()
  return (
    <div>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          multiline
          rows={8}
          onChange={handleChange}
          hiddenLabel
          margin="normal"
          fullWidth
          InputProps={{
            className: classes.input,
          }}
          placeholder="번역할 문장을 입력하세요"
        />

        <Button type="submit" variant="contained">
          <MuiThemeProvider theme={typography}>
            <Typography variant="h5">{'Translate'}</Typography>
          </MuiThemeProvider>
        </Button>
      </form>
    </div>
  )
}

export default Form
