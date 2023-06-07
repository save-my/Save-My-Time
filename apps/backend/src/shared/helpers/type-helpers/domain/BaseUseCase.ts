export interface IBaseUseCase {
    execute <T>(): Promise<T>;
}