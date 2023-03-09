class Like extends HTMLElement {
  // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ["number"];
  }

  constructor(){
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
  }    
  
      attributeChangedCallback(propName, oldValue, newValue) {
      if(oldValue !== newValue){
        this[propName] = newValue;
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }

    addEventListeners() {
      this.shadowRoot
      .querySelector("button")
        addEventListener("click", this.onButtonClicked);
    }


    render(){
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/likes/likes.css">
        <section>
        <h3>Likes:${this.number || 0}</h3>
        <button>Like</button>
        </section>
    `;
    }

    onButtonClicked(){
      console.log("clicked");
      const pep=Number(this.getAttribute("number"));
      
      this.setAttribute("number", pep + 1)
     
      console.log("number");

    }
    
}

customElements.define("my-like", Like);

export default Like;