

const baseUrll = 'https://api.weatherapi.com/v1/current.json?key=13cfc438d6a94a47ae0143807230607'

export const getWeatherdatForcity = async (city) => {
    const respons = await fetch(`${baseUrll}&q=${city}`)
    return await respons.json()
}

export const getdataForLocetion = async (lat, lon) => {
    const respons = await fetch(`${baseUrll}&q=${lat},&q=${lon}`)
    return await respons.json()
}