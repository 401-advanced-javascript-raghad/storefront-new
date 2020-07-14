let initialState = {results: []};

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'GET':
            return payload;
        default:
            return state;
    }
}


export const activate = (name) => {
    return {
      type: 'ACTIVATE',
      payload: name
    }
  }