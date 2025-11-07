window.addEventListener("load", (event) => {
  document.getElementById('addition').addEventListener("click", addOneContact);
  document.getElementById('createCSV').addEventListener("click", createFile);
});


function removeContact(){
	if (confirm("delete this contact?")==true){
		allContacts.splice(allContacts.indexOf(this.parentElement.innerHTML), 1);
		this.parentElement.remove();
		console.log(allContacts);
	}

}

var allContacts = [];

function addOneContact(){
	const xButton = document.createElement("span");
	xButton.setAttribute("class","xButton");
	xButton.innerHTML=" X ";
	let fnameField = document.getElementById("fname");
	let lnameField = document.getElementById("lname");
	let emailField = document.getElementById("email");
	const fname = fnameField.value;
	const lname = lnameField.value;
	const email = emailField.value;
	console.log(fname + "," + lname + "," + email);
	const newContact = fname + "," + lname + "," + email;
	const contactsArea = document.getElementById("addedcontacts");
	const createdContact = document.createElement("div");
	createdContact.setAttribute("class","contact");
	createdContact.innerHTML = fname + "," + lname + "," + email;
	createdContact.addEventListener("mouseover",function(){
		this.setAttribute("style","background: #cccccc");
		this.insertBefore(xButton, this.firstChild);
		xButton.addEventListener("click",removeContact);
	});
	createdContact.addEventListener("mouseout",function(){
		this.setAttribute("style","background: white");
		this.removeChild(this.firstChild);
	});
	//createdContact.addEventListener("click",removeContact);
	contactsArea.appendChild(createdContact);
	contactsArea.appendChild(document.createElement("br"));
	allContacts.push(newContact);
	fnameField.value="";
	lnameField.value="";
	emailField.value="";
};
function createFile(){
	console.log(allContacts);

    const csv = allContacts.join("\r\n");
    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  
    hiddenElement.download = 'ContactsImport.csv';  
    hiddenElement.click();  


}
