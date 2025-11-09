import { store, type IBoardStore } from '@/store';
import { createContext, useContext, type ProviderProps } from 'react';
import { useStore } from 'zustand';

const StoreContext = createContext<IBoardStore>(null!);

const StoreProvider = (props: Omit<ProviderProps<IBoardStore>, 'value'>) => {
  const storeState = useStore(store);
  return <StoreContext.Provider {...props} value={storeState} />;
};

export default StoreProvider;

export const useStoreContext = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStoreContext is used outside of the StoreProvider');
  }

  return context;
};
