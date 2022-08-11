export const getStringDateNow = () => {
    const date = new Date();

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const fechaHoy = date.toLocaleDateString('es-AR', options)
    return fechaHoy;
}

export const getDayByMoreDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    let options = {
        weekday: 'long'
    };
    const fechaHoy = date.toLocaleDateString('es-AR', options)
    return fechaHoy;
}

export const setFavicon = (url) => {
    const favicon = document.getElementById("favicon");
    favicon.href = url || "https://openweathermap.org/img/wn/01d.png";
}

export const setTitle = (title) => {
    document.title = `${title} | Challenge Flow App`;
}