var db = firebase.firestore();
data();


function login(){
	var email =  document.getElementById('email').value;
	var password =  document.getElementById('password').value;
	console.log(email,password);
    var login = 0;
	db.collection("Users").where('email','==',email).where('password','==',password).get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
            login = doc.data();
		})
        if(login != 0 ){
		    window.location.assign("task.php");
        } else {
            alert("Login Gagal");
        }
	});
}


function data(){
db.collection('/Users/QIMliaygAtVpYjxmaAQb4SriMz52/Loan Information')
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
            				<td>${data.loan_id}</td>
                            <td>${data.name}</td>
                            <td>${data.date}</td>
                            <td>${data.amount}</td>
                            <td>${data.status}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    });
}