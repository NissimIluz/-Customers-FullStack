import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { ContractComponent } from './features/contract/contract.component';
import { UpdateAddressComponent } from './features/update-address/update-address.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ClientComponent,
    ContractComponent,
    UpdateAddressComponent
  ],
  imports: [
    ClientRoutingModule,
    MatExpansionModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [ClientComponent],

})
export class ClientModule { }
