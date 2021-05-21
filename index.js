function convertFahrToCelsius(F) {
    if (typeof(F) === 'boolean') {
        let output = `${F} is not a valid number but a/an ${typeof(F)}.`;
        console.log(output);
        return output;
    } else if (Array.isArray(F) === true) {
        let output = `${F} is not a valid number but a/an array.`;
        console.log(output);
        return output;
    } else if (typeof(F) === 'object') {
        let output = `${F} is not a valid number but a/an ${typeof(F)}.`;
        console.log(output);
        return output;
    } else if (typeof(F) === 'string') {
        if(isNaN(F) === true){
            let output = `${F} is not a valid number but a/an ${typeof(F)}.`;
            console.log(output);
            return output;
        } else {
            let C = (F - 32) * 5/9;
            let answer = C.toFixed(4);
            console.log(answer)
            return Number(answer);
        }
    } else {
        let C = (F - 32) * 5/9;
        let answer = C.toFixed(4);
        console.log(answer);
        return Number(answer);
    }
}

function checkYuGiOh(n) {
    let tom = [];
     if(isNaN(n)) {
        let output= `invalid parameter: "${n}"`;
        console.log(output);
        return output;
    } else { 
            for(let num=1; num<=n; num++)
            if(num%2 == 0 && num%3 == 0 && num%5== 0) {
                tom.push("yu-gi-oh");
            
            } else if(num%2 == 0) {
                tom.push("yu");
            } else if(num%3 == 0) {
                tom.push("gi");
            } else if(num%5 == 0) {
                tom.push("oh");
            } else if(num%2 == 0 && num%3 == 0) {
                tom.push("yu-gi");
            } else if(num%2 == 0 && num%5 == 0) {
                tom.push("yu-oh");
            } else if(num%3 == 0 && num%5 == 0) {
                tom.push("gi-oh");
            } 
            else {
                tom.push(num);
            }
    
        // tom.push(num);
        console.log(tom);
    }    
}