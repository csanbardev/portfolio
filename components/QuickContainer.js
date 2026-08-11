const template = document.createElement("template")
template.innerHTML = `
      <section id="quick-access"></section>
    `;

class QuickContainer extends HTMLElement {
  constructor() {
    super()
  }


  connectedCallback() {
    fetch('quickAccess/quickAccess.json') 
      .then(response => response.json())
      .then(quickAccessItems => {
        quickAccessItems.forEach(item => {
          const quickCard = document.createElement('quick-card');
          quickCard.setAttribute('title', item.title);
          quickCard.setAttribute('url', item.url);
          this.append(quickCard)
        });
      })
      .catch(error => console.error('Error al cargar los quick access items:', error));
  }
}

customElements.define('quick-container', QuickContainer)