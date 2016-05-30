$(document).ready(function(){
	var employeesURL="employees.json";
	var roomsURL="rooms.json"
	$.getJSON(employeesURL, function(response){
		var employeeStatusHTML = '<ul class="bulleted">';
		$.each(response, function(index, employee) {
			 if (employee.inoffice === true){
			 	employeeStatusHTML += '<li class="in">';
			} else {
				employeeStatusHTML += '<li class="out">';
			}
			employeeStatusHTML += employee.name + '</li>';
		}); //end employees each
		employeeStatusHTML += '</ul>';
		$('#employeeList').html(employeeStatusHTML);
	}); //end employees getJSON
	$.getJSON(roomsURL, function(response) {
			var roomStatusHTML = '<ul class="rooms">';
			$.each(response, function(index, room) {
				 if (room.available === true){
				 	roomStatusHTML += '<li class="empty">';
				 } else {
				 	roomStatusHTML += '<li class="full">';
				 }
				 roomStatusHTML += room.room + '</li>';
			}); //end rooms each
			roomStatusHTML += '</ul>'
			$('#roomList').html(roomStatusHTML);
	}); //end rooms jetJSON
}); //end ready








// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if(xhr.readyState === 4) {
// 		var employees = JSON.parse(xhr.responseText);
// 		var employeeStatusHTML = '<ul class="bulleted">';
// 		for (var i=0; i<employees.length; i++){
// 			if (employees[i].inoffice === true){
// 			employeeStatusHTML += '<li class="in">';
// 			} else {
// 				employeeStatusHTML += '<li class="out">';
// 			}
// 			employeeStatusHTML += employees[i].name;
// 			employeeStatusHTML += '</li>';
// 		}
// 		employeeStatusHTML += '</ul>';
// 		document.getElementById('employeeList').innerHTML = employeeStatusHTML;
// 	}
// };
// xhr.open('GET', 'employees.json');
// xhr.send();

// var xhr2 = new XMLHttpRequest();
// xhr2.onreadystatechange = function () {
// 	if(xhr2.readyState === 4) {
// 		var rooms = JSON.parse(xhr2.responseText);
// 		var roomStatusHTML = '<ul class="rooms">';
// 		for (var i=0; i<rooms.length; i++){
// 			if (rooms[i].available === true){
// 				roomStatusHTML += '<li class="empty">';
// 			} else {
// 				roomStatusHTML += '<li class="full">';
// 			}
// 			roomStatusHTML += rooms[i].room;
// 			roomStatusHTML += '</li>';
// 		}
// 		roomStatusHTML += '</ul>';
// 		document.getElementById('roomList').innerHTML = roomStatusHTML;
// 	}
// };
// xhr2.open('GET', 'rooms.json');
// xhr2.send();


