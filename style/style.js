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

function ShowArgument() {
    var arg = document.getElementById("deve1");
    var sty=document.getElementById("rotateimg");
    var the=document.getElementById("the")
    var corrent = window.getComputedStyle(arg).maxHeight
    if(corrent === "0px" || corrent === "0"){
        arg.style.maxHeight = arg.scrollHeight+"px";
        the.style.borderBottom="none";
        the.style.borderRadius="5px 5px 0 0 "
        sty.style.transform="rotate(180deg)"
        arg.style.border="1px solid #1f1f1f"
        arg.style.padding="10px"
        arg.style.borderTop="0"
        arg.style.borderRadius=" 0 0 5px 5px"
    }else{
        arg.style.padding="0"
        arg.style.border="none"
        arg.style.maxHeight="0"
        the.style.borderBottom="1px solid #1f1f1f"
        sty.style.transform=""
        the.style.borderRadius="5px"
        
        
    }
}

function ShowArgument2(){
    var arg2=document.getElementById("deve2")
    var img =document.getElementById("rotateimg2")
    var cor =window.getComputedStyle(arg2).maxHeight
    var deve = document.getElementById("deve12")
    var the = document.getElementById("the2")
    if(cor === "0px" || cor === "0"){
        img.style.transform="rotate(180deg)"
        arg2.style.maxHeight=arg2.scrollHeight+"px"
        deve.style.padding="10px"
        the.style.borderBottom="0"
        deve.style.borderBottom="1px solid #1f1f1f"
        deve.style.borderTop="0"
        
        deve.style.borderRadius=" 0 0 5px 5px"
        the2.style.borderRadius="5px 5px 0 0 "
    }else{
        arg2.style.maxHeight="0"
        img.style.transform=""
        the.style.borderBottom="1px solid #1f1f1f"
        the2.style.borderRadius="5px"
    }
    
    
}


function ShowArgument3(){
    var arg2=document.getElementById("deve3")
    var img =document.getElementById("rotateimg3")
    var cor =window.getComputedStyle(arg2).maxHeight
    var deve = document.getElementById("deve13")
    var the = document.getElementById("the3")
    if(cor === "0px" || cor === "0"){
        img.style.transform="rotate(180deg)"
        arg2.style.maxHeight=arg2.scrollHeight+"px"
        deve.style.padding="10px"
        the.style.borderBottom="0"
        deve.style.borderBottom="1px solid #1f1f1f"
        deve.style.borderTop="0"
        
        deve.style.borderRadius=" 0 0 5px 5px"
        the2.style.borderRadius="5px 5px 0 0 "
    }else{
        arg2.style.maxHeight="0"
        img.style.transform=""
        the.style.borderBottom="1px solid #1f1f1f"
        the2.style.borderRadius="5px"
    }
    
    
}


setInterval(function() {
        var divFor = document.getElementById("for");
        var divFor2 = document.getElementById("for2");

        if (divFor.style.opacity !== "0") {
            divFor.style.opacity = "0";
            divFor2.style.opacity = "1";
        } else {
            divFor.style.opacity = "1";
            divFor2.style.opacity = "0";
        }
    }, 5000);
function openurl1(){
    window.open("https://www.pcard.click/profile/9Z62xxZ5","_blank")
}

function openurl2(){
    window.open("https://www.pcard.click/profile/B3jbDr39","_blank")
}

function openurl3(){
    window.open("https://www.pcard.click/profile/V3lkaEZY","_blank")
}

function fexit(){
    document.getElementById('infoissam').style.left='-5000px'
}

function fexit2(){
    document.getElementById('infodani').style.left='-5000px'
}

function fexit3(){
    document.getElementById('infoala').style.left='-5000px'
}

function iissam(){
    vl=document.getElementById('infoissam')
    
    if(vl.style.left == "-5000px" || vl.style.left == ""){
        vl.style.left="0"
    }else{
        vl.style.left="-5000px"
    }
}

function idani(){
    vl=document.getElementById('infodani')
    
    if(vl.style.left == "-5000px" || vl.style.left == ""){
        vl.style.left="0"
    }else{
        vl.style.left="-5000px"
    }
}

function iala(){
    vl=document.getElementById('infoala')
    
    if(vl.style.left == "-5000px" || vl.style.left == ""){
        vl.style.left="0"
    }else{
        vl.style.left="-5000px"
    }
}
