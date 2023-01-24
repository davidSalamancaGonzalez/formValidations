import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    
    nombre: [ '' ,[Validators.minLength(3), Validators.required]],
    
    favoritos: this.fb.array( 
      [ [ 'Metal Gerar', Validators.required],
        [ 'Death Stranding', Validators.required]

      ], Validators.required  )
  })

  nuevoFavorito: FormControl = this.fb.control("", Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

campoEsValido(campo:string){
  return this.miFormulario.controls['nombre'].errors && this.miFormulario.controls['nombre'].touched;
}

agregarFavorito(){
  
  if (this.nuevoFavorito.invalid){return};

  // this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required) );
 
  this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required) );
  
  this.nuevoFavorito.reset();


}

borrar(indice:number) {

this.favoritosArr.removeAt(indice)

}


guardar(){

console.log(this.miFormulario.value);

if (this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched()
}
} 

}
