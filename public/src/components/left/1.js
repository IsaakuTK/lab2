class First extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["count"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.render();
    }
  
    // this is the method is triggered when the component is added to the document
    connectedCallback() {
      console.log("mounted");
      this.render();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/left/left.css">
          <section>
            <button id="uno">  </button>
            <button id="dos"> # Explorar </button>
            <button id="tres"> Configuración </button>
          </section>
      `;
    }
  
  }
  
  customElements.define("my-first", First);
  export default First;