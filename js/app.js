const checkAkan = (e) =>{
  e.preventDefault();
const mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

const frm=document.querySelector("frmAkans");
const fd = new FormData(frmAkan);
const gender=fd.get("gender");
const birthday=fd.get("dateOfBorn");
    
const d =new Date(centuryInput, yearInput, (monthInput-1), dateInput).getDay();

if(dateOfBorn==="") {
  alert("Invalid Input");
}

if (gender === "male"){
  document.querySelector ("#Return").innerHTML=("Your Akan name is "+mNames[d]);
} else{
  document.querySelector ("#Return").innerHTML=("Your Akan name is "+fNames[d]);
}
}
document.querySelector("#frmAkan").addEventListener("submit", checkAkan);