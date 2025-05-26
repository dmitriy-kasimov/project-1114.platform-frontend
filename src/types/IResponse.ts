export interface IResponse<T, E = string> {
    success: boolean;
    data: T | null;
    error: E | null;
}
