import { createContext, useContext, useState } from "react";
import { getWeatherdatForcity, getdataForLocetion } from '../weather'


export const WeatherContext = createContext(null);

export const useWeatch = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null)
    const [searhcCity, setSearhcCity] = useState(null)

    const featchData = async () => {
        const respons = await getWeatherdatForcity(searhcCity)
        setData(respons)
    }

    const featchCurentLocetion = () => {
        navigator.geolocation.getCurrentPosition((Position) => {
            getdataForLocetion(
                Position.coords.latitude,
                Position.coords.longitude
            ).then((data) => {
                setData(data)
            })
        })
    }

    return (
        <WeatherContext.Provider value={{ data, searhcCity, featchData, setSearhcCity, featchCurentLocetion }}>
            {props.children}
        </WeatherContext.Provider>
    )
}