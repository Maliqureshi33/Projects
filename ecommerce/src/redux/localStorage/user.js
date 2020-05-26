import _ from 'lodash';
import { setUserDetails, setUserProfile, removeUserDetails as removeUserDetailsFromRedux } from '../actions/user';
import uuidv4 from 'uuid/v4'
import { validateUserSession, validate, encrypt, decrypt } from '../../helpers/utility';
import { createGuestUser } from '../../apiCalls/Account';
import { resetMultiCityAPIData } from '../actions/flight';
import { removeFlightAPIData, removeMultiCityAPIData } from './flight';
import { removePackageAPIData } from './package';
import { removeHotelAPIData } from './hotel';
import { removeTourAPIData } from './tour';

export function getUserDetails() {
    return dispatch => {
        return new Promise((resolve,reject) => {
            let userDetails = decrypt(localStorage.getItem("user_details"));
            try {
                if (_.isNull(userDetails)) {
                    userDetails = createUserSession();
                    reject(userDetails)
                }
                else if (!validateUserSession(JSON.parse(userDetails))) {
                    userDetails = {
                        ...JSON.parse(userDetails),
                        ...createUserSession()
                    }
                    resolve(userDetails);
                }else {
                    userDetails = JSON.parse(userDetails);
                    resolve(userDetails);
                }
            } catch(e) {
                userDetails = createUserSession();
                reject(userDetails)
            }

            dispatch(storeUserDetails(userDetails));
        })
    }
}

export function storeUserDetails(user) {
    return dispatch => {
        
        let userDetails = decrypt(localStorage.getItem("user_details"));
        if (validate(userDetails)) {
            userDetails = JSON.parse(userDetails);
            user = {
                ...userDetails,
                ...user
            }

        }
        localStorage.setItem("user_details", encrypt(JSON.stringify(user)));
        dispatch(setUserDetails(user));
    }
}


export function removeUserDetails() {
    return dispatch => {
        
        dispatch(removeFlightAPIData());
        dispatch(removeMultiCityAPIData());
        dispatch(removeHotelAPIData());
        dispatch(removePackageAPIData());
        dispatch(removeTourAPIData())
        localStorage.removeItem("user_details");
        dispatch(removeUserDetailsFromRedux());
        dispatch(getUserDetails()) // refresh the session details
        
        dispatch(createGuestUser())
        .then(()=> {
        }).catch(()=> {
        })
    }
}

export function createUserSession(userSessionId = uuidv4()) {
    return {
        userSessionId,
        sessionTime: Date.now(),
        sessionDuration: 30 // minutes
    }
}

export function updateProfileStorage(profile) {
    return dispatch => {
        let userDetails = decrypt(localStorage.getItem("user_details"));
        if (validate(userDetails)) {
            userDetails = JSON.parse(userDetails);
            userDetails = {
                ...userDetails,
                profile : {
                    ...userDetails.profile,
                    ...profile
                }
            }

        }
        localStorage.setItem("user_details", encrypt(JSON.stringify(userDetails)));
        dispatch(setUserProfile(profile));
    }
}


export function getUserPaymentInfo() {
    let paymentInfo = decrypt(localStorage.getItem("pay_info"));
    if (validate(paymentInfo)) {
        paymentInfo = JSON.parse(paymentInfo);
    }

    return paymentInfo;
}

export function storeUserPaymentInfo(info) {
    if (validate(info)) {
        localStorage.setItem("pay_info", encrypt(JSON.stringify(info)));
    }
}