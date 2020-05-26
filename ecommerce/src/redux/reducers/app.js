const initialState = {
    requestMeta: {},
    paymentData: {
        "languageCode": "",
        "merchantReference": "",
        "payfortDetails": {
            "accessCode": "",
            "allowCardTokenization": true,
            "merchantIdentifier": "",
            "paymentUri": "",
            "requestPhrase": "",
            "tokenUri": "",
            "voidOnFailure": false,
        },
        "returnURL": "",
        "serviceCommand": "TOKENIZATION",
        "signature": "",
        "userCards": []
    },
    consentCheck: false,
    countryList: [],
    isHomePage: false,
    isCheckoutPage: false,
    isListingPage: false,
    isChangeSearch: false,
    changeCartData: {},
    deviceFingerPrint: "",
    isManageBooking: false,
    prevUrl: "",
    activeTab: 0,
    cartBookingData: [],
    currency: {},
    country: {},
    cookies: {},
    paymentPayload: "",
    utmConfig: {
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: ""
    },
    userAgent: {
        browser: {
            name: '',
            version: '',
            major: ''
        },
        engine: {
            name: ''
        },
        os: {
            name: '',
            version: ''
        },
        device: {
            vendor: '',
            model: '',
            type: ''
        },
        cpu: {}
    },
    geoData: {},
    datePickerFlag: false,
    modalShow: false,
    isCartDeleted: false,
    showModalId: null,
    isProfilePage: false,
    shouldShowRecentSearch: false,
    shouldShowSessionTimeout: false,
    isSessionTimeoutSearch: false,
    settingsMenuClicked: "Language",
    currentPage: "",
    packageBookingSummary: {
        isActive: 0,
        steps: [
            { id: 1, link: "/1", completed: false, inactive: false },
            { id: 2, link: "/2", completed: true, inactive: false },
            { id: 3, link: "/3", completed: false, inactive: false },
            { id: 4, link: "/4", completed: false, inactive: true }
        ]
    },
    recentSearchTab: -1,
    pageAlias: {},
    isInputFocused: false,
    isPasswordChange: false,
    isUmrah: false,
    isSatelliteMapView: false,
    searchFormAttributes: {},
    searchFormIdentifier: {},
    isScrollTop: false,
    siteId : 0,
    campaignName: null,
    tickerMessages: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REQUEST_META":
            return state = {
                ...state,
                requestMeta: action.requestMeta,
            }
        case "SET_SPECIFIC_SEAT":
            return state = {
                ...state,
                seat: action.params,
            }  
        case "SET_TAB_SEAT":
            return state = {
                ...state,
                currentTabSeat: action.tab,
            }
        case "RESET_REQUEST_META":
            return state = {
                ...state,
                requestMeta: initialState.requestMeta,
            }
        case "SET_PAYMENT_CONSENT_CHECK":
            return state = {
                ...state,
                consentCheck: action.consentCheck
            }
        case "SET_CURRENCY":
            return state = {
                ...state,
                currency: { ...action.currency },
            }
        case "SET_COUNTRY":
            return state = {
                ...state,
                country: { ...action.country },
            }
        case "DATE_PICKER_FLAG":
            return state = {
                ...state,
                datePickerFlag: action.datePickerFlag,
            }

        case "SET_MODAL_SHOW":
            return state = {
                ...state,
                modalShow: action.modalShow,
            }

        case "SET_HOMEPAGE_INDICATOR":
            return state = {
                ...state,
                isHomePage: action.isHomePage,
            }
        case "SET_MANAGEBOOKING_INDICATOR":
            return state = {
                ...state,
                isManageBooking: action.isManageBooking,
            }
        case "SET_CHECKOUTPAGE_INDICATOR":
            return state = {
                ...state,
                isCheckoutPage: action.isCheckoutPage,
            }
        case "SET_LISTINGPAGE_INDICATOR":
            return state = {
                ...state,
                isListingPage: action.isListingPage,
            }
        case "SET_PROFILEPAGE_INDICATOR":
            return state = {
                ...state,
                isProfilePage: action.isProfilePage,
            }
        case "SET_PREVIOUS_URL":
            return state = {
                ...state,
                prevUrl: action.prevUrl,
            }
        case "SET_CHANGESEARCH_INDICATOR": {
            return state = {
                ...state,
                isChangeSearch: action.isChangeSearch,
            }
        }
        case "SET_SEARCH_PARAMETERS": {
            return state = {
                ...state,
                changeCartData: action.changeCartData,
            }
        }
        case "SET_PAYMENT_DATA":
            return state = {
                ...state,
                paymentData: {
                    ...state.paymentData,
                    ...action.paymentData,
                }
            }
        case "SET_DEVICE_FINGERPRINT":
            return state = {
                ...state,
                deviceFingerPrint: action.deviceFingerPrint,
            }
        case "SET_COUNTRY_DROPDOWN_LIST":
            return state = {
                ...state,
                countryList: [...action.countryList]
            }
        case "SET_ACITVE_TAB":
            return state = {
                ...state,
                activeTab: [...action.activeTab]
            }
        case "SET_ACTIVE_MESSAGE_CODE":
            return state = {
                ...state,
                messageCode: action.messageCode
            }
        case "SET_USER_CART_DATA":
            return state = {
                ...state,
                cartBookingData: state.cartBookingData.concat(action.cartBookingData),
            }
        case "SET_PAYMENT_PAYLOAD":
            return state = {
                ...state,
                paymentPayload: action.paymentPayload
            }
        case "SET_UTM_CONFIG":
            return state = {
                ...state,
                utmConfig: {
                    ...state.utmConfig,
                    utm_source: action.utm_source,
                    utm_medium: action.utm_medium,
                    utm_campaign: action.utm_campaign,
                    utm_term: action.utm_term,
                    utm_content: action.utm_content
                }
            }
        case "SET_CART_DELETE":
            return state = {
                ...state,
                isCartDeleted: action.isCartDeleted
            }
        case "SHOW_MODAL_ID":
            return state = {
                ...state,
                showModalId: action.showModalId
            }
        case "SET_SHOW_RECENTSEARCH":
            return state = {
                ...state,
                shouldShowRecentSearch: action.shouldShowRecentSearch
            }
        case "SET_SHOW_SESSIONTIMEOUT":
            return state = {
                ...state,
                shouldShowSessionTimeout: action.shouldShowSessionTimeout
            }
        case "SET_SESSIONTIMEOUT_SEARCH":
            return state = {
                ...state,
                isSessionTimeoutSearch: action.isSessionTimeoutSearch
            }
        case "SET_MENU_CLICKED":
            return state = {
                ...state,
                settingsMenuClicked: action.settingsMenuClicked
            }
        case "SET_CURRENT_PAGE":
            return state = {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_PACKAGE_BOOKING_SUMMARY_DATA":
            return state = {
                ...state,
                packageBookingSummary: action.packageBookingSummary
            }
        case "UPDATE_PACKAGE_BOOKING_SUMMARY_STEP":
            return state = {
                ...state,
                packageBookingSummary: {
                    steps: action.steps
                }
            }
        case "SET_RECENT_SEARCH_TAB":
            return state = {
                ...state,
                recentSearchTab: action.recentSearchTab
            }
        case "SET_SEARCH_TAB_NAME":
            return state = {
                ...state,
                recentTabName: action.recentTabName
            }
        case "SET_RECENT_SORTED_TAB":
            return state = {
                ...state,
                recentSortedTab: action.recentSortedTab
            }
        case "SET_INPUT_FOCUSED":
            return state = {
                ...state,
                isInputFocused: action.isInputFocused
            }
        case "SET_RECENT_FLIGHT_PRICE":
            return state = {
                ...state,
                recentFlightPrice: action.recentFlightPrice
            }
        case "SET_RECENT_TOUR_PRICE":
            return state = {
                ...state,
                recentTourPrice: action.recentTourPrice
            }
        case "SET_FLIGHT_FILTERS":
            return state = {
                ...state,
                flightFilters: action.flightFilters
            }

        case "SET_TOUR_FILTERS":
            return state = {
                ...state,
                tourFilters: action.tourFilters
            }
        case "SET_COOKIES":
            return state = {
                ...state,
                cookies: action.cookies
            }
        case "SET_PASSWORD_CHANGE_SUCCESS":
            return state = {
                ...state,
                isPasswordChange: action.isPasswordChange
            }
        case "SET_UMRAH":
            return state = {
                ...state,
                isUmrah: action.isUmrah
            }
        case "SET_SATELLITE_MAP_VIEW":
            return state = {
                ...state,
                isSatelliteMapView: action.isSatelliteMapView
            }
        case "SET_SEARCH_FORM_ATTRIBUTES":
            return state = {
                ...state,
                searchFormAttributes: { ...action.searchFormAttributes },
            }
        case "SET_SEARCH_FORM_IDENTIFIER" :
            return state = {
                ...state,
                searchFormIdentifier: { ...action.searchFormIdentifier },
            }
        case "SET_SCROLL_TOP":
            return state = {
                ...state,
                isScrollTop: action.isScrollTop
            }
        case "SET_CAMPAIGN_NAME":
            return state = {
                ...state,
                campaignName: action.campaignName
            }
        case "SET_TICKER_MESSAGES":
            return state = {
                ...state,
                tickerMessages: action.tickerMessages
            }
        default:
            return state
    }
};