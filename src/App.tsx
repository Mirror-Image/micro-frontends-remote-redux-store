import { ReactNode } from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store.ts'

interface IWrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: IWrapperProps) => {
  return <Provider store={store}>{children}</Provider>
}

export default Wrapper
