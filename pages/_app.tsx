import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/themes'
// import '@/styles/globals.css'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp