

    var reanNo;
var time = 15;
var x = setInterval(function() {
    if (time < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIMEOUT!";
      }
      else{
        document.getElementById("timer").innerHTML = time + " s ";
      }
      time -= 1;
}, 1000);


function handleNum(min, max){
   
    document.getElementById("timer").innerHTML = "TIMEOUT!";
    clearTimeout(x);
    reanNo = getRndInteger(min, max)
    // reanNo = 50

    submitNum(reanNo);
   document.getElementById("randomn").innerHTML = reanNo;
   console.log(reanNo);
//    end = false
return reanNo

}




function submitNum(reanNo){
    document.getElementById("num").disabled = true;
      
    const inputNum = document.getElementById("num").value;
    console.log(inputNum);

    // const d = (((inputNum - reanNo)/((inputNum + reanNo)/2)) * 100)
    const d = inputNum/reanNo

    console.log(d);

    function  declareResult(reanNo){
        if( d == 1 ){
            document.getElementById("result").innerHTML = "Congratulations! \n You won" ;
            
        }
        else if(d >= 0.5 && d<=1){
            // document.getElementById("result").innerHTML = `Congratulations \n you won ${d*10}`
            document.getElementById("result").innerHTML = "You are close to winning "

        }
        else if(d >= 0.9 && d<=1){
            // document.getElementById("result").innerHTML = "You are close to winning "
            document.getElementById("result").innerHTML = `Congratulations \n you won ${d*10}`

        }
        
        else {
            document.getElementById("result").innerHTML = "Better luck next time" ;
        }
}
declareResult(reanNo)
}


// const d = ((inputNum - reanNo)/((inputNum + reanNo)/2) * 100)


function getRndInteger(min, max) {
  
    return Math.floor(Math.random() * (max - min)) + min ; 
    
}

// function  declareResult(){
//     if( inputNum = reanNo ){
//         document.getElementById("result").innerHTML = "Congratulations! \n You won" ;
        
//     }
//     // else if((inputNum - 2) | (inputNum + 2) == reanNo ){
            // document.getElementById("result").innerHTML = "You are close to win."

//     // }
//     // else if(const inputNum){

//     // }
//     else {
//         document.getElementById("result").innerHTML = "Better luck next time" ;

//     }




document.getElementsByClassName('div1').style="pointer-events:none";
