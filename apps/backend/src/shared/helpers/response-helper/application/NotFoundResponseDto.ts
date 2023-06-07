import { BaseResponseHelperDto } from "./BaseResponseHelperDto";

export class NotFoundResponseDto<T = null> extends BaseResponseHelperDto<T> {
    constructor(data: T = null, message = 'Not Found') {
        super(404, message, data);
    }
}