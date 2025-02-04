import { useRoute } from '@react-navigation/native';
import styles from './Forecasts.style';
import Txt from "@/app/components/Txt";
import Header from "@/app/components/Header";
import ForcastListItem from "@/app/components/ForecastListItem";

import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { DAYS, getWeatherInterpretation } from '@/utils';



export default function Forecasts() {
    const {params} = useRoute();
    const forecastList = (
        <View style={{marginTop: 50}}>
            {params.time.map((time, index) => {
            const weatherCode = params.weathercode[index]
            const image = getWeatherInterpretation(weatherCode).image;
            const temperature = params.temperature_2m_max[index];
            const date = new Date(time);
            const dayOfTheWeek = DAYS[date.getDate()];
            const formatedDate = date.toLocaleDateString("default", {
                day: 'numeric',
                month: 'numeric'
            })

                return (
                    <ForcastListItem key={time} image={image}  temperature={temperature.toFixed(0)}  date={formatedDate} day={dayOfTheWeek}/>
                )
            })}
        </View>
    )
    return <><Header city={params.city} />
    {forecastList}
    {/* <ForcastListItem  image={require("../../../assets/images/clouds.png")} day={"MON"} date={"03/11"} temperature={3}/> */}
    </>
}