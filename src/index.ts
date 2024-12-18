import { PyQuestApi } from './api/PyQuestApi';

export * from './api/index';

export function start() {
    (window as any).PyQuestApi = PyQuestApi.getInstance();
}

start();
