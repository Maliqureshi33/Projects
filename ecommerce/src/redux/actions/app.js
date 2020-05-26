export function setRequestMeta(requestMeta) {
	return {
		type: 'SET_REQUEST_META',
		requestMeta
	};
}

export function setSeatForSpecificPassenger(params) {
	return {
		type: 'SET_SPECIFIC_SEAT',
		params
	};
}

export function setHomePage(isHomePage) {
	return {
		type : "SET_HOMEPAGE_INDICATOR",
		isHomePage
	}
}

export function setSeatForSpecificPassengerArray(params) {
	return {
		type: 'SET_SPECIFIC_SEAT_ARRAY',
		params
	};
}

export function setCurrentTabForSeat(tab) {
	return {
		type: 'SET_TAB_SEAT',
		tab
	};
}

export function resetRequestMeta() {
	return {
		type : "RESET_REQUEST_META"
	}
}

export function setConsentCheck(consentCheck) {
	return {
		type: 'SET_PAYMENT_CONSENT_CHECK',
		consentCheck
	};
}

export function setUserCartData(cartBookingData) {
	debugger
	return {
		type: 'SET_USER_CART_DATA',
		cartBookingData
	};
}

export function selectedCurrencyRedux(currency) {
	return {
		type: 'SET_CURRENCY',
		currency
	};
}

export function setDatePickerFlag(datePickerFlag) {
	return {
		type: 'DATE_PICKER_FLAG',
		datePickerFlag
	};
}

export function selectedCountryRedux(country) {
	return {
		type: 'SET_COUNTRY',
		country
	};
}

export function setManageBookingIndicator(isManageBooking) {
	return {
		type: 'SET_MANAGEBOOKING_INDICATOR',
		isManageBooking
	};
}

export function setCheckoutPageIndicator(isCheckoutPage) {
	return {
		type: 'SET_CHECKOUTPAGE_INDICATOR',
		isCheckoutPage
	};
}

export function setListingPageIndicator(isListingPage) {
	return {
		type: 'SET_LISTINGPAGE_INDICATOR',
		isListingPage
	};
}

export function setProfilePageIndicator(isProfilePage) {
	return {
		type: 'SET_PROFILEPAGE_INDICATOR',
		isProfilePage
	};
}

export function setInputFocused(isInputFocused) {
    return {
        type: 'SET_INPUT_FOCUSED',
        isInputFocused
    };
}

export function setPreviousUrl(prevUrl) {
	return {
		type: 'SET_PREVIOUS_URL',
		prevUrl
	};
}

export function setPaymentData(paymentData) {
	return {
		type: 'SET_PAYMENT_DATA',
		paymentData
	};
}

export function setChangeSearchIndicator(isChangeSearch) {
	return {
		type: 'SET_CHANGESEARCH_INDICATOR',
		isChangeSearch
	};
}

export function setSearchParameters(changeCartData) {
	return {
		type: 'SET_SEARCH_PARAMETERS',
		changeCartData
	};
}

export function setDeviceFingerPrint(deviceFingerPrint) {
	return {
		type: 'SET_DEVICE_FINGERPRINT',
		deviceFingerPrint
	};
}


export function setCountryDropdownList(countryList) {
	return {
		type: 'SET_COUNTRY_DROPDOWN_LIST',
		countryList
	};
}

export function setActiveTab(activeTab) {
	return {
		type: 'SET_ACITVE_TAB',
		activeTab
	};
}

export function setActiveMessageCode(messageCode) {
	return {
		type : "SET_ACTIVE_MESSAGE_CODE",
		messageCode
	}
}

export function setPaymentPayload(paymentPayload){
	return {
		type : "SET_PAYMENT_PAYLOAD",
		paymentPayload
	}
}

export function setUTMConfig(utmConfig = {}) {
	return {
		type : "SET_UTM_CONFIG",
		utm_source : utmConfig.utm_source || "",
        utm_medium : utmConfig.utm_medium || "",
        utm_campaign : utmConfig.utm_campaign || "",
        utm_term : utmConfig.utm_term || "",
        utm_content : utmConfig.utm_content || "",
	}
}

export function setCartDelete(isCartDeleted){
	return {
		type : "SET_CART_DELETE",
		isCartDeleted
	}
}

export function showModalWithId(showModalId){
	return {
		type : "SHOW_MODAL_ID",
		showModalId
	}
}

export function setShowRecentSearches(shouldShowRecentSearch){
	return {
		type : "SET_SHOW_RECENTSEARCH",
		shouldShowRecentSearch
	}
}

export function setShowSessionTimeout(shouldShowSessionTimeout){
	return {
		type : "SET_SHOW_SESSIONTIMEOUT",
		shouldShowSessionTimeout
	}
}

export function setIsSessionTimeoutSearch(isSessionTimeoutSearch){
	return {
		type : "SET_SESSIONTIMEOUT_SEARCH",
		isSessionTimeoutSearch
	}
}

export function setMenuClicked(settingsMenuClicked){
	return {
		type : "SET_MENU_CLICKED",
		settingsMenuClicked
	}
}

export function setCurrentPage(currentPage){
	return {
		type : "SET_CURRENT_PAGE",
		currentPage
	}
}

export function setPackageBookingSummaryData(packageBookingSummaryData){
	return {
		type : "SET_PACKAGE_BOOKING_SUMMARY_DATA",
		packageBookingSummaryData
	}
}

export function setPackageBookingSummaryStep(packageBookingSummaryStep){
	return {
		type : "SET_PACKAGE_BOOKING_SUMMARY_STEP",
		packageBookingSummaryStep
	}
}

export function setRecentFlightPrice(recentFlightPrice){
	return {
		type : "SET_RECENT_FLIGHT_PRICE",
		recentFlightPrice
	}
}

export function setRecentTourPrice(recentTourPrice){
	return {
		type : "SET_RECENT_TOUR_PRICE",
		recentTourPrice
	}
}

export function setFlightFilters(flightFilters){
	return {
		type : "SET_FLIGHT_FILTERS",
		flightFilters
	}
}

export function setTourFilters(tourFilters){
	return {
		type : "SET_TOUR_FILTERS",
		tourFilters
	}
}

export function setRecentSearchTab(recentSearchTab){
	return {
		type : "SET_RECENT_SEARCH_TAB",
		recentSearchTab
	}
}

export function setRecentTabName(recentTabName){
	return {
		type : "SET_SEARCH_TAB_NAME",
		recentTabName
	}
}

export function setCurrentSortedTab(recentSortedTab){
	return {
		type : "SET_RECENT_SORTED_TAB",
		recentSortedTab
	}
}

export function setCookies(cookies) {
	return {
		type : "SET_COOKIES",
		cookies
	}
}

export function setPasswordChangeSuccess(isPasswordChange) {
	return {
		type : "SET_PASSWORD_CHANGE_SUCCESS",
		isPasswordChange
	}
}

export function setIsUmrah(isUmrah) {
	return {
		type : "SET_UMRAH",
		isUmrah
	}
}

export function setIsSatelliteMapView(isSatelliteMapView) {
	return {
		type : "SET_SATELLITE_MAP_VIEW",
		isSatelliteMapView
	}
}

export function setSearchFormAttributes(searchFormAttributes) {
	return {
		type : "SET_SEARCH_FORM_ATTRIBUTES",
		searchFormAttributes
	}
}
export function setSearchFormidentifier(searchFormIdentifier) {
	return {
		type : "SET_SEARCH_FORM_IDENTIFIER",
		searchFormIdentifier
	}
}


export function setScrollToTop(isScrollTop) {
	return {
		type : "SET_SCROLL_TOP",
		isScrollTop
	}
}

export function setCampaignName(campaignName) {
	return {
		type : "SET_CAMPAIGN_NAME",
		campaignName
	}
}

export function setTickerMessages(tickerMessages) {
	return {
		type : "SET_TICKER_MESSAGES",
		tickerMessages
	}
}