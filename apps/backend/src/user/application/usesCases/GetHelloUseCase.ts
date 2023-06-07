import { Injectable } from "@nestjs/common";
import { BaseResponseHelperDto } from "src/shared/helpers/response-helper/application/BaseResponseHelperDto";
import { GetHelloMapper } from "../mapper/GetHelloMapper";

@Injectable()
export class GetHelloUseCase {
    constructor(private mapper: GetHelloMapper) {}

    execute(): BaseResponseHelperDto {
        return this.mapper.toDto();
    };
}