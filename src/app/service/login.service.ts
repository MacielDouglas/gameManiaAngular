import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:3000/login";

  constructor(private httpClient: HttpClient) { }

  login(user:Login):Observable<any>{
    return this.httpClient.post(this.url,JSON.stringify(user),{
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      observe:"response"
    })
  }

  postCadastroCrud(data : any){
    return this.httpClient.post<any>("http://localhost:3000/users", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCadastroCrud(){
    return this.httpClient.get<any>("http://localhost:3000/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCadastroCrud(data :any,id: number){
    return this.httpClient.put<any>("http://localhost:3000/users/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCadastroCrud(id: number){
    return this.httpClient.delete<any>("http://localhost:3000/users/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

//   httpOptions = {
//     headers: new HttpHeaders({'Content-Type':'application/json'}),observe:'response'

// }

}
