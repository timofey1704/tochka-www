import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //return {...state, title : action.payload}
      state.title = action.payload // ошибок нет потому что в reduxjs/toolkit есть immer (создание нового состояния путем изменения текущего)
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite //поскольку onlyFavorite является логическим значением то можно использовать инверсию
    },
    resetFilters: () => {
      // вернуть фильтры в состояние по умолчанию
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions // экспорт actionCreator

export const selectTitleFilter = (state) => state.filter.title // используется для работы с useSelector в компоненте
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

// console.log(filterSlice.actions) // замена actionCreators
// console.log(filterSlice.actions.setTitleFilter('test')) // передача payload

export default filterSlice.reducer // экспорт редюсера
