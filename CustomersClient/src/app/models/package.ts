import { PackageType } from "../enums/packageType";

export interface Package {
    packageType: PackageType
    packageName: string;
    packageQuantity: number;
    packageBalance: number;
}