import { TConsoleResolver } from "../domain/console-service.interface";

export const LoggerResolver: TConsoleResolver = (logger) => {
    return {
        info: (message) => {
            logger.info(`${message}`);
        }
    }
}