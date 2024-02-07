// Image Feed Component
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.13.1/cdn/components/card/card.js';

class ImageFeed extends HTMLElement {

  constructor() {
    super();
  }

  async fetchImageUrls () {
    const response = await fetch('/api/images.json');
    if (response.status == 200) {
      return response.json();
    } else {
      return [];
    }
  }

  async html () {
    let images = await this.fetchImageUrls();
  return `<style>
  .card-image {
    max-width: 300px;
  }
</style>
  ${images.map((img) => {
        return `<sl-card class="card-image">
      <img
        slot="image"
        src="/img/${img.url}"
        alt="${img.info}"
      />
      ${img.info}
    </sl-card>`}).join("")
    }
    `;
  }

  async render () {
    this.innerHTML = await this.html();
    window._app.store.showProgress = false;
  }

  connectedCallback () {
    this.render();
  }
}

window.customElements.define('image-feed', ImageFeed);