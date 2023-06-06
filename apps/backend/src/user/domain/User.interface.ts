import { TNullable } from "src/shared/helpers/type-helpers/domain/Nullable";

export interface IUser {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    dateOfBirth: Date;
    age: number;

    // Created Validations
    tempCode: string;
    isVerified: boolean;
    tempoJwtToken: string;
}

export interface IUserNullable extends TNullable<IUser> { }