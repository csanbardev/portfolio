const template = document.createElement("template");
template.innerHTML = /* html */ `
<article class="post-card">  
  <a class="post-url"> 
    <img class="post-image" />
    <h3 class="post-title"></h3>
    <p class="post-summary"></p>
  </a>
</article>
`;

class PostCard extends HTMLElement{
  constructor(){
    super()
  }

  connectedCallback(){
    const html = template.content.cloneNode(true)
    this.append(html)

    // get attributes
    const url = this.getAttribute("url")
    const image = this.getAttribute("image")
    const title = this.getAttribute("title")
    const summary = this.getAttribute("summary")

    // assign attributes
    if(url) this.querySelector(".post-url").href = url
    if(image) this.querySelector(".post-image").src = image
    if(title) this.querySelector(".post-title").textContent = title
    if(summary) this.querySelector(".post-summary").textContent = summary
  }

}

customElements.define('post-card', PostCard)