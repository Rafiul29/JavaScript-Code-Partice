


const form = document.getElementById("form")

// mobile Number validation

function renderMobileNumber(mobileNumber){
  if(isNaN(mobileNumber)){
    alert("mobile nunber must be nunber")
  }else if(mobileNumber=="" || mobileNumber==null){
    alert("mobile number emty")
  }else if(mobileNumber.length>15){
    alert("mobile  must be digit")
    return false
  }
  else if((mobileNumber.charAt(0) != '+') && (mobileNumber.charAt(1) != '8')){
  alert("+08")
  }
}

function renderGender(m,f){
        if(m.checked==false && f.checked==false){
          alert("You must select male or female");
          return false;
        }
}



form.addEventListener("submit",function(e){
  e.preventDefault()

  let firstName=document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let email = document.querySelector(".email").value;
  let password=document.getElementById("password").value;
  
  let address=document.getElementById("addres").value;



  let mobile_number=document.getElementById("mobile_number").value;

  let genderM=document.getElementById("male")
  let genderF=document.getElementById("female")

//Email
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");  

//first name validate

    if(firstName==null || firstName==""){
      alert("first name blank");
    }
    else if(firstName.length<6){
      alert("first name  must be at least 6 characters long.");  
    }
    // last Name validate
    if(lastName==null || lastName==""){
      alert("last name blank");
    }
      // email validate
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      alert("invalid address");  
    }  

//password
    if(password.length<6){
      alert("password minimum 6 characters");  

    }

    //Address
    if(address==null || address=="" || address.length<10){
      alert("text must be 10 charater")
    }
   
    //mobile validation
    renderMobileNumber(mobile_number)
    //gender validation
    renderGender(genderM,genderF)

})

