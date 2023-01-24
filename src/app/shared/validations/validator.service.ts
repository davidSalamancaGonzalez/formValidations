import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nameSurn :string = '([a-zA-Z]+) ([a-zA-Z]+)'
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  constructor() { }
  
  noRepeat(control : FormControl) : ValidationErrors | null{
    const value : string = control.value?.trim().toLowerCase();
    if(value === "repeat"){
      return {
        noRepeat : true
      }
    }
    return null
  }

  passRepeat(field : string, field2: string){

    return ( formGroup : AbstractControl) : ValidationErrors  | null => {

      const pass1 = formGroup.get(field)?.value
      const pass2 = formGroup.get(field2)?.value

      if(pass1 !== pass2){
        formGroup.get('password2')?.setErrors({noRepeated : true})
        return {noRepeated : true}
      }

      // take care if pass has other validators
      formGroup.get('password2')?.setErrors(null)
      return null;
    };
  }
}
