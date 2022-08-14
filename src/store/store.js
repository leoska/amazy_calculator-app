import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from './calculator/calculatorSlice';

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice,
    }
});