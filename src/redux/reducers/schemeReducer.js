const initialState = {
    schemes : []
}

export const schemeReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "GET_SCHEME":
            return {state , schemes : payload}
        default:
            return state;
    }
}