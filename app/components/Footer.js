import styles from '../styles/Footer.module.css';
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="flex justify-center space-x-4">
        <p>Full Stack Tech © 2023</p>
        <Link href="/terms-and-conditions" className="text-gray-800">Terms and Conditions</Link>
        <Link href="/privacy-policy" className="text-gray-800">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer;

