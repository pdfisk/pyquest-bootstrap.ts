import { PqApi } from './api/PqApi';

export * from './api/index';

export function start() {
    (window as any).pq_api = PqApi.getInstance();
}

start();
