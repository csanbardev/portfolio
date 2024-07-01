const template = document.createElement("template");
template.innerHTML = `
  <style>
    .post-details{
      margin-top: 7rem;
      width: 100%;
    }

    .post-details-image{
      max-width: 70%;
      height: auto;
      display: block;
      margin: 0 auto 16px;
    }

    .post-details-title{
      font-size: 1.5rem;
      color: #cf7328;
    }

    .post-details-summary{
      font-weight: 600;
    }

    .post-details-content{
      padding-top: 1.5rem;
    }
    @media (min-width: 1200px) {
      .post-details-title{
        font-size: 3rem;
      }
    }
  </style>
  <section class="post-details">
    <img class="post-details-image" />
    <h2 class="post-details-title"></h2>
    <p class="post-details-summary"></p>
    <hr/>
    <div class="post-details-content"></div>
  </section>
`;

class PostDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    this.shadowRoot.appendChild(html);

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    fetch('posts/posts.json')
      .then(response => response.json())
      .then(posts => {
        const post = posts.find(p => p.id == postId);
        if (post) {
          this.shadowRoot.querySelector(".post-details-title").textContent = post.title;
          this.shadowRoot.querySelector(".post-details-image").src = post.image;
          this.shadowRoot.querySelector(".post-details-summary").textContent = post.summary;
          this.shadowRoot.querySelector(".post-details-content").innerHTML = post.content;
        } else {
          console.error('Post no encontrado');
        }
      })
      .catch(error => console.error('Error al cargar el post:', error));
  }
}

customElements.define('post-details', PostDetails);
