 const url = "https://api.open-meteo.com/v1/forecast?latitude=52.94&longitude=70.20&current_weather=true";
        
 async function showWeather() {
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Ошибка сервера");
        }
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        document.getElementById("celcia").innerHTML = temperature + "°C";
        } catch (error) {
        document.getElementById("celcia").innerHTML = "Ошибка при получении данных";
        console.log(error);
        }
        }