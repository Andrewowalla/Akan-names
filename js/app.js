const giveAkanname = function (e) {
    e.preventDefault();
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    const dayOfBirth = document.getElementById("dateOfBirth").value;
    if (!dayOfBirth) {
      return alert("Please Select Birthday");
    }
    const day = new Date(dayOfBirth).getDay();
    const femaleGender = document.getElementById("gender").checked;
    const maleGender = document.getElementById("gender").checked;
    if (femaleGender) {
        document.querySelector('#reveal-result').innerHTML = "Your Akan name is " + femaleNames[day];
    } else if (maleGender) {
        document.querySelector('#reveal-result').innerHTML = "Your Akan name is " + maleNames[day];
    } else {
      return alert("Please select Gender");
    }
    document.getElementById("frmAkans").reset();
  };
  
  document.querySelector("#frmAkans").addEventListener("submit", giveAkanname);