import '@strixdev/styles/globals.css'
import '@strixdev/styles/Footer.css'
import '@strixdev/styles/Header.css'
import '@strixdev/styles/Navigator.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
