/*----- constants -----*/

/*----- app's state (variables) -----*/

let weatherData;

/*----- cached element references -----*/

const $date = $('#date');
const $sol = $('#sol');
const $season = $('#season');
const $maxTemp = $('#maxTemp');
const $avgTemp = $('#avgTemp');
const $minTemp = $('#minTemp');
const $maxWind = $('#maxWind');
const $avgWind = $('#avgWind');
const $minWind = $('#minWind');
const $dirWind = $('#dirWind');
const $maxPa = $('#maxPa');
const $avgPa = $('#avgPa');
const $minPa = $('#minPa');

/*----- event listeners -----*/

/*----- functions -----*/

function handleGetData() {
    $.ajax({
        url:'https://api.nasa.gov/insight_weather/?api_key=p8oOGx28D5rYdVoINo3rcPBlOBXpWjI4AcexcORz&feedtype=json&ver=1.0'
    }).then(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log('bad request: ', error);
        }
    )
};