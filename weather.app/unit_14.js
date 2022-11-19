const cities = {
    'Щасливе': 710950,
    'Коблеве': 705540,
    'Березанка': 712387
}
let sel = document.createElement('select');
sel.id = 'city';
document.querySelector('.container').appendChild(sel);
for (let key in cities) {
    let option = document.createElement('option');
    option.value = cities[key];
    option.text = key;
    sel.appendChild(option);

}
sel.style.width = '200px';
sel.style.height = '50px';

sel.style.fontSize = '24px';
sel.style.borderBottom = '2px solid red';
sel.style.borderTop = 'none';
sel.style.borderRight = 'none';
sel.style.borderLeft = 'none';

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "8f1a445333f91259c188d7e3900a171e"
}
function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

getWeather();
document.querySelector('#city').onchange = getWeather;

function showWeather(data) {
    let newDiv = document.createElement('div');
    document.querySelector('.container').appendChild(newDiv);
    newDiv.classList.add('show-weather');
    document.querySelector('.show-weather').innerHTML = `Температура ${data.main.temp} c<br>Швидкість вітру ${data.wind.speed} км<br>`;

    document.querySelector('.show-weather').style.fontSize = '22px';
    document.querySelector('.show-weather').style.display = 'inlineBlock';
    document.querySelector('.show-weather').style.paddingLeft = '15%';
    document.querySelector('.show-weather').style.lineHeight = '150%';
    document.querySelector('.show-weather').style.fontFamily = 'monospace';
    document.querySelector('.show-weather').style.color = 'darkBlue'
    console.log(data);
}
//showWeather();
// document.querySelector('#city').onchange = showWeather;
document.querySelector('body').addEventListener("change", changeBg);
function changeBg() {

    document.querySelector('body').style.backgroundImage = "url('img/koblevo-kurort.jpg')"
    if (document.querySelector('#city').value == '710950') {
        document.querySelector('body').style.backgroundImage = "url('img/Chap.jpg')"
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover';
    } else if (document.querySelector('#city').value == '712387') {
        document.querySelector('body').style.backgroundImage = "url('img/Berezanka.jpg')"
        document.querySelector('body').style.backgroundSize = 'cover';
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
    } else {
        document.querySelector('body').style.backgroundImage = "url('img/koblevo-kurort.jpg')"
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover';
    }
    document.querySelector('body').style.backgroundColor = document.getElementById("city").value;
}
//sel.onchange = changeBg();

