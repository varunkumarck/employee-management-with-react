import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export interface EmployeeState {
  value: any[];
  nextId: number;
  status: 'idle' | 'loading' | 'failed';
}

export interface Employee {
  id: number,
  dob: string | undefined,
  name: string | undefined,
  department: string| undefined,
  email: string | undefined
}

const initialState: EmployeeState = {
  value: [],
  nextId: 101,
  status: 'idle',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Employee>) => {
      const idx = state.value.findIndex(val => val.id === action.payload.id);
      state.value = [...state.value.slice(0, idx), action.payload, ...state.value.slice(idx + 1)];
    },
    add: (state, action: PayloadAction<Employee>) => {
      state.value.push(action.payload)
      state.nextId++; //immer 
    },
    remove: (state, action: PayloadAction<string>) => {
      const idx = state.value.findIndex(val => val.id === action.payload);
      state.value = [...state.value.slice(0, idx), ...state.value.slice(idx + 1)]
      state.nextId--;
    },
  },
});

export const { add, remove, update } = employeeSlice.actions;

export const selectEmployees = (state: RootState) => state.employee.value;
export const getNextEmpId = (state: RootState) => state.employee.nextId;

export default employeeSlice.reducer;
