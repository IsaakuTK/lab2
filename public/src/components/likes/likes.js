class Like extends HTMLElement {
  // this is how you declare which props are you interested in

  static get observedAttributes(){
    return ["count"];
}
 
  constructor(){
    super();
    this.attachShadow({mode: "open"});
    this.onButtonClicked = this.onButtonClicked.bind(this);
}

connectedCallback(){
    this.mount();
}

attributeChangedCallback(propName, oldValue, newValue){
    this[propName] = newValue;
    this.mount();
}
mount(){
    this.render();
    this.addEventListeners();
}

addEventListeners(){
    this.shadowRoot.querySelector("button")
    .addEventListener("click", this.onButtonClicked);
}

onButtonClicked(){
    const Value = Number(this.getAttribute("count")) || 0;
    this.setAttribute("count", Value + 1);
}
render(){
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/button/button.css">
    <div>
    <button>Likes ${this.count || 0}</button>
    </div>
`;
}
    
}

customElements.define("my-like", Like);

export default Like;