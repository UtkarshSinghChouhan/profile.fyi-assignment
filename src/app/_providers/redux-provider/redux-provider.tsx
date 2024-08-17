'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';

interface IReduxProvider {
  children?: React.ReactNode;
}

export default function ReduxProvider({ children }: IReduxProvider) {

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
