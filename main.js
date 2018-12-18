function countdownTimer(){
    var endDate = new Date('2018-12-25 00:00:00');

    //defining the lengths of time differences
    var second = 1000; var minute = second*60; var hour = minute*60; var day = hour*24; 
    var timer;

    function showRemaining(){
        var currentDate = new Date();
        //finds the distance between the desired date and current date
        var distance = endDate - currentDate;
        
        //if thhe distance is less thsn 0 (aka, it's already here) sets that
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<h1 id="datePassed">CHRISTMAS IS HERE!!</h1>';

            return;
        }
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);


        document.getElementById('countdown').innerHTML = days + ' ' + verifyPlurals(days, 'day');
        document.getElementById('countdown').innerHTML += ', ' + hours + ' ' + verifyPlurals(hours, 'hour');
        document.getElementById('countdown').innerHTML += '<br>' + minutes + ' ' + verifyPlurals(minutes, 'minute');
        document.getElementById('countdown').innerHTML +=  ', ' + seconds + ' ' + verifyPlurals(seconds, 'second');
        document.getElementById('countdown').innerHTML += '<br><br><b>' + (days+1) + ' ' + verifyPlurals((days+1), 'sleep') + ' to go!</b>';
        };
    timer = setInterval(showRemaining, 1000)
};

function verifyPlurals(value, type){
    if (value > 1){
        return type + 's';
    }else if (value == 1){
        return type;
    }else if (value == 0){
        return type + 's';
    }else{
        return null;
    }
}

countdownTimer()