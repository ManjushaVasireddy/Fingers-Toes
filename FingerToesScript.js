var input;
var counter;
var interval;

function counterFunction(evectionnt) {
    if (event.keyCode == 13) {
        input = document.getElementById('input');
        clearInterval(interval);
        counter = document.getElementById('counter_box');
        counter.innerHTML = 0;
        document.getElementById('finger').style.backgroundColor = '#FF7F50';
        document.getElementById('toes').style.backgroundColor = '#FF7F50';
        count(input.value);
    }
}

function restart() {        
    document.getElementById('counter_box').innerHTML = "0";
    document.getElementById('finger').style.backgroundColor = '#FF7F50';
    document.getElementById('toes').style.backgroundColor = '#FF7F50';
    clearInterval(interval);
    count(input.value);
}

function reset() {
    input.value = '';
    clearInterval(interval);
    counter = document.getElementById('counter_box');

    counter.innerHTML = 0;
    document.getElementById('finger').style.backgroundColor = '#FF7F50';
    document.getElementById('toes').style.backgroundColor = '#FF7F50';

}

function count(maximum) {
    var baseNum = 1;
    counter = document.getElementById('counter_box');

    interval = setInterval(function() {
        if (baseNum <= maximum) {
            counter.innerHTML = baseNum;
            if (baseNum % 3 == 0 && baseNum % 5 == 0) {
                document.getElementById('finger').style.backgroundColor = 'MediumSeaGreen';
                document.getElementById('toes').style.backgroundColor = 'MediumSeaGreen';
            } else if (baseNum % 3 == 0) {
                document.getElementById('finger').style.backgroundColor = 'MediumSeaGreen';
                document.getElementById('toes').style.backgroundColor = '#FF7F50';
            } else if (baseNum % 5 == 0) {
                document.getElementById('toes').style.backgroundColor = 'MediumSeaGreen';
                document.getElementById('finger').style.backgroundColor = '#FF7F50';
            } else {
                document.getElementById('finger').style.backgroundColor = '#FF7F50';
                document.getElementById('toes').style.backgroundColor = '#FF7F50';
            }

            baseNum++;

        } else {
            clearInterval(interval);
        }

    }, 1000);

}
