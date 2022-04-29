const initialState = {
    schemes : []
}

export const benReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "GET_BENS":
            return {state , bens : payload}
        default:
            return state;
    }
}