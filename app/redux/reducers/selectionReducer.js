export default (state=null, action) => {
    switch (action.type) {
        case 'selected_list':
            return action.payload

        default:
            return state;
    }
}