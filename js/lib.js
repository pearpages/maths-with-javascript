var MyMathLib = (function (){
    return {
      getRandom:getRandom,
      factorial: factorial  
    };
    
    function getRandom(maxnumber) {
        checkIsPositiveNumber(maxnumber);
        
        var x = 0;
        x = Math.floor((Math.random() * maxnumber) + 1);
        return x;    
    }
    
    function factorial(number) {
        number = parseInt(number);
        checkIsPositiveNumber(number);
        
        var f = 1;
        
        if (number === 0 ) {
            return 1;
        }
       
        while(number > 1) {
            f = f * number;
            number = number - 1;
        }
        return f;
    }
    
    function checkIsPositiveNumber(number) {
        if(typeof number !== 'number' || number < 0) {
            throw new Error('Positive number expected');
        }
    }
    
})();