export async function currentLocation(){
    return await new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });;
}
