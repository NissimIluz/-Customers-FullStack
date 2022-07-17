import { Injectable } from '@angular/core';
import { Address } from '../models/address';
import { LoginDTO } from '../models/loginDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserCommServiceService {
  constructor(private apiService: ApiService) {}

  loggin(loginDTO: LoginDTO) {
    return this.apiService.post("Customer/Login", loginDTO);
  }
  updateAddress(address:Address, idNumber:string) {
    return this.apiService.put("Customer/UpdateAddress?idNumber="+idNumber, address);
  }
}
