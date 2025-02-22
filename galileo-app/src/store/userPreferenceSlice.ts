import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserPreferenceState {
    favoritePlanets: number[]
}

const initialState: UserPreferenceState = {
    favoritePlanets: [],
}

export const counterSlice = createSlice({
    name: 'userPreferences',
    initialState,
    reducers: {
        addToFavorites: (state, { payload }: PayloadAction<number>) => {
            state.favoritePlanets.push(payload)
        },
        removeFromFavorites: (state, { payload }: PayloadAction<number>) => {
            state.favoritePlanets = state.favoritePlanets.filter((id) => id !== payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = counterSlice.actions

export const userPreferencesSlice = counterSlice.reducer