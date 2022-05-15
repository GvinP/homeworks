
export type ThemeType = {
    theme: string
}

const initState: ThemeType = {
    theme: ''
};

export const themeReducer = (state = initState, action: changeThemeType): ThemeType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type changeThemeType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme: string) => {
    return {
        type: 'CHANGE-THEME',
        theme
    } as const
}; // fix any