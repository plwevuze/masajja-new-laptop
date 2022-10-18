// const form = document.querySelector('form')
const firstName = document.querySelector('#patientname');
const userName = document.querySelector('#othername');
const niin = document.querySelector('#nin');
const a_ge = document.querySelector('#age')
const w_eight = document.querySelector('#weight');
const a_ddress = document.querySelector('#address');
const reGion = document.querySelector('#region');
const c_ity = document.querySelector('#City');
const email = document.querySelector('#email');
const occuPassion = document.querySelector('#occupation');
const telephone = document.querySelector('#phone-number');
const telephone1 = document.querySelector('#phone-number1');

const relation = document.querySelector('#relationship');

const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submit = document.querySelector('#submit')


// min and max char values
const min = 3
const max = 25
// prevent form refresh
// function handleForm(event) { event.preventDefault();}
// form.addEventListener('submit', handleForm)



// check patients name name
const checkPatientName = () => {
    let f_name = firstName.value
    // regex for small and full caps letters
  let alphabetr = /^[A-Za-z]+$/;

    // check if empty and if matchecs regex
    if (f_name.match(alphabetr) && f_name != "") {
        firstName.style.border = '2px solid green';
        othername.focus()
        return true
    } else {
            firstName.style.border = '2px solid red';
        alert('Please enter patient Name using letters of the alphabet only')
    }
}
// checking other name
const checkOtherName = () => {
    let u_name = userName.value.trim()
    // regex for alphanumeric values
    let alphabet = /^[A-Za-z]+$/;

    // check if empty and if matchecs regex
    if (u_name.match(alphabet) && u_name != "") {
        userName.style.border = '2px solid green';
        firstName.focus()
         return true
    } else {
          userName.style.border = '2px solid red';
        alert('Please enter your other name using letters  only')
      
    }

    // check if too short or too long
    if (u_name.length <= min || u_name.length >= max ) {
        alert('Your user name is too short or too long')
        userName.style.border = '2px solid red'
    }
}
//check nin
const checkNin = () => {
	let nini = niin.value.trim();
	// regex for alphanumeric values
	let alphanum = /^[0-9a-zA-Z]+$/;

	// check if empty and if matchecs regex
    if (nini.match(alphanum) && nini != '') {
        niin.style.border = '2px solid green';
        age.focus();
        return true;
    } else {
        alert('Please enter your NIN using letters and numbers only');
        niin.style.border = '2px solid red';
    }

	// check if too short or too long
	if (nini.length <= min || nini.length >= max) {
		alert('You have entered a NIN too short or too long..Invalid!!!');
		userName.style.border = '2px solid red';
	}
};
//checking age
const checkAge = () => {
    let years = a_ge.value
    // regex for numbers
    let numbers = /^[0-9]+$/

    // check if empty and if matches regex
    if (years.match(numbers) && years != "") {
        a_ge.style.border = '2px solid green';
        weight.focus()
        return true
    } else {
        alert('Please enter your age number using numbers only')
        a_ge.style.border = '2px solid red'
    }
}
//checking age
const checkWeight = () => {
    let wait = w_eight.value;
    // regex for numbers
    let numbers = /^[0-9]+$/

    // check if empty and if matches regex
    if (wait.match(numbers) && wait != "") {
        w_eight.style.border = '2px solid green';
        Address.focus()
        return true
    } else {
        alert('Please enter your age number using numbers only')
        w_eight.style.border = '2px solid red';
    }
}
//check address
// checking other name
const checkAddress = () => {
    let u_name = a_ddress.value.trim();
    // regex for alphanumeric values
    let alphabet = /^[A-Za-z]+$/;

    // check if empty and if matchecs regex
    if (u_name.match(alphabet) && u_name != "") {
        a_ddress.style.border = '2px solid green';
        region.focus()
         return true
    } else {
          a_ddress.style.border = '2px solid green';
        alert('Please enter address using letters  only')
      
    }

    
}
//region check
const checkReGion = () => {
	let region1 = reGion.value;
	// regex for small and full caps letters
	let alphabet = /^[A-Za-z]+$/;

	// check if empty and if matchecs regex
    if (region1.match(alphabet) && region1 != '') {
        reGion.style.border = '2px solid green';
		District/City.focus();
		return true;
	} else {
		alert('Please enter your region using letters of the alphabet only');
		reGion.style.border = '2px solid red';
	}
};
//checking distirct
const checkDistrict = () => {
	let distirct = c_ity.value;
	// regex for small and full caps letters
	let alphabet = /^[A-Za-z]+$/;

	// check if empty and if matchecs regex
	if (distirct.match(alphabet) && distirct != '') {
		c_ity.style.border = '2px solid green';
		District / City.focus();
		return true;
	} else {
		alert('Please enter your home district using letters of the alphabet only');
		c_ity.style.border = '2px solid red';
	}
};
// check phone number
const checkTelephone = () => {
    let p_number = telephone.value
    // regex for numbers
    let numbers = /^[0-9]+$/

    // check if empty and if matches regex
    if (p_number.match(numbers) && p_number != "") {
        telephone.style.border = '2px solid green';
        email.focus()
        return true
    } else {
        alert('Please enter your phone number using numbers only')
        telephone.style.border = '2px solid red'
    }
}

// check phone number1
const checkTelephone1 = () => {
    let p_number1 = telephone1.value
    // regex for numbers
    let numbers = /^[0-9]+$/

    // check if empty and if matches regex
    if (p_number1.match(numbers) && p_number1 != "") {
        telephone.style.border = '2px solid green';
        email.focus()
        return true
    } else {
        alert('Please enter your phone number using numbers only')
        telephone1.style.border = '2px solid red'
    }
}
// check email
const checkEmail = () => {
    let e_mail = email.value
    // regex for email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // check if emtpy and if matches regex
    if(e_mail.match(emailRegex) && e_mail != "") {
        password.focus()
        return true
    } else {
        alert('Please enter your email and follow the proper email format')
        email.style.border = '2px solid red'
    }
}
// check occupation
const checkOccupation = () => {
    let occu_passion = occuPassion.value.trim()
    // regex for alphanumeric values
    let alphabet = /^[A-Za-z]+$/;

    // check if empty and if matchecs regex
    if (occu_passion.match(alphabet) && occu_passion != '') {
		occuPassion.style.border = '2px solid green';
		occuPassion.focus();
		return true;
	} else {
		occuPassion.style.border = '2px solid green';
		alert('Please enter occupation name using letters  only');
	}

    // check if too short or too long
    if (occu_passion.length <= min || occu_passion.length >= max) {
		alert('occcupation is too short or too long');
		occuPassion.style.border = '2px solid red';
	}
}
//relationship check
const checkRelationship = () => {
	let u_name = relation.value.trim();
	// regex for alphanumeric values
	let alphabet = /^[A-Za-z]+$/;

	// check if empty and if matchecs regex
	if (u_name.match(alphabet) && u_name != '') {
		relation.style.border = '2px solid green';
		relation.focus();
		return true;
	} else {
		relation.style.border = '2px solid red';
		alert('Please enter your other name using letters  only');
	}

	// check if too short or too long
	if (u_name.length <= min || u_name.length >= max) {
		alert('Your user name is too short or too long');
		relation.style.border = '2px solid red';
	}
};
// checking password
const checkPassword = () => {
    let p_word = password.value
    // let c_password = confirmPassword.value
    
    // check if input is empty
    if (p_word == "") {
        alert('Please input your password')
        password.style.border = '2px solid red'
    } else {
         password.style.border = '2px solid green';
    }
}
// confirming password
const checkConfirmPassword = () => {
    let c_password = confirmPassword.value
    let p_word = password.value

    // check if input is empty
    if (c_password == "") {
        alert('Please input your password')
        confirmPassword.style.border = '2px solid red'
    }
    else {
           confirmPassword.style.border = '2px solid green';
        
    }
    // check if emails dont match
    if (c_password != p_word) {
		alert('Your passwords does not match, try again please');
		password.style.border = '2px solid red';
		confirmPassword.style.border = '2px solid red';
    }
    else {
        password.style.border = '2px solid red'
		         confirmPassword.style.border = '2px solid green';
		
	}
}
const agriculturalOffcer = () => {
    checkPatientName(),checkOtherName(),checkNin(),
              checkAge(),checkWeight(),checkAddress(), checkDistrict (), checkEmail(),
              checkTelephone(), checkTelephone1(),  checkPassword(),
              checkConfirmPassword(), checkOccupation(), checkRelationship()
}