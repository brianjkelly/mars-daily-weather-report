/*----- constants -----*/

var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dateStr = monthArr[month] + " " + date;

var d2 = new Date(d.getTime() - 86400000);
var date2 = d2.getDate();
var month2 = d2.getMonth();
var dateStr2 = monthArr[month2] + " " + date2;

var d3 = new Date (d.getTime() - (86400000 * 2));
var date3 = d3.getDate();
var month3 = d3.getMonth();
var dateStr3 = monthArr[month3] + " " + date3;


/*----- app's state (variables) -----*/

let weatherData;

// Define variable that will be assigned the sol_key for the most recent sol
let $recentSol;

/*----- cached element references -----*/

const $date = $('#dateVal');
const $sol = $('#solVal');
const $season = $('#seasonVal');
const $maxTemp = $('#maxTempVal');
const $avgTemp = $('#avgTempVal');
const $minTemp = $('#minTempVal');
const $maxWind = $('#maxWindVal');
const $avgWind = $('#avgWindVal');
const $minWind = $('#minWindVal');
const $dirWind = $('#dirWindVal');
const $maxPa = $('#maxPaVal');
const $avgPa = $('#avgPaVal');
const $minPa = $('#minPaVal');

// carousel element references

const $carousel = $('.carousel');
const $fpDate = $('#firstPanelDate');
const $fpSol = $('#firstPanelSol');
const $spDate = $('#secondPanelDate');
const $spSol = $('#secondPanelSol');
const $tpDate = $('#thirdPanelDate');
const $tpSol = $('#thirdPanelSol');

/*----- event listeners -----*/

$('#btnGet1').on('click', render);
$('#btnGet2').on('click', render2);
$('#btnGet3').on('click', render3);
$('#btnNext').on('click', nextCar);

/*----- functions -----*/

function handleGetData() {
    $.ajax({
        url:`https://api.nasa.gov/insight_weather/?api_key=${config.API_KEY}`
    }).then(
        (data) => {
            weatherData = data;
            render();
            setCar();
        },
        (error) => {
            console.log('bad request: ', error);
        }
    )
};

function render() {
    $date.html(dateStr);
    recentSol = weatherData.sol_keys[weatherData.sol_keys.length-1];
    $sol.html(recentSol);
    $season.html(weatherData[recentSol].Season.charAt(0).toUpperCase() + weatherData[recentSol].Season.slice(1)); 
    $maxTemp.html(Math.floor(weatherData[recentSol].AT.mx));
    $avgTemp.html(Math.floor(weatherData[recentSol].AT.av));
    $minTemp.html(Math.floor(weatherData[recentSol].AT.mn));
    $maxWind.html(Math.floor(weatherData[recentSol].HWS.mx));
    $avgWind.html(Math.floor(weatherData[recentSol].HWS.av));
    $minWind.html(Math.floor(weatherData[recentSol].HWS.mn));
    $dirWind.html(weatherData[recentSol].WD.most_common.compass_point);
    $maxPa.html(Math.floor(weatherData[recentSol].PRE.mx));
    $avgPa.html(Math.floor(weatherData[recentSol].PRE.av));
    $minPa.html(Math.floor(weatherData[recentSol].PRE.mn));

}

function setCar() {
    $fpDate.html(dateStr);
    $fpSol.html("Sol " + weatherData.sol_keys[weatherData.sol_keys.length-1]);

    $spDate.html(dateStr2);
    $spSol.html("Sol " + weatherData.sol_keys[weatherData.sol_keys.length-2]);

    $tpDate.html(dateStr3);
    $tpSol.html("Sol " + weatherData.sol_keys[weatherData.sol_keys.length-3]);
}


// when the page loads the most recent date's data should be displayed initially
handleGetData();

// carousel functionality and initialization
// initialize modal
$carousel.carousel();
const instance = M.Carousel.getInstance($carousel);


$('.carousel.carousel-slider').carousel({
    indicators: true,
    fullWidth: true 
  });

  function render2() {
    $date.html(dateStr2);
    recentSol = weatherData.sol_keys[weatherData.sol_keys.length-2];
    $sol.html(recentSol);
    $season.html(weatherData[recentSol].Season.charAt(0).toUpperCase() + weatherData[recentSol].Season.slice(1));
    $maxTemp.html(Math.floor(weatherData[recentSol].AT.mx));
    $avgTemp.html(Math.floor(weatherData[recentSol].AT.av));
    $minTemp.html(Math.floor(weatherData[recentSol].AT.mn));
    $maxWind.html(Math.floor(weatherData[recentSol].HWS.mx));
    $avgWind.html(Math.floor(weatherData[recentSol].HWS.av));
    $minWind.html(Math.floor(weatherData[recentSol].HWS.mn));
    $dirWind.html(weatherData[recentSol].WD.most_common.compass_point);
    $maxPa.html(Math.floor(weatherData[recentSol].PRE.mx));
    $avgPa.html(Math.floor(weatherData[recentSol].PRE.av));
    $minPa.html(Math.floor(weatherData[recentSol].PRE.mn));

}

function render3() {
    $date.html(dateStr3);
    recentSol = weatherData.sol_keys[weatherData.sol_keys.length-3];
    $sol.html(recentSol);
    $season.html(weatherData[recentSol].Season.charAt(0).toUpperCase() + weatherData[recentSol].Season.slice(1));
    $maxTemp.html(Math.floor(weatherData[recentSol].AT.mx));
    $avgTemp.html(Math.floor(weatherData[recentSol].AT.av));
    $minTemp.html(Math.floor(weatherData[recentSol].AT.mn));
    $maxWind.html(Math.floor(weatherData[recentSol].HWS.mx));
    $avgWind.html(Math.floor(weatherData[recentSol].HWS.av));
    $minWind.html(Math.floor(weatherData[recentSol].HWS.mn));
    $dirWind.html(weatherData[recentSol].WD.most_common.compass_point);
    $maxPa.html(Math.floor(weatherData[recentSol].PRE.mx));
    $avgPa.html(Math.floor(weatherData[recentSol].PRE.av));
    $minPa.html(Math.floor(weatherData[recentSol].PRE.mn));
};

function nextCar() {
    instance.next(1);
    $('.carousel.carousel-slider').carousel({
        indicators: true,
        fullWidth: true 
      });
};