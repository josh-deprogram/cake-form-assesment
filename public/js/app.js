require("../css/style.css");

(() => {

    console.log('Hello cake world');

    // Basic form field validaiton on the Celebration Other Input type
    const validateInput = (e)=> {
        // Grab the input values
        const celebration = document.querySelector('input[name="celebration"]:checked').value;
        const otherInput = document.getElementById('other_input').value;
        console.log('check the form:', celebration, otherInput);
        
        if(celebration === 'celebration_other' && otherInput === '') {
            alert('Please enter the Other Celebration !!');
            e.preventDefault();
            return false;
        }
    }
    
    const cakeform = document.getElementById('cakeform');
    cakeform.addEventListener("submit", validateInput);

})();
