function rotate(){
    hr1=document.getElementById("hr1");
    hr2=document.getElementById("hr2");
    hr3=document.getElementById("hr3");
    if(hr1.style.transform =="" || hr1.style.transform =="0" ){
        hrall=document.querySelectorAll(".hh");
        hrall.forEach(hrall=>{
        hrall.style.position="absolute";
        hrall.style.right="12px"
        hrall.style.top="15px"
        hrall.style.border="1.5px solid red";
        })
        hr1.style.transform="rotate(140deg)"
        hr2.style.transform="rotate(-140deg)"
        hr3.style.transform="rotate(-140deg)"
        
        opta=document.querySelectorAll("#opta");
        
        opta.forEach(opta=>{
            opta.style.transform="scale(1.1)";
        })
        
        
        
        showoptions=document.getElementById("showoptions");
        showoptions.style.left="0"
    }else{
        hrall = document.querySelectorAll(".hh");
        hrall.forEach(hrall => {
        hrall.style.position = "";
        hrall.style.right = "";
        hrall.style.top = "";
        hrall.style.border = "";
        });
            
        hr1.style.transform = "";
        hr2.style.transform = "";
        hr3.style.transform = "";
        showoptions=document.getElementById("showoptions");
        showoptions.style.left="-5000px"
    }
}
