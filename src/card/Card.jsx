import { useWeatch } from "../context/WeatherContext"


export const Card = () => {

    const weather = useWeatch()

    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="" />
            <h4>{weather?.data?.current?.temp_c} c</h4>
            <p>{weather?.data?.location?.name}</p>
        </div>
    )
}