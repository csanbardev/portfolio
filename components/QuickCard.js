const template = document.createElement("template");
template.innerHTML = /* html */ `
<article class="quick-card">  
  <a class="quick-url" target="_blank" rel="noopener noreferrer"> 
    <h3 class="quick-title"></h3>
  </a>
</article>
`;

class QuickCard extends HTMLElement{
  constructor(){
    super()
  }

  connectedCallback(){
    const html = template.content.cloneNode(true)
    this.append(html)

    // get attributes
    const url = this.getAttribute("url")
    const title = this.getAttribute("title")

    // assign attributes
    if(url) this.querySelector(".quick-url").href = url
    if(title) this.querySelector(".quick-title").textContent = title
  }

}

customElements.define('quick-card', QuickCard)