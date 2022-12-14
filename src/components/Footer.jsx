import '../css/components/footer.css'


export function Footer() {
  return (
    <footer>
      <section>Cristian Sánchez © {new Date().getFullYear()}</section>
      <section id="footer-icons">
        <a target="_blank" href="https://www.linkedin.com/in/cristian-sánchez-barba"><img src="/icons/linkedin.svg" /></a>
        <a target="_blank" href="https://github.com/csanbardev"><img src="/icons/github.svg" /></a>
        <a target="_blank" href="https://twitter.com/CristianSBDev"><img src="/icons/twitter.svg" /></a>
      </section>

    </footer>
  )
}