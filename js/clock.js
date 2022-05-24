// all the functions declarations
function changeNumericTime(timer_element){
    timer_element.innerHTML = (new Date()).toLocaleTimeString();
}
function changeClockTime(hour_hand,minute_hand,second_hand){
    const date_object = new Date();
    const hour = date_object.getHours();
    const minute = date_object.getMinutes();
    const second = date_object.getSeconds();

    // getting degress of hours, minutes, seconds hands
    const hour_degree = (hour > 12 ? -1*(12-hour):hour )*360/12;
    const second_degree = second*360/60;
    const minute_degree = minute*360/60;
    
    hour_hand.style.transform = `rotate(${hour_degree-90}deg)`
    minute_hand.style.transform = `rotate(${minute_degree-90}deg)`
    second_hand.style.transform = `rotate(${second_degree-90}deg)`
    console.log(hour_hand, hour_degree, hour_hand.style.transform);
}

// dom variables
let numeric_time = document.getElementById("analog-time");
let hour_hand = document.getElementById("hour-hand");
let minute_hand = document.getElementById("minute-hand");
let second_hand = document.getElementById("second-hand");


// continuous timers
setInterval(() => {
    changeNumericTime(numeric_time);
    changeClockTime(hour_hand,minute_hand,second_hand);
}, 1000);

