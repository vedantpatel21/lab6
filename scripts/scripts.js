




function recalculate()
{
    let costLabel=document.getElementById("calculated-cost");
    let modelName=document.getElementById("model-text").innerText;
    let duration= parseInt(document.getElementById("duration-text").innerText);
    let Newtotalcost;
    if(modelName=="Model XYZ"){
        Newtotalcost=duration*100;
    } else if(modelName=="Model CPRG"){
        Newtotalcost=duration*213;

    }
    else{
        console.log("error");
    }
   costLabel.innerHTML=Newtotalcost;

}
recalculate();

                                                                                                                            

  var modelButton=document.getElementById("model-button");
  function changeModel(){
    let modelText=document.getElementById("model-text");
    let modelName= modelText.innerText;
    if (modelName === "Model XYZ") {
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "Model CPRG") {
        modelText.innerHTML = "Model XYZ";
    } else {
        console.log("error");
  }
  recalculate();
}
modelButton.addEventListener("click", changeModel);




const durationButton=document.getElementById("duration-button");
function changeDuration(){
    const durationText=document.getElementById("duration-text");
    let newDuration=prompt("enter new duration");
    newDuration=parseInt(newDuration,10);
    durationText.innerHTML=newDuration;
    recalculate();

}
durationButton.addEventListener("click", changeDuration);