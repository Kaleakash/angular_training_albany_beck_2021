import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http:HttpClient) { }   //DI for HttpClient

  //In post 1st parameter url and 2nd json object 
  storeProductDetails(product:any):Observable<Product>{
  //this.http.post("http://localhost:3000/products",product).
  //subscribe(result=>console.log(result),error=>console.log(error)) 
 return this.http.post<Product>("http://localhost:3000/products",product);
  }


  retreiveProductDetails():Observable<Product[]> {
   return this.http.get<Product[]>("http://localhost:3000/products") 
  }
  
  deleteProductRecord(id:any):Observable<Product>{
  return this.http.delete<Product>("http://localhost:3000/products/"+id)// path param technique 
  }
  
  updateProductDetails(product:any):Observable<Product>{
  return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);
  }
  
}
