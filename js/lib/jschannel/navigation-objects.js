/**
 * Custom navigation objects fot he frame navigation API
 */

/**
 Constructor function for generation of a navigateTo object
 */
function NavigateTo(type, contentPage, contextData) {
    this.type = type;
    this.contentPage = contentPage;
    this.contextData = contextData;
}

/**
 Constructor function for generation of a contextUpdate object
 */
function ContextUpdate(app, contextData) {
    this.app = app;
    this.contextData = contextData;

}

/**
 Constructor function for generation of a notesMsg object
 * USERTOOLS-380 Allow addition of OrderRevisionId for Create Note functionality
 */
function ActivateNotes(action, category, subCategory, categoryItemReference, orderRevisionId) {
    this.action = action;
    this.contextData = {};

    this.contextData.category = category;
    this.contextData.subCategory = subCategory;
    this.contextData.categoryItemReference = categoryItemReference;
    this.contextData.orderRevisionId = orderRevisionId;
}

/**
Constructor function for generation of Data Requestor
**/
function RequestData(type, filter) {

    this.type = type;

    this.filter = filter;

}


/**
Constructor function for generation of validation tool
**/
function InvokeValidation(appName, level, reason, invokedFunc, dialogEndedFunc) {

    this.appName = appName;

    this.level = level;

    this.reason = reason;

    this.invoked = invokedFunc;

    this.dialogEnded = dialogEndedFunc;

}



var consumer = consumer || {};

consumer.advisor = {};

consumer.advisor.ApplicationTypeEnum = {
    DASHBOARD: "Dashboard",
    ORDER: "Order",
    FAULT: "Fault",
    BILLING: "Billing",
    COMMSCENTRE: "CommsCentre"
};

consumer.advisor.ContentPageEnum = {
    DASHBOARD: "Dashboard",
    ORDER_SUMMARY: "OrdersSummary",
    MANAGE_ORDER: "ManageOrders",
    FAULT_SUMMARY: "FaultSummary",
    MANAGE_FAULT: "ManageFaults",
    BILL_SUMMARY: "billSummary",
    MAKE_PAYMENT: "makePayment",
    BILL_PREFERENCES: "billPreferences",
    COMMSCENTRE_LISTCOMMS: "ListComms"
};



consumer.advisor.RequestDataEnum = {

    DATA_BILLING_ACCOUNTS: "dataBillingAccounts",
    DATA_VALIDATION_LEVEL: "dataValidationLevel"

};

//Framework : Angular - External Control of Validation Dialog

consumer.advisor.ValidationLevelEnum = {

    VALIDATION_LEVEL_LOW: "low",
    VALIDATION_LEVEL_MEDIUM: "medium",
    VALIDATION_LEVEL_HIGH: "high"

};

var NAVIGATE_TO_MSG = "navigateToMsg";
var CTX_UPDATE_MSG = "ctxUpdateMsg";
