

const msgColorCheck = (args) => {
    const cssColor1 = 'resultColorTrue';
    const cssColor2 = 'resultColorFalse';
    const inputColor = 'input';
    const inputColorFalse = 'inputFalse';
    const colorOption = document.getElementById('msgIsPalindrome');
    const colorInput = document.getElementById('input1');

    if (args == true) {
        colorOption.classList.remove(cssColor2);
        colorOption.classList.add(cssColor1);
    } else if (args == false) {
        colorOption.classList.remove(cssColor1);
        colorOption.classList.add(cssColor2);
    } else if (args == 'borderBlue') {
        colorInput.classList.remove(inputColorFalse);
        colorInput.classList.add(inputColor);
    } else if (args == 'borderRed') {
        colorInput.classList.remove(inputColor);
        colorInput.classList.add(inputColorFalse);
    }
}





let checkString = new RegExp(/^[a-zA-Z]+$/);

const valueFromInput = () => {
    return document.querySelector('#input1').value;
} 

const palindrome = (input) => {
   
    const string = input.toLowerCase().replace(/\s+/g, '');
    const cloneString = string .split('').reverse().join('');
    

    if (cloneString == string) {
        msgColorCheck(true)
    } else {
        msgColorCheck(false)
    }

    if (string.length > 19 ) {
        alert("The longest known single-word palindrome in everyday use is the 19-letter Finnish word")
        return `your input "${string} ${string.length} `;
    } else if (string.length == 0) {
        msgColorCheck(false)
        return `Please Enter your input`;
    }
    
    if (checkString.test(valueFromInput())) {
        return string == cloneString ? 
                    `This "${string}" : "${cloneString}"  is a <i>palindrome.<i>`: 
                    `This "${string}" !: "${cloneString}" isn't a <i>palindrome.<i>`;
    } else {
        alert(`Please Provide Character "a-z | A-Z"`);
        return `Please Provide Character "a-z | A-Z`;
    }
    
    

}

const getCompare = () => {
    document.querySelector('#msgIsPalindrome').innerHTML = palindrome(valueFromInput());
}   

const getAutoString = () => {
    msgColorCheck(true);
    let text = valueFromInput()
    document.querySelector('#msgIsPalindrome').innerHTML = `Typing....input : ${text}`;

    if (checkString.test(valueFromInput())) {
        msgColorCheck('borderBlue')
    } else {
        msgColorCheck('borderRed')
    }

    
   
}







