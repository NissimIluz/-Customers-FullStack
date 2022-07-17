import { Package } from "./Package";

export interface Contract {
    contractId: number;
    contractName: string;
    packagesList: Package[];
}
