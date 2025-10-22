import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Funcionario {
  
  private apiUrl = "https://node-vercel-app-rho.vercel.app/api/funcionarios";

  constructor(private http: HttpClient){}



  getFuncionarios(){
    return this.http.get(this.apiUrl)
  }


  getUserById(id: string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

 postFuncionarios(formulario: any){
    return this.http.post(this.apiUrl, formulario);
  }

  deletarUserById(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
