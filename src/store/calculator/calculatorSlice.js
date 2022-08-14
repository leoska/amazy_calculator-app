import { createSlice } from '@reduxjs/toolkit';
import calculator from '../../calculator';

const MIN_LEVEL = 1;
const MIN_ENERGY = 2;

// Initial State
const initialState = {
    sneaker: 'ranger',
    quality: 'common',
    level: MIN_LEVEL,
    energy: MIN_ENERGY,
    performance: 0,
    fortune: 0,
    joy: 0,
    durability: 0,
    points: 0,
    maxPoints: 0,
};

// Slice
export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setSettings: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;

            calculator(state);
        },
        setStat: (state, action) => {

        }
    }
});

// Selectors
export const selectSneaker = (state) => state.calculator.sneaker;
export const selectQuality = (state) => state.calculator.quality;
export const selectLevel = (state) => state.calculator.level;
export const selectEnergy = (state) => state.calculator.energy;
export const selectPerfomance = (state) => state.calculator.performance;
export const selectFortune = (state) => state.calculator.fortune;
export const selectJoy = (state) => state.calculator.joy; 
export const selectDurability = (state) => state.calculator.durability;
export const selectPoints = (state) => state.calculator.points;
export const selectMaxPoints = (state) => state.calculator.maxPoints;

// Actions
export const { setSettings, setStat } = eventsSlice.actions;

// Export default reducer for store
export default calculatorSlice.reducer;