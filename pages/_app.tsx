import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <ShoppingCartProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ShoppingCartProvider>
  )

}
