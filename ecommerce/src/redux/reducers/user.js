const initialState = {
    userSessionId: undefined,
    token: undefined,
    tokenTime: undefined,
    tokenDuration: 25,
    expiry: undefined,
    expiryString: "",
    loyaltySummary: undefined,
    // ****** Need backend data ****** //
    verified: false, // Default false
    // ******************************* //
    notified: true, // Default true
    justRegistered: false, // Default false
    justVerified: false, // Default false
    justLoggedIn: false, // Default false
    justLoggedInFromSocialMedia: false, // Default false
    requireEmail: false, // Default false
    resendClicked: false,
    profile: {
        birthDate: undefined,
        displayName: undefined,
        email: undefined,
        firstName: undefined,
        fullName: " ",
        lastName: undefined,
        phoneDiallingCode: undefined,
        phoneNumber: undefined
    },
    isFavouriteUpdated: false,
    isRecentSearchUpdated: false,
    favouriteCount: 0,
    recentSearchesCount: 0,
    newUserEmailVerified: false,
    resetPasswordSuccess: false,
    refreshPointStatus: false,
    isNewLogin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DETAILS":
            return state = {
                ...state,
                ...action.user,
            }
        case "SET_BIRTHDAY":
            return state = {
                ...state,
                birthDate: action.birthDate
            }
        case "RESEND_EMAIL_CLICKED":
            return state = {
                ...state,
                resendClicked: action.resendClicked
            }
        case "CHECK_IF_NOTIFIED":
            return state = {
                ...state,
                notified: action.notified
            }
        case "REQUIRE_EMAIL_ON_SOCIAL_LOGIN":
            return state = {
                ...state,
                requireEmail: action.requireEmail
            }
        case "CHECK_IF_JUST_LOGGED_IN_FROM_SOCIAL_MEDIA":
            return state = {
                ...state,
                justLoggedInFromSocialMedia: action.justLoggedInFromSocialMedia
            }
        case "WAS_JUST_VERIFIED":
            return state = {
                ...state,
                justVerified: action.justVerified
            }
        case "CHECK_IF_JUST_REGISTERED":
            return state = {
                ...state,
                justRegistered: action.justRegistered
            }
        case "CHECK_IF_JUST_LOGGED_IN":
            return state = {
                ...state,
                justLoggedIn: action.justLoggedIn
            }
        case "CHECK_IF_EMAIL_VERIFIED":
            return state = {
                ...state,
                verified: action.verified
            }
        case "SET_LOYALTY_SUMMARY":
            return state = {
                ...state,
                loyaltySummary: {
                    ...state.loyaltySummary,
                    ...action.loyaltySummary
                }
            }
        case "SET_USER_NOTIFICATIONS":
            return state = {
                ...state,
                notifications: action.notifications,
            }
        case "SET_FAVOURITE_UPDATE":
            return state = {
                ...state,
                isFavouriteUpdated: action.isFavouriteUpdated,
            }
        case "SET_RECENTSEARCH_UPDATE":
            return state = {
                ...state,
                isRecentSearchUpdated: action.isRecentSearchUpdated,
            }
        case "SET_FAVOURITE_COUNT":
            return state = {
                ...state,
                favouriteCount: action.favouriteCount,
            }
        case "SET_RECENTSEARCHES_COUNT":
            return state = {
                ...state,
                recentSearchesCount: action.recentSearchesCount,
            }
        case "SET_NEW_USER_EMAIL_VERIFIED":
            return state = {
                ...state,
                newUserEmailVerified: action.newUserEmailVerified
            }
        case "SET_RESET_PASSWORD_SUCCESS":
            return state = {
                ...state,
                resetPasswordSuccess: action.resetPasswordSuccess
            }
        case "SET_REFRESH_POINT_STATUS":
            return state = {
                ...state,
                refreshPointStatus: action.refreshPointStatus
            }
        case "SET_USER_PROFILE":
            return state = {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.profile
                }
            }
        case "SET_NEW_LOGIN":
            return state = {
                ...state,
                isNewLogin: action.isNewLogin
            }
        case "REMOVE_USER_DETAILS":
            return state = initialState
        default:
            return state
    }
};