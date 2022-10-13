import GlobalStyles from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components';
import {light} from './styles/Themes'



function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={light}>
      App File
    </ThemeProvider>
     
    </>
  );
}

export default App;
