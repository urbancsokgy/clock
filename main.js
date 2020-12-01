let clock=()=>{
    let myDate=new Date();
   let second=myDate.getSeconds();
     let hour=myDate.getHours();
     let minute=myDate.getMinutes();
    (hour<10)? hour='0'+hour:'';
     (minute<10)? minute='0'+minute:'';
     (second<10)? second='0'+second:'';
     document.querySelector('.clock').textContent=`${hour} : ${minute} : ${second}`;
    
     setTimeout(clock,1000);
   }
   clock();
   
   