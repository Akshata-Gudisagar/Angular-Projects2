import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService{
  post(data: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res) => {
        return res;
      }))
  }

  getAllProduct() {
    return this.http.get("http://localhost:3000/posts")
      .pipe(map((res) => {
        return res;
      }))

  }

  updateProduct(data: any, id: any) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res) => {
        return res;
      }))
  }

  deleteproduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res) => {
        return res;
      }))
  }

}
