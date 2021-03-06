import AsyncStorage from '@react-native-community/async-storage';

export const FIREBASEURL = `https://likeit-4aace.firebaseio.com`;
export const APIKEY = `AIzaSyCfhqRvzALug0fv8I50e8kdytnipPl_Lbc`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

export const getTokens = async(cb) => {
    try {
        // const storedOb = await AsyncStorage.getItem('@likeIt_app@save');
        // valueOb = JSON.parse(storedOb);
        // console.log(valueOb);
        let value = {};
        await AsyncStorage.getItem('@likeIt_app@save', (err, result) => {
            value = JSON.parse(result);
            cb(value);
        });
    } catch (error) {
        console.log(error);
    }
}

export const setTokens = async(value, cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);

    let valueOb = {};
    valueOb.token = value.token;
    valueOb.refreshToken = value.refToken;
    valueOb.expireToken = expiration.toString();
    valueOb.uid = value.uid;

    const storedOb = JSON.stringify(valueOb);

    try {
        // console.log(storedOb);
        await AsyncStorage.setItem('@likeIt_app@save', storedOb, () => {
            cb();
        });
    } catch(e) {
        console.log(e);
    }
}