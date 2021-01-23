import { Office } from "./office";

export class Employee {

    id: number;
    first_name: string;
    last_name: string;
    extension: string;
    email: string;
    office: Office;
    reportsTo: Employee;
    job_title: string;
    create_at: string;

}