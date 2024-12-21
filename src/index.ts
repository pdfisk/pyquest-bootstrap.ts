import { PyQuestApi } from './api/PyQuestApi';

export * from './api/index';

export function start() {
    (window as any).pq_api = PyQuestApi.getInstance();
}

start();
