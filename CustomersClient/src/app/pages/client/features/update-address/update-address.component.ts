import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userConstants } from 'src/app/constants/userConstants';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {
  address: FormGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    zipCoed: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });
  @Input() addressData: Address;
  @Output() onUpdate: EventEmitter<Address> = new EventEmitter<Address>();;
  constructor() {
  }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (this.addressData) {
      this.address = new FormGroup({
        city: new FormControl(this.addressData.city, [Validators.required]),
        street: new FormControl(this.addressData.street, [Validators.required]),
        number: new FormControl(this.addressData.number, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        zipCoed: new FormControl(this.addressData.zipCode, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
      });
    }
  }
  updateAddress() {
    if (this.address.valid) {
      this.onUpdate.emit(this.address.value);
    }
  }
}
