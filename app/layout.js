"use client"

<<<<<<< HEAD
import Header from '../components/Header';
import Footer from '../components/Footer';
=======
import Header from "../components/Header";
import Footer from "../components/Footer";
>>>>>>> 7c871fe9beaaedb5b5a7b4a67a9396b3973fd9ab
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
