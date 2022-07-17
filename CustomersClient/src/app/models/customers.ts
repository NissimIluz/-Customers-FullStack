import { Address } from "./address";
import { Contract } from "./contract";

export interface Customer {
    firstName: string;
    lastName: string;
    idNumber: string;
    address: Address;
    contractList: Contract[]
}