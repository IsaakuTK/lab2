import * as components from "./components/dad.js"
import data from "./data.js"

class Principal extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.people =[];
        var i=0
        while(i<data.length){
            this.people.push(data[i]);
            i++;
          }
        }

<<<<<<< HEAD
    connectedCallback()
    {
        this.render();
    }
  
    render()
    {

       this.people.forEach((person) => {
        this.shadowRoot.innerHTML += `
        <my-first name= "${person.name}" email= "${person.email}" city= "${person.address.city}" company= "${person.company.name}"></my-first>
        <my-like></my-like>
        <my-button>${"elpp".name}</my-button>   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        `
        });
    }
  
=======
  render() {
    this.shadowRoot.innerHTML = `
    <my-first class="cont1"></my-first>
    `;
  }
>>>>>>> 9d75273c4dddd87c67bd19d95e27cd199f45a31d
}
  customElements.define("p-container", Principal);