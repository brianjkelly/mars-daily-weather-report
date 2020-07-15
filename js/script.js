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


/*----- functions -----*/

function handleGetData() {
    $.ajax({
        url:'https://api.nasa.gov/insight_weather/?api_key=p8oOGx28D5rYdVoINo3rcPBlOBXpWjI4AcexcORz&feedtype=json&ver=1.0'
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

    // will eventually need to generate a date based on user selection of sol
    $date.html(dateStr);

    recentSol = weatherData.sol_keys[weatherData.sol_keys.length-1];
    $sol.html(recentSol);
    $season.html(weatherData[recentSol].Season);
    $maxTemp.html(Math.floor(weatherData[recentSol].AT.mx));
    $avgTemp.html(Math.floor(weatherData[recentSol].AT.av));
    $minTemp.html(Math.floor(weatherData[recentSol].AT.mn));
    $maxWind.html(Math.floor(weatherData[recentSol].HWS.mx));
    $avgWind.html(Math.floor(weatherData[recentSol].HWS.av));
    $minWind.html(Math.floor(weatherData[recentSol].HWS.mn));
    // the wind direction most_common has a chance of returning back 'null'
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
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true

    
  });

  function render2() {

    // will eventually need to generate a date based on user selection of sol
    $date.html(dateStr2);

    recentSol = weatherData.sol_keys[weatherData.sol_keys.length-2];
    $sol.html(recentSol);
    $season.html(weatherData[recentSol].Season);
    $maxTemp.html(Math.floor(weatherData[recentSol].AT.mx));
    $avgTemp.html(Math.floor(weatherData[recentSol].AT.av));
    $minTemp.html(Math.floor(weatherData[recentSol].AT.mn));
    $maxWind.html(Math.floor(weatherData[recentSol].HWS.mx));
    $avgWind.html(Math.floor(weatherData[recentSol].HWS.av));
    $minWind.html(Math.floor(weatherData[recentSol].HWS.mn));
    // the wind direction most_common has a chance of returning back 'null'
    $dirWind.html(weatherData[recentSol].WD.most_common.compass_point);
    $maxPa.html(Math.floor(weatherData[recentSol].PRE.mx));
    $avgPa.html(Math.floor(weatherData[recentSol].PRE.av));
    $minPa.html(Math.floor(weatherData[recentSol].PRE.mn));

}

function render3() {

    // will eventually need to generate a date based on user selection of sol
    $date.html(dateStr3);

    recentSol = weatherData.sol_keys[weatherData.sol_keys.length-3];
    $sol.html(recentSol);
    $season.html(weatherData[recentSol].Season);
    $maxTemp.html(Math.floor(weatherData[recentSol].AT.mx));
    $avgTemp.html(Math.floor(weatherData[recentSol].AT.av));
    $minTemp.html(Math.floor(weatherData[recentSol].AT.mn));
    $maxWind.html(Math.floor(weatherData[recentSol].HWS.mx));
    $avgWind.html(Math.floor(weatherData[recentSol].HWS.av));
    $minWind.html(Math.floor(weatherData[recentSol].HWS.mn));
    // the wind direction most_common has a chance of returning back 'null'
    $dirWind.html(weatherData[recentSol].WD.most_common.compass_point);
    $maxPa.html(Math.floor(weatherData[recentSol].PRE.mx));
    $avgPa.html(Math.floor(weatherData[recentSol].PRE.av));
    $minPa.html(Math.floor(weatherData[recentSol].PRE.mn));
};