import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // temp
  nameSurn :string = '([a-zA-Z]+) ([a-zA-Z]+)'
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noRepeat(control : FormControl){
    const value : string = control.value?.trim().toLowerCase();
    if(value === "repeat"){
      return {
        noRepeat : true
      }
    }
    return null
    console.log(value);
  }

  miForm : FormGroup = this.fb.group({
    name:  ['', [Validators.required, Validators.pattern(this.nameSurn)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noRepeat]],
  })

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset({
      name  : 'Dave dev',
      email : 'dav@davedev.com',
      username : 'daveDev'
    })
  }

notvalid( field : string){
  return this.miForm.get(field)?.invalid && this.miForm.get(field)?.touched;
}

submitForm(){
  console.log(this.miForm.value)
  this.miForm.markAllAsTouched();
}

}
