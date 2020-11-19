import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngbd-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['dropdown-form.component.css']
})
export class NgbdDropdownForm implements OnInit{
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
   
  }

  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
      
    }
}


}
