class Card extends HTMLElement{

    static get observedAttributes() {
      return ["name", "email", "city", "company"];
    }
  
      constructor(){
          super();
          this.attachShadow({mode:"open"});
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
            <link rel="stylesheet" href="./src/components/card/card.css">
            <section>
              <h1>${this.name}</h1>
              <p>${this.email}</p>
              <p> ${this.city} </p>
              <p> ${this.company} </p>
            </section>
        `;
        }
        
  }
  
  customElements.define("my-first", Card);
  
  export default Card;
  