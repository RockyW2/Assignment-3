document.getElementById("heron-calculate").addEventListener("click", function() {

    const sideA = parseFloat(document.getElementById("hSideA").value);
    const sideB = parseFloat(document.getElementById("hSideB").value);
    const sideC = parseFloat(document.getElementById("hSideC").value);

   
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Please enter all sides.");
        return;
    }

 
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById("heron-area").value = area.toFixed(2);
});
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
    let x0 = guess;
    let x1 = 0;

    function f(x){
        return 6*Math.pow(x,4) - 13*Math.pow(x,3) - 13*Math.pow(x,2) + 7*x + 6;
    }

    function f1(x){
        return 24*Math.pow(x,3) - 39*Math.pow(x,2) - 36*x + 7;
    }

    do{
        x1 = x0 - f(x0)/f1(x0);
    }while(Math.abs(x1-x0) > 0.0001)
    
}

function PolynomialFunction (coefficients, exponents, xValue){

}