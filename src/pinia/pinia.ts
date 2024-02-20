import { defineStore } from 'pinia';

type PiniaState = {
  data: null | any[];
};

function definePiniaStore(storeName: string) {
  return defineStore(storeName, {
    state: (): PiniaState => ({
      data: null,
    }),
  });
}

export function usePiniaStore() {
  return defineStore('piniaStore', {
    state: (): PiniaState => ({
      data: null,
    }),
    actions: {
      setData(data: any[]) {
        this.data = data;
      },
    },
  });
}

export type PiniaStore = ReturnType<typeof usePiniaStore>;
