import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    winter: 'winter',
    night: 'night',
};

/*loginUser: (state, action) => {
    console.log(action.payload);
  },*/



const getThemeFromLocalStorage = () => {
    const theme =  localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    
    return theme;
}

const initialState = {
    user: { username: 'belvinard' },
    theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    loginUser: (state, action) => {
        console.log('login');
    },
    logoutUser: (state) => {
        state.user = null;
        // localStorage.clear()
        localStorage.removeItem('user');
        toast.success('Logged out successfully');

    },
    toggleTheme: (state) => {
        const { night, winter } = themes;
        state.theme = state.theme === night ? winter : night;
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
    },
},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;

