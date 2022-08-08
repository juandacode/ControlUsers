import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string ='http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) { }

  GetUsers() {
    return this.httpClient.get<UserModel[]>(`${this.apiUrl}`)
  }
  getUser(id: string) {
    return this.httpClient.get<UserModel>(`${this.apiUrl}/${id}`)
  }

  CreateUser(user: UserModel) {
    return this.httpClient.post<UserModel>(`${this.apiUrl}`, user);
  }

  DeleteUser(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  updateUser(id: string) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, id);
  }
}
