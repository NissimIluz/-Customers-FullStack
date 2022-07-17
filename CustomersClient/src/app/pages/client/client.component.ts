import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { userConstants } from 'src/app/constants/userConstants';
import { Address } from 'src/app/models/address';
import { Contract } from 'src/app/models/contract';
import { Customer } from 'src/app/models/customers';
import { UserCommServiceService } from 'src/app/services/user-comm-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  private _customerData : Customer;
  success: boolean = true;
  updateMessage: string;
  selectContract: Contract;
  get customerData(): Customer { return this._customerData};
  constructor(private router: Router, private _userCommServiceService:UserCommServiceService) {
    const data = localStorage.getItem(userConstants.data);
    if(data) {
      this._customerData = JSON.parse(data);
    }
    else {
      router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem(userConstants.data);
    this.router.navigate(['/login']);
  }


  updateAddress(address:Address){
    this._userCommServiceService.updateAddress(address,this._customerData.idNumber).subscribe((result: any) => {
      if(result===true) {
        this.success = true;
        this.updateMessage = "העדכון בוצע";
      }
      else {
        this.success = false;
        this.updateMessage = "העדכון נכשל"
      }
      setTimeout(()=>this.updateMessage ='', 15000);
    });
  }
  getContract(contract:Contract) {
    if(!contract) return;
    this.selectContract = contract;

  }
}
