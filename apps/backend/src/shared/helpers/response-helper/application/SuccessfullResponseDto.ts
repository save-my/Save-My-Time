import { BaseResponseHelperDto } from "./BaseResponseHelperDto";

export class SuccessfullResponseDto<T = null> extends BaseResponseHelperDto<T> {
    constructor(data: T = null, message = 'Operation Successfully') {
        super(200, message, data);
    }
}