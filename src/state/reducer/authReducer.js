import actions from "../action-creator/actions";


const reducer = (state = null, action) => {
    switch (action.type) {
        case actions.SET_AUTH_USER:
            return action.paylod
            break;

        default:
            return state
            break;
    }
}
export default reducer