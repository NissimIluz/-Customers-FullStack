import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { userConstants } from 'src/app/constants/userConstants';
import { UserCommServiceService } from 'src/app/services/user-comm-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("idInput") idInput!: ElementRef<any>
  userFormData = new FormGroup({
    userID: new FormControl("", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), this.idValidators])
  })
  class: string = "inputInvalid"
  _invalidMassageID: string;
  get InvalidMassageID(): string {
    return this._invalidMassageID
  }

  constructor(private userCommServiceService: UserCommServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const userIDChange$ = this.userFormData.controls.userID.valueChanges.pipe(debounceTime(1000))
    userIDChange$.subscribe(() => this.idVisualConfig(this.userFormData))
  }

  loggin() {
    if(!this.userFormData.valid) return;
    this.userCommServiceService.loggin({ idNumber: this.userFormData.value.userID?.toString()??''}).subscribe(data => {
      if(data) {
        localStorage.setItem(userConstants.data, JSON.stringify(data));
        this.router.navigate(['/client']);
      }
      else{
        this._invalidMassageID = "User not found. Please try again.";
      }
    });
  }
 
  idValidators(control: AbstractControl): ValidationErrors | null {
    let id = String(control.value).trim();
    let retVal: Boolean;
    if (id.length > 9 || id.length < 5 || isNaN(control.value)) {
      retVal = false;
    }
    else {
      // Pad string with zeros up to 9 digits
      id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
  
      retVal = Array.from(id, Number)
        .reduce((counter, digit, i) => {
          const step = digit * ((i % 2) + 1);
          return counter + (step > 9 ? step - 9 : step);
        }) % 10 === 0;
    }
    return retVal? null: { key: retVal};
  }



  private idInvalidCheck(value: string): string {
    return value == "" ? "Email required" : "Invalid id"
  }
  private idVisualConfig(userFormData: any): void {
    if (userFormData.controls.userID.valid) {
      this._invalidMassageID = "";
      this.idInput.nativeElement.classList.remove("input-invalid");
    }
    else {
      this._invalidMassageID = this.idInvalidCheck(userFormData.controls.userID.value);
      this.idInput.nativeElement.classList.add("input-invalid")

    }
  }
}

