const template = document.createElement("template")
template.innerHTML = `
      <section id="posts"></section>
    `;

class PostsContainer extends HTMLElement {
  constructor() {
    super()
  }


  connectedCallback() {
    fetch('posts/posts.json') 
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const postCard = document.createElement('post-card');
          postCard.setAttribute('title', post.title);
          postCard.setAttribute('summary', post.summary);
          postCard.setAttribute('image', post.image);
          postCard.setAttribute('url', post.url);
          this.append(postCard)
        });
      })
      .catch(error => console.error('Error al cargar los posts:', error));
  }
}

customElements.define('posts-container', PostsContainer)