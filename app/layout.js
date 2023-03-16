"use client"

import Header from './components/Header';
import Footer from './components/Footer';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './globals.css';

const queryClient = new QueryClient();

export const metadata = {
  title: 'Demo E-commerce App',
  description: 'This is a dummy E-commerce app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className='min-h-screen'>
        {children}
        </div>
        {/* <ReactQueryDevtools/> */}
        <Footer />
        </QueryClientProvider>
        </body>
    </html>
   
  )
}
