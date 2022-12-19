import { Department } from "./department";

export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    ssn: number,
    imageUrl: string,
    position: string,
    department: Department,
    createdAt: Date,
    enabled: boolean,
    locked: boolean;
}