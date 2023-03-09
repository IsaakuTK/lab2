import * as components from "./components/dad.js"
import data from "./data.js"
import data2 from "./data2.js"
import data3 from "./data3.js"

class Principal extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.people =[];
        this.left=[];
        this.right=[];
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
          var h=0
          while(h<data3.length){
            this.right.push(data3[h]);
            h++;
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
            <my-button name = "${button.name}" image ="${button.image}"></my-button>
            `
            
        });



        this.shadowRoot.innerHTML += ` 
        <h1>¿Eres nuevo en Twitter?</h1>
        <p>Regístrate ahora para obtener tu propia cronología personalizada.</p>
        <p>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</p>
        `
          this.right.forEach((button2) => {
            this.shadowRoot.innerHTML += `
        <section>
        <my-button2 "${button2.name}" </my-button2>
        </section>
        `
        });
      }
  
}
  customElements.define("p-container", Principal);