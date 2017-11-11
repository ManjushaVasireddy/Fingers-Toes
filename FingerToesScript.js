var input;
var counter;
var interval;
function counter(){
input=document.getElementById('input');
   
    count(input.value);
   
   
}
function restart() {

    document.getElementById('counter_box').innerHTML = "0";
    document.getElementById('finger').style.backgroundColor='#FF7F50';
    clearInterval(interval);
    count(input.value);
    
}

function reset(){
    input.value='';
    clearInterval(interval);
    counter=document.getElementById('counter_box');
    
    counter.innerHTML=0;
     document.getElementById('finger').style.backgroundColor='#FF7F50';
    
}

function count(maximum){
    var baseNum=1;
     counter=document.getElementById('counter_box');
    
 interval=setInterval(function(){
    if(baseNum<=maximum){
    counter.innerHTML=baseNum;
        if(baseNum%3==0){
            document.getElementById('finger').style.backgroundColor='MediumSeaGreen';
        }
        else{
            document.getElementById('finger').style.backgroundColor='#FF7F50';
        }
        
        baseNum++;
        
   
        
    } 
     else{
         clearInterval(interval);
     }
        
},1000);

}

           
        
   
