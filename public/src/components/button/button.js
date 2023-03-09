class Button extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["name"];
    }
  
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }    
    
        attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue){
          this[propName] = newValue;
          this.render();
        }
      }
    
      connectedCallback() {
        this.render();
      }
  
  
      render(){
        this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/button/button.css">
          <section>
          <button>${this.name || "COMO!!"}</button>
          </section>
      `;
      }
      
}
  
  customElements.define("my-button", Button);
  
  export default Button;