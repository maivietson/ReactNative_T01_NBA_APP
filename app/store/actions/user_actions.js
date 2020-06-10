import axios from 'axios';

export function signUp() {
    return {
        type:'SIGN_UP',
        payload: {
            email:'soibachoangda@gmail.com',
            token:'asdfghjkl123456qwertyuiop'
        }
    }
}

export function signIn() {
    return {
        type:'SIGN_IN',
        payload: {
            email:'soibachoangda@gmail.com',
            token:'asdfghjkl123456qwertyuiop'
        }
    }
}