var section = document.querySelector('section');

var requestURL = 'https://rafa-byui.github.io/final-project/data/closure.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var templeInfo = request.response;
    showTemple(templeInfo);
}



function showTemple(jsonObj) {
    var temples = jsonObj['temples'];
    for (var i = 0; i < temples.length; i++) {
         if (temples[i].name == 'Mount Timpanogos') {
            var mountTimpanogos = document.getElementById("mount-timpanogos-card");
            var myPara1 = document.createElement('p');
            myPara1.innerHTML = temples[i].closures;
            mountTimpanogos.appendChild(myPara1);

        } 
    }
}