document.getElementById("heron-calculate").addEventListener("click", function() {

    const sideA = parseFloat(document.getElementById("heron-side-a").value);
    const sideB = parseFloat(document.getElementById("heron-side-b").value);
    const sideC = parseFloat(document.getElementById("heron-side-c").value);

   
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Please enter all sides.");
        return;
    }

 
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById("heron-area").value = area;
});



document.getElementById("ambiguous-calculate").addEventListener("click", function() {

    const hSideA = parseFloat(document.getElementById("ambiguous-side-a").value);
    const hSideB = parseFloat(document.getElementById("ambiguous-side-b").value);
    const hAngleA = parseFloat(document.getElementById("ambiguous-angle-a").value);
    let h = hSideB * Math.sin(hAngleA*(Math.PI/180));
    console.log(h);
    const noTri = "No Triangles";
    const oneTri = "One Triangle";
    const rightTri = "Right Triangle";
    const twoTri = "Two Triangles";

    if(hAngleA < 90){
        if(hSideA < h){
            document.getElementById("ambiguous-result").value = noTri;
            return;
        }else if (hSideA == h){
            document.getElementById("ambiguous-result").value = rightTri;
            return;
        }else if (hSideA > hSideB){
            document.getElementById("ambiguous-result").value = oneTri;
            return;
        }else if ((h < hSideA) && (hSideA < hSideB)){
            document.getElementById("ambiguous-result").value = twoTri;
            return;
        }else{
            alert("An Error Has Occured With The Calculations");
        }
    } else if (hAngleA > 90){
        if ((hSideA < hSideB) || (hSideA == hSideB)){
            document.getElementById("ambiguous-result").value = noTri;
            return;
        }else if (hSideA > hSideB){
            document.getElementById("ambiguous-result").value = oneTri;
            return;
        }else{
            alert("An Error Has Occured With The Calculations");
        }

    }
    

});



document.getElementById("newton-calculate").addEventListener("click", function() {
    let currentGuess = parseFloat(document.getElementById("root-guess").value);
    let prevGuess = 0;
    let newGuess = 0;

    function f(x){
        return 6*Math.pow(x,4) - 13*Math.pow(x,3) - 13*Math.pow(x,2) + 7*x + 6;
    }

    function f1(x){
        return 24*Math.pow(x,3) - 39*Math.pow(x,2) - 36*x + 7;
    }

    do{
        newGuess = currentGuess - f(currentGuess)/f1(currentGuess);
        prevGuess = currentGuess;
        currentGuess = newGuess;
    }while(Math.abs(prevGuess-currentGuess) > 0.0001)

    if (Math.abs(prevGuess-currentGuess) < 0.0001){
        document.getElementById("newton-result").value = currentGuess;
    }
    
});

document.getElementById("polynomial-calculate").addEventListener("click", function(){
    const coefficients = document.getElementById("polynomial-coefficients").value.split(" ").map(Number);
    const exponents = document.getElementById("polynomial-exponents").value.split(" ").map(Number);
    const xValue = parseFloat(document.getElementById("polynomial-x-Value").value);

    console.log (coefficients);
    console.log(exponents);
    console.log(xValue);

    if (coefficients.length !== exponents.length) {
        alert("Please ensure coefficients and exponents have the same length.");
        return;
    }

    let polynomialStr = "";
    let yValue = 0;

    for (let i = 0; i < coefficients.length; i++) {
        const coef = coefficients[i];
        const exp = exponents[i];
        const term = coef * Math.pow(xValue, exp);

        yValue += term;

        if (coef !== 0) {
            if (i > 0 && coef > 0){
                polynomialStr += " + "; 
            }    
            if (coef < 0){
                polynomialStr += " - ";
            } 
            polynomialStr += `${Math.abs(coef)}x^${exp}`;
        }
    }

    document.getElementById("polynomial-function").value = polynomialStr;
    document.getElementById("polynomial-result").value = yValue;
    console.log(polynomialStr);
    console.log(yValue);
})