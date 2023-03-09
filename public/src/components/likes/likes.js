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
    <link rel="stylesheet" href="./src/components/likes/likes.css">
    <section>
    <button><img src="https://www.vectorico.com/download/emoticon/heart-icon.png" height ="50" width="50"</button>
    <p>${this.count || 0}</p>
    </section>
`;
}
    
}

customElements.define("my-like", Like);

export default Like;