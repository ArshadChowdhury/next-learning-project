"use client"

import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className='min-h-screen bg-gradient-to-r from-gray-200 via-cyan-200 to-zinc-300 md:bg-gradient-to-r md:from-slate-100'>
        {children}
        </div>
        {/* <ReactQueryDevtools/> */}
        <Footer />
        </QueryClientProvider>
        </body>
    </html>
   
  )
}
