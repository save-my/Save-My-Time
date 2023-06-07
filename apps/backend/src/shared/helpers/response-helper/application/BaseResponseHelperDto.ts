import { IBaseResponseHelper } from "../domain/IBaseResponseHelper";

export class BaseResponseHelperDto<T = null> implements IBaseResponseHelper<T> {
    statusCode: number;
    message: string;
    data: T;
    constructor(statusCode: number, message: string, data: T) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}