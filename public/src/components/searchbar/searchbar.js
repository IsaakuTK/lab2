class Searchbar extends HTMLElement{

    static get observedAttributes() {
      return ["name", "username", "description", "profile", "image"];
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

            <section class="container">
            <form action="" class="search-bar"><input type="text" placeholder="search anything" name="q">
            <button type="submit"><img src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" height ="30" width="30"></button>
            </form>
            </section>
        `;
        }
        
}
  
customElements.define("my-search", Searchbar); 
export default Searchbar;