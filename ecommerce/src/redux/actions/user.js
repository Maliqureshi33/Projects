export function setUserDetails(user) {
    return {
        type: "SET_USER_DETAILS",
        user
    }
}
export function setLoyaltySummary(loyaltySummary) {
    return {
        type: "SET_LOYALTY_SUMMARY",
        loyaltySummary
    }
}

export function setUserNotifications(notifications) {
	return {
			type: "SET_USER_NOTIFICATIONS",
			notifications
	}
}

// ******** Overriding birthDate from API to redux state
export function setDateOfBirth(birthDate) {
	return {
		type: "SET_BIRTHDAY",
		birthDate
	}
}

// ******** For header notification on sign in. Shows every login only
export function checkIfNotified(notified) {
	return {
		type: "CHECK_IF_NOTIFIED",
		notified
	};
}

export function checkIfJustRegistered(justRegistered) {
	return {
		type: "CHECK_IF_JUST_REGISTERED",
		justRegistered
	};
}

export function checkIfJustLoggedIn(justLoggedIn) {
	return {
		type: "CHECK_IF_JUST_LOGGED_IN",
		justLoggedIn
	};
}

// ******** For dashboard notification if email is already verified

export function resendEmailClicked(resendClicked) {
	return {
		type: "RESEND_EMAIL_CLICKED",
		resendClicked
	}
}

export function checkIfEmailVerified(verified) {
	return {
		type: "CHECK_IF_EMAIL_VERIFIED",
		verified
	};
}

// ******** For activating "Thank you for verifying!"
export function wasJustVerified(justVerified) {
	return {
		type: "WAS_JUST_VERIFIED",
		justVerified
	};
}


// ******** For checking if user came from social media login/registration
export function loggedInFromSocialMedia(justLoggedInFromSocialMedia) {
	return {
		type: "CHECK_IF_JUST_LOGGED_IN_FROM_SOCIAL_MEDIA",
		justLoggedInFromSocialMedia
	};
}

// ******** For triggering Email popup when social media has no email
export function requireEmailOnSocialLogin(requireEmail) {
	return {
		type: "REQUIRE_EMAIL_ON_SOCIAL_LOGIN",
		requireEmail
	};
}

export function setUserProfile(profile) {
    return {
        type : "SET_USER_PROFILE",
        profile
    }
}

export function removeUserDetails() {
    return {
        type : "REMOVE_USER_DETAILS"
    }
}

export function setFavouriteUpdate(isFavouriteUpdated) {
	return {
		type : "SET_FAVOURITE_UPDATE",
		isFavouriteUpdated
	}
}

export function setRecentSearchUpdate(isRecentSearchUpdated) {
	return {
		type : "SET_RECENTSEARCH_UPDATE",
		isRecentSearchUpdated
	}
}

export function setFavouritesCount(favouriteCount) {
	return {
		type : "SET_FAVOURITE_COUNT",
		favouriteCount
	}
}

export function setRecentSearchesCount(recentSearchesCount) {
	
	return {
		type : "SET_RECENTSEARCHES_COUNT",
		recentSearchesCount
	}
}

export function setNewUserEmailVerified(newUserEmailVerified){
	return {
		type : "SET_NEW_USER_EMAIL_VERIFIED",
		newUserEmailVerified
	}
}

export function setResetPasswordSuccess(resetPasswordSuccess){
	return {
		type : "SET_RESET_PASSWORD_SUCCESS",
		resetPasswordSuccess
	}
}

export function setRefreshPointStatus(refreshPointStatus){
	return {
		type : "SET_REFRESH_POINT_STATUS",
		refreshPointStatus
	}
}

export function setNewLogin(isNewLogin){
	return {
		type : "SET_NEW_LOGIN",
		isNewLogin
	}
}
