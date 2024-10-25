
function HeronsFormula (a, b, c){
    let a2 = a * a;
    let b2 = b * b;
    let c2 = c * c;

    return (Math.sqrt((4*a2*b2) - ((a2 + b2 - c2)*(a2 + b2 - c2))))/4;
}

function AmbiguousCase (angleA, sideA, sideB){
    let h = sideB * Math.sin(angleA);

    if(angleA < 90){
        const noTri = "No Triangles";
        const oneTri = "One Triangle";
        const rightTri = "Right Triangle";
        const twoTri = "Two Triangles";
        const error = "An Error Has Occured With The Calculations"
        
        if(sideA < h){
            return noTri;
        }else if (sideA == h){
            return rightTri;
        }else if (sideA > sideB){
            return oneTri;
        }else if ((h < sideA) && (a < b)){
            return twoTri;
        }else{
            return error;
        }
    } else if (angleA > 90){
        if ((a < b) || (a == h)){
            return noTri;
        }else if (a > b){
            return oneTri;
        }else{
            return error;
        }

    }
    

}

function NewtonsMethod (guess){

}

function PolynomialFunction (coefficients, exponents, xValue){

}