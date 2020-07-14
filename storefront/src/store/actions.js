import superagent from 'superagent';


let api = 'http://api-testtt.herokuapp.com/api/v1/products'; 

// this dispatch is not the "dispatch" from redux
export const getRemoteData =() => dispatch => {

    // call my data 
    return superagent.get(api)
        .then(data => {
            // dispatch the action getAction
            dispatch(getAction(data.body))
        });
}

export const putRemoteData = (id, data) => async dispatch => {
    let response = await (await superagent.put(`${api}/${id}`)).send(data);
    // dispatch action for the update
    // dispatch(putAction(response))
    // console.log(response)
}


// we are dispatching the function of the action
// dispatch(getAction())

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}

export const postAction = payload => {
    return {
        type: 'POST',
        payload: payload
    }
}

export const deleteAction = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}


export const activate = (name) => {
    return {
      type: 'ACTIVATE',
      payload: name
    }
  }

  export const add = (name) => {
    return {
        type: 'ADD-TO-CART',
        payload: name
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}