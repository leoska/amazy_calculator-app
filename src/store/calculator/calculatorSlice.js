import { createSlice } from '@reduxjs/toolkit';
import { SNEAKER_POINTS_BY_LEVEL, SNEAKER_BASE_POINTS } from '../../calculator';

const MIN_LEVEL = 0;
const MIN_ENERGY = 2;
const MAX_ENERGY = 30;

// Initial State
const initialState = {
    sneaker: 'ranger',
    quality: 'common',
    level: MIN_LEVEL,
    energy: MIN_ENERGY,
    stats: {
        performance: {
            value: 0,
            base: 0,
            coef: 0,
        },
        fortune: {
            value: 0,
            base: 0,
            coef: 0,
        },
        joy: {
            value: 0,
            base: 0,
            coef: 0,
        },
        durability: {
            value: 0,
            base: 0,
            coef: 0,
        },
    },
    points: 0,
    maxPoints: 0,
};

// Slice
export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setLevel: (state, action) => {
            const { level } = action.payload;

            state.level = level;
            state.maxPoints = level * SNEAKER_POINTS_BY_LEVEL[state.quality];

            const newStats = Object.assign({}, state.stats);

            for (const key of Object.keys(newStats)) {
                if (newStats[key].base < SNEAKER_BASE_POINTS[state.quality].min)
                    newStats[key].base = SNEAKER_BASE_POINTS[state.quality].min;

                if (newStats[key].base > SNEAKER_BASE_POINTS[state.quality].max)
                    newStats[key].base = SNEAKER_BASE_POINTS[state.quality].max;

                newStats[key].coef = SNEAKER_BASE_POINTS[state.quality].min * 0.1 * level;
            }

            state.stats = newStats;
        },

        setEnergy: (state, action) => {
            const { energy } = action.payload;

            if (energy < MIN_ENERGY) {
                energy = MIN_ENERGY;
            }

            if (energy > MAX_ENERGY) {
                energy = MAX_ENERGY;
            }

            state.energy = energy;
        },

        setQuality: (state, action) => {
            const { quality } = action.payload;
            state.quality = quality;

            state.maxPoints = SNEAKER_POINTS_BY_LEVEL[state.quality];
            const newStats = Object.assign({}, state.stats);

            for (const key of Object.keys(newStats)) {
                newStats[key].base = SNEAKER_BASE_POINTS[state.quality].min;
                newStats[key].coef = SNEAKER_BASE_POINTS[state.quality].min * 0.1 * state.level;
            }

            state.stats = newStats;
        },


        setBaseStat: (state, action) => {
            const { name, value } = action.payload;

            if (value < SNEAKER_BASE_POINTS[state.quality].min)
                value = SNEAKER_BASE_POINTS[state.quality].min;

            if (value > SNEAKER_BASE_POINTS[state.quality].max)
                value = SNEAKER_BASE_POINTS[state.quality].max;

            const newStats = Object.assign({}, state.stats);
            newStats[name].base = value;
            state.stats = newStats;
        },

        setValueStat: (state, action) => {
            const { name, value } = action.payload;

            if (value < 0 || value > state.maxPoints)
                return;

            // Calculate current points
            let sum = 0;
            for (const key of Object.keys(state.stats)) {
                sum += state.stats[key].value;
            }

            const newSum = (sum - state.stats[name].value) + value;

            if (newSum <= state.maxPoints && newSum >= 0) {
                const newStats = Object.assign({}, state.stats);
                newStats[name].value = value;
                state.stats = newStats;

                state.points = newSum;
            }
        },
    }
});

// Selectors
export const selectSneaker = (state) => state.calculator.sneaker;
export const selectQuality = (state) => state.calculator.quality;
export const selectLevel = (state) => state.calculator.level;
export const selectEnergy = (state) => state.calculator.energy;
export const selectStats = (state) => state.calculator.stats;
export const selectPoints = (state) => state.calculator.points;
export const selectMaxPoints = (state) => state.calculator.maxPoints;

// Actions
export const { setLevel, setEnergy, setQuality, setBaseStat, setValueStat } = calculatorSlice.actions;

// Export default reducer for store
export default calculatorSlice.reducer;