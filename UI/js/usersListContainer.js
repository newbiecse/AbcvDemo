$(document).ready(function(){
	// doms
	$userList = $("#userList");
	$userForm = $("#userForm");	
	
	// get list user
	renderListUsers($userList);
	
	// handle 4 add
	$("#btn-add").on("click", function(){
		clearValue4Form($userForm);
	});
	
	// handle 4 edit
	$userList.find(".btn-edit").on("click", function(){
		var userId = $(this).attr("data-userId");
		renderValue4UserForm(userId, $userForm);
	});
	
	
	// handle 4 hide modal
	$("#userFormModal").on('hidden.bs.modal', function () {
		clearValidate($userForm);
    });
	
	
	
});


/**
*	description: get list user
*/
function getUsers() {
	var listUsers = new Array();
	var user1 = {username: "user1", email: "user1@abcv.com", fullname: "A1"};
	var user2 = {username: "user2", email: "user2@abcv.com", fullname: "A2"};
	
	listUsers.push(user1);
	listUsers.push(user2);
	return listUsers;
}


/**
*	description: render list user
*/
function renderListUsers($domTable) {
	// doms
	var $rowTemplate = $domTable.find("#tr-template");
	var $tbody = $domTable.find("tbody");
	
	// render users
	var listUsers = getUsers();
	if(typeof listUsers != "undefined" && listUsers != null) {
		listUsers.forEach(function(user){
			var $rowClone = $rowTemplate.clone();
			
			// process display
			$rowClone.removeAttr('id');
			$rowClone.show();
			
			// render data
			$rowClone.find(".td-userId").text(user.userId);
			$rowClone.find(".td-username").text(user.username);
			$rowClone.find(".td-email").text(user.email);
			$rowClone.find(".td-fullname").text(user.fullname);
			$rowClone.find(".btn-edit").attr("userId", user.userId);
			
			$tbody.append($rowClone);
		});
	}
}

/**
*	description: get detail user by id's user
*/
function getUser(userId) {
	return {
		username: "user1",
		email: "user1@abcv.com",
		fullname: "A1",
	}
}


/**
*	description: render value for edit user
*/
function renderValue4UserForm(userId, $userForm) {
	// get user
	var user = getUser(userId);
	
	// set values
	$userForm.find("#txtUsername").val(user.username);
	$userForm.find("#txtEmail").val(user.email);
	$userForm.find("#txtFullname").val(user.fullname);
}


/**
*	description: clear validate
*/
function clearValidate($form) {
	
	//$form.find('.form-group').each(function(){
	$('.form-group').each(function(){
		// clear error shadow
		$(this).removeClass('has-error');
		
		// clear error message
		$(this).find('.help-block').html('')
	});
}


/**
*	description: clear value form
*/
function clearValue4Form($form) {
	$form.find("input:not([type=image],[type=button],[type=submit]), textarea").val("");
}