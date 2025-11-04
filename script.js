window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.getElementById('addition').addEventListener("click", addOneContact);
  document.getElementById('createCSV').addEventListener("click", createFile);
});

var contactsIndex = 0;
var allContacts = [];


function Contact(first, last, mail){
	this.fname=first;
	this.lname=last;
	this.email=mail;
}

function addOneContact(){
	let fnameField = document.getElementById("fname");
	let lnameField = document.getElementById("lname");
	let emailField = document.getElementById("email");
	const fname = fnameField.value;
	const lname = lnameField.value;
	const email = emailField.value;
	console.log(fname + "," + lname + "," + email);
	const newContact = fname + "," + lname + "," + email;
	//new Contact(fname,lname,email);	
	const contactsArea = document.getElementById("addedcontacts");
	const createdContact = document.createElement("div");
	createdContact.setAttribute("class","contact");
	createdContact.setAttribute("id",contactsIndex);
	contactsIndex++;
	createdContact.innerHTML = fname + "," + lname + "," + email;
	createdContact.addEventListener("click",removeContact);
	contactsArea.appendChild(createdContact);
	contactsArea.appendChild(document.createElement("br"));
	allContacts.push(newContact);
	fnameField.value="";
	lnameField.value="";
	emailField.value="";
};

function removeContact(){
	if (confirm("delete this contact?")==true){
		allContacts.splice(this.getAttribute("id"), 1);
		this.remove();
	}

}

function createFile(){
	console.log(allContacts);
	//define the heading for each row of the data  
    //var csv = 'First Name\\n';  
    const csv = allContacts.join("\r\n");
    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  
    hiddenElement.download = 'ContactsImport.csv';  
    hiddenElement.click();  


}