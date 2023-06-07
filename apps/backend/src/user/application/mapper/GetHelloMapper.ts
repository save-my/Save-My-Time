import { Injectable } from "@nestjs/common";
import { SuccessfullResponseDto } from "src/shared/helpers/response-helper/application/SuccessfullResponseDto";

@Injectable()
export class GetHelloMapper {
    toDto(): SuccessfullResponseDto {
        return new SuccessfullResponseDto(null, 'Execute in UserProvider');
    }
}