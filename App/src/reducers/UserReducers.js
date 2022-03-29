import { addException } from "react-native/Libraries/LogBox/Data/LogBoxData";

export const InitialState = {
    avatar: '',
    favorites: [],
    appointmennts: []
};

export const UserReducer = (state, action) => {
    switch(addException.type){
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar};
        break;
        default:
            return state;    
    }
}