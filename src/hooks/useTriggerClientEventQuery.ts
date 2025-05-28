import { useEffect, useState } from 'react';
import type {TTriggerClientEventResponse} from "../types/TTriggerClientEventResponse.ts";
import type {IResponse} from "../types/IResponse.ts";
import {triggerClientEvent} from "../helpers/triggerClientEvent.ts";

export function useTriggerClientEventQuery<
    T,
    S = string | null,
    E = string
>(endpointFrom: string,
  endpointTo: string,
  params?: S
): TTriggerClientEventResponse<T, E>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<E | null>(null);
    const [data, setData] = useState<T | null>(null);

    alt.on(endpointTo, (payload: IResponse<T,  E>) => {
        if(payload.success && !payload.error)
            setData(payload.data)
        else
            setError(payload.error)
        setIsLoading(false)
    })

    useEffect(() => {
        setIsLoading(true)
        triggerClientEvent<S>(endpointFrom, params)
    }, []);

    return {data, error, isLoading}
}
