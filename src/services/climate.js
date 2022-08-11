import { httpGet } from "./httpServices";
const apiKey = '641f01cd9335e4536f576b5c4a34ab90';
const uriBase = `https://api.openweathermap.org/data/2.5`;
const uriBaseGeo = `http://api.openweathermap.org/geo/1.0`;

export const getCurrentClimateByPosition = async position => {
    const uri = `${uriBase}/onecall?units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}&lat=${position.latitude}&lon=${position.longitude}`
    return await httpGet(uri)
}

export const getCoordinatesByLocationName = async name => {
    const uri = `${uriBaseGeo}/direct?q=${name}&appid=${apiKey}`;
    return await httpGet(uri)
}
