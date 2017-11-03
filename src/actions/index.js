import { CHANGE_AUTH } from './types';
// handle authenctication, isLogggedIn = boolean
export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}