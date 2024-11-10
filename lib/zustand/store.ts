import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// State types
interface States {
    user: Object;
}

// Action types
interface Actions {
    setUser: (data:Object) => void;
}

// useCounterStore
export const useStore = create(
    persist<States & Actions>(
        (set) => ({
            // States
            user: {},
            // Actions
            setUser: (data) => set((state) => ({ user: data })),
        }),
        {
            name: 'app-name',
            storage: createJSONStorage(() => localStorage),
        }
    )
);