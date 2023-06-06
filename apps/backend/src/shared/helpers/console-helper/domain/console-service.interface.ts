import { PinoLogger } from "nestjs-pino";

export type IConsoleInfo = (message: string) => any;

export type TConsoleResolver = (logger: PinoLogger) => IConsoleResolver;

export interface IConsoleResolver {
    info: IConsoleInfo;
}
