const template = document.createElement("template")
template.innerHTML = /* html */ `
<article class="contact-item">
  <a class="contact-link">
    <div>
      <img class="contact-icon" /><span class="contact-name"></span>
    </div>
    <img class="link-icon" src="img/icons/link.svg" />
  </a>
</article>
`

class ContactItem extends HTMLElement{
  constructor(){
    super()
  }

  connectedCallback(){
    const html = template.content.cloneNode(true)
    this.append(html)

    const contactName = this.getAttribute("contact-name")
    const contactLink = this.getAttribute("contact-link")
    const contactIcon = this.getAttribute("contact-icon")

    if(contactName) this.querySelector(".contact-name").textContent = contactName
    if(contactLink) this.querySelector(".contact-link").href = contactLink
    if(contactIcon) this.querySelector(".contact-icon").src = contactIcon
  }
}


customElements.define('contact-item', ContactItem)