import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private http : HttpClient) { }
  
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
    .pipe(
      delay(1500),
      map( resp => {
        return (resp.length == 0) ? null : {email : true}
      })
    )
  }  
}
