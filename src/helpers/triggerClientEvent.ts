export function triggerClientEvent<T>(endpoint: string, obj?: T) {
    const objJSON = JSON.stringify(obj);
    if ('alt' in window) {
        alt.emit(endpoint, objJSON);
    }
}
