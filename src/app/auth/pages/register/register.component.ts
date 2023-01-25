import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validations/email-validator.service';
import { ValidatorService } from 'src/app/shared/validations/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  miForm : FormGroup = this.fb.group({
    name:  ['', [Validators.required, Validators.pattern(this.validator.nameSurn)]],
    email: ['', [Validators.required, Validators.pattern(this.validator.emailPattern)], [this.ev]],
    username: ['',  [ Validators.required, this.validator.noRepeat]],
    password: ['',  [ Validators.required, Validators.minLength(6)]],
    password2: ['', [ Validators.required, ]],
  }, {
    validators : [ this.validator.passRepeat('password', 'password2')]
  })

  get emailErrorMsg(){

    const errors = this.miForm.get('email')?.errors
    
    if(errors?.['required']){
      return 'Email required'
    } else if (errors?.['pattern']){
        return 'Email not valid'
      } else if (errors?.['email']){
        return 'Email already used'
      }
   
      return ''
  }

  constructor( private fb : FormBuilder,
               private validator : ValidatorService,
               private ev: EmailValidatorService) { }

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
