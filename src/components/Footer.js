import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p className='footer__message'>Copyright ⓒ {currentYear}</p>
    </footer>
  )
}
