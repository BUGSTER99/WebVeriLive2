function login(){
	var email =  document.getElementById('email').value;
	var password =  document.getElementById('password').value;
	console.log(email,password);
	var db = firebase.firestore();
	db.collection("Users").where('email','==',email).where('password','==',password).get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
				alert(`${doc.data()['idNumber']}`);
				alert(`${doc.data()['personalName']}`);
		});
	});
}