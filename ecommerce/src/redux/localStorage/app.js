// import localStore from './index';
import { setRequestMeta, setPaymentPayload, setUTMConfig, resetRequestMeta, setSearchFormAttributes , setSearchFormidentifier} from '../actions/app';
import _ from 'lodash';
import { validate, decrypt, encrypt } from '../../helpers/utility';

export function storeRequestMeta(newRequestMeta = {}) {
	return (dispatch) => {
		let oldRequestMeta = decrypt(localStorage.getItem('requestMeta'));
		newRequestMeta.components = _.keyBy(newRequestMeta.components, "componentType");

		if (validate(oldRequestMeta)) {
			oldRequestMeta = JSON.parse(oldRequestMeta);
			newRequestMeta = {
				...oldRequestMeta,
				...newRequestMeta,
				components: {
					...oldRequestMeta.components,
					...newRequestMeta.components,
				}
			};
		}
		localStorage.setItem('requestMeta', encrypt(JSON.stringify(newRequestMeta)));
		dispatch(setRequestMeta(newRequestMeta));
	};
}

export function getRequestMeta() {
	return (dispatch, getState) => {
		return new Promise((resolve, reject) => {
			if (!validate(getState().app.requestMeta)) {
				const requestMeta = decrypt(localStorage.getItem('requestMeta'));
				if (validate(requestMeta)) {
					try {
						dispatch(setRequestMeta(JSON.parse(requestMeta)));
						resolve(JSON.parse(requestMeta))
					} catch (err) {
						reject(err)
					}
				}
				reject(null)
			} else {
				resolve(getState().app.requestMeta)
			}
		})
	};
}

export function removeRequestMeta() {
	return (dispatch, getState) => {
		localStorage.removeItem("requestMeta");
		dispatch(resetRequestMeta())
	}
}

export function storePaymentPayload(payload) {
	return dispatch => {
		localStorage.setItem("Payment_payload", encrypt(payload));
		dispatch(setPaymentPayload(payload))
	}
}

export function getPaymentPayload() {
	return dispatch => {
		payload = decrypt(localStorage.getItem("Payment_payload"));
		dispatch(setPaymentPayload(payload))
	}
}

export function storeUTMConfig(utmConfig = {}) {
	return dispatch => {
		let oldUTMConfig = decrypt(localStorage.getItem('utm_config'));

		if (!_.isNull(oldUTMConfig) && !_.isUndefined(oldUTMConfig)) {
			oldUTMConfig = JSON.parse(oldUTMConfig);
			utmConfig = {
				...oldUTMConfig,
				...utmConfig,
			};
		}
		localStorage.setItem("utm_config", encrypt(JSON.stringify(utmConfig)));
		dispatch(setUTMConfig(utmConfig))
	}
}

export function getUTMConfig() {


	return (dispatch, getState) => {
		
		let utmConfig = decrypt(localStorage.getItem("utm_config"));
		if (!_.isNull(utmConfig) && !_.isUndefined(utmConfig)) {
			dispatch(setUTMConfig(JSON.parse(utmConfig)))
		} else {
			const deviceType = getState().app.userAgent.device.type || "web";
			utmConfig = {
				utm_source: deviceType,
				utm_medium: deviceType,
				utm_campaign: deviceType,
				utm_term: deviceType,
				utm_content: deviceType,
			}
			dispatch(setUTMConfig(utmConfig))
		}
	}
}

export function setSearchAttributes(attributes){
	
	return (dispatch) => {
		localStorage.setItem('searchFormAttributes', encrypt(JSON.stringify(attributes)));
		dispatch(setSearchFormAttributes(attributes));
	}
}

export function getSearchAttributes(){
	
	return (dispatch) => {
		const attributes = decrypt(localStorage.getItem('searchFormAttributes'));

		if(validate(attributes)) {
			dispatch(setSearchFormAttributes(JSON.parse(attributes)));
		}
	}
}