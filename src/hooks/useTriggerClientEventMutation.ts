import { useState } from 'react';
import type {TTriggerClientEventResponse} from "../types/TTriggerClientEventResponse.ts";
import {triggerClientEvent} from "../helpers/triggerClientEvent.ts";
import type {IResponse} from "../types/IResponse.ts";


export function useTriggerClientEventMutation<
    T,
    S = null,
    E = string
>(endpoint: string
): [
    (sentData: S) => void,
    TTriggerClientEventResponse<T, E>
]{
    const endpointFrom = `f:c:${endpoint}`
    const endpointTo = `c:f:${endpoint}`

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<E | null>(null);
    const [data, setData] = useState<T | null>(null);

    const handle = (sentData?: S) => {
        setIsLoading(true)
        triggerClientEvent<S>(endpointFrom, sentData)
    }

    alt.on(endpointTo, (payload: IResponse<T,  E>) => {
        if(payload.success && !payload.error)
            setData(payload.data)
        else
            setError(payload.error)
        setIsLoading(false)
    })

    return [handle, {data, error, isLoading}]
}
