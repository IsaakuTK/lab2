import * as components from "./components/dad.js"
import data from "./data.js"
import data2 from "./data2.js"

class Principal extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.people =[];
        this.left=[];
        var i=0
        while(i<data.length){
            this.people.push(data[i]);
            i++;
          }

        var j=0
        while(j<data2.length){
            this.left.push(data2[j]);
            j++;
          }

        }

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
        `
        });

        this.left.forEach((button) => {
            this.shadowRoot.innerHTML += `
            <my-button "${button.name}" "${button.image}"></my-button>
            `
            });
    }
  
}
  customElements.define("p-container", Principal);