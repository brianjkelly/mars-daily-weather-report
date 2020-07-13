/*----- constants -----*/

/*----- app's state (variables) -----*/

let weatherData;

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