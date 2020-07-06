const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

function setLoginPending(isLoginPending){
    return{
        type: LOGIN_PENDING,
        isLoginPending
    }
}

function setLoginSuccess(isLoginSuccess){
    return{
        type: LOGIN_SUCCESS,
        isLoginSuccess
    }
}

function setLoginError(isLoginError){
    return{
        type: LOGIN_ERROR,
        isLoginError
    }
}

export function login(email, password){
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendLoginRequest(email, password)
        .then(success => {
            dispatch(setLoginPending(false))
            dispatch(setLoginSuccess(true))
        })
        .catch(err => {
            dispatch(setLoginPending(false))
            dispatch(setLoginError(err))
        });
    };
    
}

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null
}, action){

    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };
        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending: action.isLoginPending
            };
        case LOGIN_ERROR:
            return{
                ...state,
                isLoginError: action.isLoginError
            };    
        default:
            return state;    
                
    }

}

function sendLoginRequest(email, password){
    return new Promise((resolve, reject) => {
        fetch('./login.json')
        .then(response => {
            return response.json();
          })
          .then((result) => {
        if(email === result[0].username && password === result[0].password){
            localStorage.setItem('login', JSON.stringify(result));
            return resolve(true);
        } else{
            alert('Please check username and password, and try again');
            return reject(new Error('Invalid'))
        }
    })
    })
}