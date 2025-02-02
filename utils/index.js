export const WEATHER_INTERPRETATIONS = [
    {
        codes: [0],
        image: require('../assets/images/sun.png'),
        label: 'Sunny'

    },
    {
        codes: [1, 2, 3, 45, 48],
        label: "Cloudy",
        image: require("../assets/images/clouds.png"),
      },
      {
        codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
        label: "Rainy",
        image: require("../assets/images/rain.png"),
      },
      {
        codes: [71, 73, 75, 77],
        label: "Snowy",
        image: require("../assets/images/snow.png"),
      },
      {
        codes: [95,96, 99],
        label: "Thunderous",
        image: require("../assets/images/thunder.png"),
      },
]

export function getWeatherInterpretation(code) {
  console.log("===", WEATHER_INTERPRETATIONS.find(interpretation => interpretation.codes.includes(code)).image)
  return WEATHER_INTERPRETATIONS.find(interpretation => interpretation.codes.includes(code))
}