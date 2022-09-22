import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ↓ 관리 할 Slice

// ↑ 관리 할 Slice

const rootReducer = combineReducers({

})

const store = configureStore({
  reducer: rootReducer,
})

export default store