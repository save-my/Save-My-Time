export interface IBaseResponseHelper<T> {
    statusCode: number;
    message: string;
    data: T | null | undefined;
}