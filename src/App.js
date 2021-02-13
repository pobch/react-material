import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  pageStyle: {
    padding: '30px',
  },
  btnStyle: {
    '&:hover': {
      backgroundColor: 'black',
    },
  },
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.pageStyle}>
      <Button color="secondary" variant="contained" className={classes.btnStyle}>
        Hello World
      </Button>
    </div>
  )
}

export default App
