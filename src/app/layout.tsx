import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login - Siga Call',
  description: 'Painel gerenciador de chamadas eletrônico.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">

      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  )
}
