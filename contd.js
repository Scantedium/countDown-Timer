const ddays = document.getElementById('days');
const dhours = document.getElementById('hours');
const dminutes = document.getElementById('minutes');
const dseconds = document.getElementById ('seconds')
const promoends = document.getElementById('countdown')



    const futureDATE = new Date(2023, 10, 13, 12,30, 0 );

    const date = futureDATE.getFullYear();
    
    // fureture date

    const futuretime = futureDATE.getTime()
     
    function promoDate(){
        const today = new Date().getTime();

        const t = futuretime -today
        //1sec = 1000milsec
        //60sec ==1mins
        //60mins =1hr
        //1day = 24hrs
        //values in mill seconds

        const oneday = 24 * 60 * 60 * 1000;
       const onehour = 60*60*1000;
       const onemins = 60*1000

       //calcuate the values
       let  days = t/oneday;
       days = Math.floor(days)
       let hours = Math.floor(t % oneday / onehour);
       let minutes = Math.floor(t% onehour / onemins);
       let seconds = Math.floor(t % onemins / 1000); 

       ddays.innerHTML=days;
       dhours.innerHTML=hours <10 ? '0' + hours: hours;
       dminutes.innerHTML=minutes <10 ? '0' + minutes: minutes,
       dseconds.innerHTML=seconds <10 ? '0' + seconds: seconds


       if(t < 0){
        clearInterval(t);

        ddays.innerHTML='00'
       dhours.innerHTML='00'
       dminutes.innerHTML='00'
       dseconds.innerHTML='00'
       }
      
    }

    letcountdown = setInterval(promoDate, 1000);

    promoDate()

