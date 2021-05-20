import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    productRef = new FormGroup({
    id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  });
  resultMessage:string=""
  products?:Array<Product>;   // it is use to store json file retreive from json file
  
  idVar:boolean = false;
  
  buttonValue:string="Store Rec";

  constructor(public pser:ProductService) { 
    console.log("constructor called..")
  } //DI for Service class

  ngOnInit(): void {
    console.log("ngOnInit")
    this.pser.retreiveProductDetails().subscribe(result=>this.products=result);
  }

  retreiveProduct(){
    
  } 

  storeProduct(){
    
    if(this.buttonValue=="Store Rec") {

    let product = this.productRef.value;
    this.pser.storeProductDetails(product).subscribe(result=>{
        this.resultMessage="Record stored successfully"
        this.pser.retreiveProductDetails().subscribe(result=>this.products=result);
    },error=>{
        this.resultMessage="Record didn't store May be id is duplicate";
    })

  }else {
      //console.log("plz update the record")
      
      let product = this.productRef.value;
      this.pser.updateProductDetails(product).subscribe(result=>{
          this.resultMessage="Record updated successfully"
          this.pser.retreiveProductDetails().subscribe(result=>this.products=result);
          this.idVar=false;
          this.buttonValue="Store Rec";      
      })
  }

  this.productRef.reset();
  }

  deleteRec(id:any){
    //console.log("Delet function called.."+id)
    this.pser.deleteProductRecord(id).subscribe(result=>{
      this.pser.retreiveProductDetails().subscribe(result=>this.products=result);
    })
  }

  updateRec(product:any){
    //console.log(product);
    this.productRef.setValue(product);
    this.idVar=true;
    this.buttonValue="Update Rec";
  }


}
