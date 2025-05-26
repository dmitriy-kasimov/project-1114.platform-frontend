import { TTriggerClientEventResponse } from '../types/TTriggerClientEventResponse.ts';
export declare function useTriggerClientEventMutation<T, S = null, E = string>(endpointFrom: string, endpointTo: string): [
    (sentData: S) => void,
    TTriggerClientEventResponse<T, E>
];
