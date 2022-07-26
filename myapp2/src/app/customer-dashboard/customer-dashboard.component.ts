import { Component, OnInit } from '@angular/core';
import {  ProductModel } from './customer-dash board.model';
import { ApiService } from './shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  formValue !: FormGroup;
  productModelobj: ProductModel = new ProductModel();
  productData !: any;
  showAdd!: boolean;
  showEdit!: boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [""],
      productName: [''],

      price: [''],

    })
    this.getAllProduct();
  }
  displayModal !: boolean;

  dialogModel() {
    this.displayModal = true;
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }
  postProductDetails() {


    this.productModelobj.productName = this.formValue.value.productName;

    this.productModelobj.price = this.formValue.value.price;


    this.api.postProduct(this.productModelobj)
      .subscribe(res => {
        console.log(res);
        alert("Product Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllProduct();
      },
        err => {
          alert("Something Went Wrong");
        })

  }

  getAllProduct() {
    this.api.getAllProduct()
      .subscribe(res => {
        this.productData = res;
      })

  }
  deleteProduct(row: any) {
    this.api.deleteproduct(row.id)
      .subscribe(res => {
        alert("Product Deleted");
        this.getAllProduct()
      })
  }
  editProduct(row: any) {
    this.displayModal = true;
    this.showAdd = false;
    this.showEdit = true;
    this.productModelobj.id = row.id;
    this.formValue.controls['id'].setValue(row.id);

    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['price'].setValue(row.price);



  }
  updateProduct() {
    this.productModelobj.id = this.formValue.value.id;
    this.productModelobj.productName = this.formValue.value.productName;
    this.productModelobj.price = this.formValue.value.price;


    this.api.updateProduct(this.productModelobj, this.productModelobj.id)
      .subscribe(res => {
        alert("updated successfully");
        let cancel = document.getElementById('cancel');
        cancel?.click();
        this.formValue.reset();
        this.getAllProduct();
      });



  }
  onAddClick() {
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }

}