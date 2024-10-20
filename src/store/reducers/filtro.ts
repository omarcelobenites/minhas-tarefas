import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type * as enuns from '../../utils/enuns/Tarefa'

type filtroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enuns.Prioridade | enuns.Status
}

const initialState: filtroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})
