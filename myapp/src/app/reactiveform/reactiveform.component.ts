import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  selectedValues: string = 'value1'



  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern('^[a-z0-9-.]+@(?=.*htcindia)([a-z])+\.[a-z]{2,3}$')])],
      password: ["", Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Za-z])[A-Za-z\d\S]{10,30}$')])],
      address: this.formBuilder.array([

      ]),
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get address(): FormArray {
    return this.eventForm.get("address") as FormArray
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      address: ['', Validators.required],
      pincode: ['', Validators.required]
    })
  }


  addAddress() {

    this.address.push(this.newAddress());
  }


  removeAddress(i: number) {

    this.address.removeAt(i);
  }


  onSubmit() {
    console.log(this.eventForm.value);
  }

}



