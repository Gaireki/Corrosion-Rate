//when submit button is clicked//
document.getElementById("subBtn").onclick = function(submitButton){
    //get data from these boxes and convert it to number//
    let iniYear = document.getElementById("iniYear").value;
    iniYear = Number(iniYear)
    let preYear = document.getElementById("preYear").value;
    preYear = Number(preYear)
    let curYear = document.getElementById("curYear").value;
    curYear = Number(curYear)
    let tIni = document.getElementById("tIni").value;
    tIni = Number(tIni)
    let tPre = document.getElementById("tPre").value;
    tPre = Number(tPre)
    let tCurr = document.getElementById("tCurr").value;
    tCurr = Number(tCurr)
    let tMin = document.getElementById("tMin").value;
    tMin = Number(tMin)
    let dCorRate = document.getElementById("dCorRate").value;
    dCorRate = Number(dCorRate)
    console.log(iniYear, typeof iniYear);
    console.log(preYear, typeof preYear);
    console.log(curYear, typeof curYear);
    console.log(tIni, typeof tIni);
    console.log(tPre, typeof tPre);
    console.log(tCurr, typeof tCurr);
    console.log(dCorRate, typeof dCorRate);
    /* ~~To check again when we have new idea~~
    if(iniYear < 0 && isNaN(iniYear)){
        alert(`Please input initial year!`);
        console.log(typeof iniYear);
    }
    
    if(preYear.length < 0 && !isNaN(preYear)){
        alert(`Please input previous year!`);
        console.log(typeof preYear);
    }
    
    if(curYear.length < 0 && !isNaN(curYear)){
        alert(`Please input current year!`);
        console.log(typeof curYear);
    }
    
    if(tIni.length < 0 && !isNaN(tIni)){
        alert(`Please input initial thickness / t-Nom!`);
        console.log(typeof tIni);
    }
    
    if(tPre.length < 0 && !isNaN(tPre)){
        alert(`Please input previous thickness!`);
        console.log(typeof tPre);
    }
    
    if(tCurr.length < 0 && !isNaN(tCurr)){
        alert(`Please input current thickness!`);
        console.log(typeof tCurr);
    }
    
    if(tMin.length < 0 && !isNaN(tMin)){
        alert(`Please input minimum thickness!`);
        console.log(typeof tMin);
    }
    */

    //calculation for corrosion rate//
    shortTermCR = ((tIni-tPre)/(curYear-preYear));
    longTermCR = ((tIni-tCurr)/(curYear-preYear));
   

    //if current thickness is higher than previous/initial//
    if(longTermCR > 1 || longTermCR < 0){
        if(dCorRate <= 0 ){
            alert(`Please input default corrosion rate!`);
        }else{        
           //default corrosion rate is use to calculate remaining life//
            defaultRemainingLife = ((tPre-tMin)/(dCorRate))
            console.log(defaultRemainingLife)
            document.getElementById("myH5").textContent = `Remaining Life(Default): ${defaultRemainingLife}`;
        }

    } 
    
    //remaining life calculation using short term corrosion rate//
    if(shortTermCR < 1 && shortTermCR > 0){
        remainingLifeST = ((tCurr-tMin)/(shortTermCR));
        document.getElementById("myH1").textContent = `Short Term Corrosion Rate: ${shortTermCR}`;
        document.getElementById("myH2").textContent = `Remaining Life(ST): ${remainingLifeST}`;

    }

    //remaining life calculation using long term corrosion rate//
    if(longTermCR < 1 && longTermCR > 0){
        remainingLifeLT = ((tCurr-tMin)/(longTermCR));
        document.getElementById("myH3").textContent = `Long Term Corrosion Rate: ${longTermCR}`;
        document.getElementById("myH4").textContent = `Remaining Life(LT): ${remainingLifeLT}`;

    }
}

