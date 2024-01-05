import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'A movie platform to stream on demand videos',
  keys:'movies, netflix, latest-movies, actio, horror'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Navbar/>
        {children}
        <ToastContainer/>

        </AuthProvider>
        </body>
    </html>
  )
}
