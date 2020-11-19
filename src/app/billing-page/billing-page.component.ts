import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    formGroupExampleInput : new FormControl( '', [ Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^[0-9]*$/) ]  ),
    formGroupExampleMonth : new FormControl( '', [ Validators.required] ),
    formGroupExampleYear : new FormControl( '', [ Validators.required] ),
    formGroupExampleInput1 : new FormControl( '', [ Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]*$/) ] ),
    formGroupExampleInput2 : new FormControl( '', [ Validators.required] )
  });

  get CardNumber(){
    return this.form.get('formGroupExampleInput');
  }
  get CVV(){
    return this.form.get('formGroupExampleInput1');
  }
  get CardHolderName(){
    return this.form.get('formGroupExampleInput2');
  }
  get Month(){
    return this.form.get('formGroupExampleMonth');
  }
  get Year(){
    return this.form.get('formGroupExampleYear');
  }

  msg()
  {
    this.form.reset();
    this.message();
  }

  submit(form){
    console.log("Payment Successful", form);
  }
  message(){
    this.toastr.success('Thank You!! Browse other movies..');
  }

}
