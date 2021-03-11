import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Default from 'styles/default.theme.js'
import GlobalStyles from 'styles/global'
import 'styles/bulma.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Default}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
