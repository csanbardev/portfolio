const template = document.createElement("template");
template.innerHTML = /* html */ `
<article class="project-card">  
  <h3 class="project-title"></h3>
  <p class="project-summary"></p>
  <p class="project-tech"></p>
  <div class="project-links">
    <a class="project-git-link" href="" >GitHub</a>
  </div>
</article>
`;

class UtilCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    this.append(html);

    // Obtener y asignar atributos
    const title = this.getAttribute("title");
    const summary = this.getAttribute("summary");
    const tech = this.getAttribute("tech");
    const gitLink = this.getAttribute("git-link");

    // Asignar valores al template
    if (title) this.querySelector(".project-title").textContent = title;
    if (summary) this.querySelector(".project-summary").textContent = summary;
    if (tech) this.renderTech(tech);
    if (gitLink) this.querySelector(".project-git-link").href = gitLink;
  }

  renderTech(tech) {
    const techContainer = this.querySelector(".project-tech");
    if (tech) {
      const techList = JSON.parse(tech);
      techContainer.innerHTML = techList.map(item => `<span class="tech-item"><span class="tech-point">●</span> ${item}</span>`).join(" ");
    }
  }
}

customElements.define('util-card', UtilCard);
