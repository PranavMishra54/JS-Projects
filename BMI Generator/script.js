const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight=document.querySelector('#weight').value;
    const height=document.querySelector('#height').value;
    const results=document.querySelector('#results');
    
    if( weight<=0 || isNaN(weight))
    {
        results.innerHTML="Result: Enter valid weight";
    }    
    else if(height<=0 || isNaN(height) )
    {
        results.innerHTML="Result: Enter valid height.";
    }
    else
    {
        const heightInMeters = height / 100;
        const bmi=(weight/(heightInMeters*heightInMeters)).toFixed(2);
        results.innerHTML=`<span> Result: BMI is- ${bmi} </span>`; 
    }


});