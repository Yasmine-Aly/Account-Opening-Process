//Coach Validation Errors

tw.system.coachValidation.validationErrors = [];


// Requisition Details Validation
if (tw.local.requisitionDetails.requisitionNumber == null || tw.local.requisitionDetails.requisitionNumber == undefined ||
	tw.local.requisitionDetails.requisitionNumber == "") {
	
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.requisitionNumber", "this field is mandatory")
}

if (tw.local.requisitionDetails.requester == null || tw.local.requisitionDetails.requester == undefined ||
	tw.local.requisitionDetails.requester =="" ) {
	
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.requester", "this field is mandatory")
}

if (tw.local.requisitionDetails.dateOfRequest == null) {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.dateOfRequest", "this field is mandatory")
}

if (tw.local.requisitionDetails.datePositionAvailable == null) {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.datePositionAvailable","this field is mandatory")
	
}

//****************************************************************************************

//Position Details validation

if (tw.local.requisitionDetails.position.jobDescription == null || tw.local.requisitionDetails.position.jobDescription == undefined ||
	tw.local.requisitionDetails.position.jobDescription == "") {
	
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.position.jobDescription","this field is mandatory")
}

if (tw.local.requisitionDetails.position.jobLevel == "") {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.position.jobLevel", "this field is mandatory")
}

if (tw.local.requisitionDetails.position.jobTitle == null || tw.local.requisitionDetails.position.jobTitle == undefined || 
	tw.local.requisitionDetails.position.jobTitle == "") {
	
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.position.jobTitle", "this field is mandatory")
}

if (tw.local.requisitionDetails.position.numDirectReports == "") {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.position.numDirectReports", "this field is mandatory")
}


//compensationDetails validation

if (tw.local.requisitionDetails.compensationDetails.bounsAmount == "") {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.compensationDetails.bounsAmount", "this field is mandatory")
}

if (tw.local.requisitionDetails.compensationDetails.salaryToOffer == "") {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.compensationDetails.salaryToOffer", "this field is mandatory")
}


//departmentDetails validation

if (tw.local.requisitionDetails.departmentDetails.division == null || tw.local.requisitionDetails.departmentDetails.division == undefined ||
	tw.local.requisitionDetails.departmentDetails.division == "" ) {
	
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.departmentDetails.division", "this field is mandatory")
}

if (tw.local.requisitionDetails.departmentDetails.department == "") {
	tw.system.coachValidation.addValidationError("tw.local.requisitionDetails.departmentDetails.department", "this field is mandatory")
}
