import { useDispatch, useSelector } from 'react-redux'

import type { TAppDispatch, TRootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = useDispatch.withTypes<TAppDispatch>()
const useAppSelector = useSelector.withTypes<TRootState>()

export { useAppDispatch, useAppSelector }
