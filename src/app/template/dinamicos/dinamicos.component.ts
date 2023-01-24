import { Component, OnInit} from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego:string = '';


  persona:Persona = {
    nombre: 'David',
    favoritos: [
      {id: 1, nombre: "metal gear"},
      {id: 2, nombre: "deathStranding"},
    ]
  }
  

guardar(){

  console.log("formulario posteado");
}

agregarJuego(){
  const nuevoFavorito: Favorito = {
    id : this.persona.favoritos.length,
    nombre: this.nuevoJuego
  }
 
  this.persona.favoritos.push({...nuevoFavorito});
  this.nuevoJuego = ""
}


eliminar(i:number){
  this.persona.favoritos.splice(i,1)
}


}
