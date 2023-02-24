import { AuthModel } from "./auth.model";

export class UserModel {
    id!: number;
    name!: string;
    description!: string;
    startdate!: string;
    enddate!: string;
    auth!: AuthModel;
}
