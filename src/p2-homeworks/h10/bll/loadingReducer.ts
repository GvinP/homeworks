export type loadingAT = {
    type: 'LOADING',
    loading: boolean
}
export type StateType = {
    loading: boolean
}
const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: loadingAT): StateType => {// fix any
    switch (action.type) {
        case 'LOADING': {
            return {loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): loadingAT => ({type: 'LOADING', loading}) // fix any