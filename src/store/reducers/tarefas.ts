import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type Tarefa from '../../models/Tarefa'
import * as enuns from '../../utils/enuns/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript revendo o exercicio do módulo 7',
      prioridade: enuns.Prioridade.NORMAL,
      status: enuns.Status.CONCLUIDA,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar material de apoio',
      prioridade: enuns.Prioridade.NORMAL,
      status: enuns.Status.PENDENTE,
      titulo: 'Estudar Typscript'
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landing page',
      prioridade: enuns.Prioridade.IMPORTANTE,
      status: enuns.Status.PENDENTE,
      titulo: 'Estudar Bootstrap'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
