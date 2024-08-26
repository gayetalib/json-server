import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url:string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  add(data:any){
    //console.log(data);
    return this.http.post(this.url, data);
              // .subscribe({
              //   next: (result) => {console.log(result);
              //   },
              //   error: (e) => {console.log(e);
              //   }
              // });
  }

  delete(id: any){
    console.log("ID in service : ", id);
    return this.http.delete(`${this.url}/${id}`);
  }

  getById(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  update( id:any, data: any){
    return this.http.put(`${this.url}/${id}`, data);
  }
}
