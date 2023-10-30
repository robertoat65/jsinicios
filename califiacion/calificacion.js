

function ordi(){
    let c1 = document.getElementById("clf1").value;
    let c2 = document.getElementById("clf2").value;
    let c3 = document.getElementById("clf3").value;
    const cf = (Number(c1) + Number(c2) + Number(c3)) / 3;
    console.log(cf)
    if(cf >= 8 && cf < 11){
        document.getElementById("formulario").style.display = "none";
        document.getElementById("pasaste").style.display = "block";
    }
    else if(cf < 8 && cf >= 0){
        document.getElementById("formulario").style.display = "none";
        document.getElementById("nopasaste").style.display = "block";
    }
    else{
        console.log("INTRODUCE NUMEROS DEL 1 AL 10")
    }
}
