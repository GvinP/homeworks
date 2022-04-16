import {UserType} from "../HW8";

export type ActionSortUpType = {
    type: 'sort'
    payload: 'up'
}
export type ActionSortDownType = {
    type: 'sort'
    payload: 'down'
}
export type ActionCheckAgeType = {
    type: 'check'
    payload: number
}

export type AllActionsType = ActionSortUpType | ActionSortDownType | ActionCheckAgeType

export const homeWorkReducer = (state: Array<UserType>, action: AllActionsType): Array<UserType> => {
    let newState = [...state]
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return newState.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return newState.sort((a, b) => b.name > a.name ? 1 : -1)
            }
            return newState
        }
        case 'check': {
            // need to fix
            return newState.filter(el => el.age >= action.payload)
        }
        default:
            return newState
    }
}