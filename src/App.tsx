import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return (<div>
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Container>
          <h1>Dark Mode</h1>
        </Container>
    </ThemeProvider>
  </div>)
}

export default App;
