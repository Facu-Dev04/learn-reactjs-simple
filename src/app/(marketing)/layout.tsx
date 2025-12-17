import './global.css'

export const metadata = {
    title: 'Marketing',
    description: 'Marketing',
    icons: {
        icon: '/vite.svg',
    }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout