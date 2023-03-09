class Button2 extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["name"];
    }
  
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }    
    
        attributeChangedCallback(pname, oldv, newv) {
        if(oldv !== newv){
          this[pname] = newv;
          this.render();
        }
      }
    
      connectedCallback() {
        this.render();
      }
  
  
      render(){
        this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/button2/button2.css">
          <section>
          <button> ${this.name || ""} </button>
          </section>
      `;
      }
      
}
  
  customElements.define("my-button2", Button2);
  
  export default Button2;