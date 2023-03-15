import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'

export const metadata = {
  title: 'Demo E-commerce App',
  description: 'This is a dummy E-commerce app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='min-h-screen'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
