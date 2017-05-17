require("../css/style.css");
const validateInput = require('./validateInput');

(() => {

    console.log('%cHello UsTwo Cakez', 'background: #371b42; color: #ffffff; font-weight:300; padding:4px; font-size:15px');
    console.log('%cinfo@deprogram.io', 'background: #7a4bff; color: #ffffff; font-weight:300; padding:4px; font-size:10px');


    // Basic form field validaiton on the Celebration Other Input type
    const validateForm = (e)=> {
        // Grab the input values
        const celebration = document.querySelector('input[name="celebration"]:checked').value;
        const otherInput = document.getElementById('other_input');
        const inputEmpty = validateInput(otherInput);
        console.log('check the form:', celebration, inputEmpty);
        
        if(celebration === 'celebration_other' && inputEmpty ) {
            alert('Please enter the Other Celebration !!');
            e.preventDefault();
            return false;
        }
    };
    
    const cakeform = document.getElementById('cakeform');
    cakeform.addEventListener("submit", validateForm);

})();