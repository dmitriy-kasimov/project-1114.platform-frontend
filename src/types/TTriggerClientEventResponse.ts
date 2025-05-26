export type TTriggerClientEventResponse<T, E = string> = {
    data: T | null,
    error: E | null,
    isLoading: boolean
}
