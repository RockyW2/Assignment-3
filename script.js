const sideA = document.getElementById("side-a");
const sideB = document.getElementById("side-b");
const sideC = document.getElementById("side-c");

let area = 0;

function HeronsFormula (a, b, c){
    let a2 = a * a;
    let b2 = b * b;
    let c2 = c * c;
    return {
        Math.sqrt((4*a2*b2) - ((a2 + b2 - c2)*(a2 + b2 - c2)))/4
    }
}

function AmbiguousCase (angleA, sideA, sideB){
    let h = sideB * Math.sin(angleA);

    if(angleA < 90){
        if(sideA < h){

        }else if (sideA == h){
    
        }else if (sideA > sideB){
    
        }else if (h < sideA) && (a < b){
    
        }else{
    
        }
    } else if (angleA > 90){
        if (a < b) || (a == h){

        }else if (a > b){

        }else{

        }

    }
    

}

function NewtonsMethod (guess){

}

function PolynomialFunction (coefficients, exponents, xValue){

}