const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9322a031a3msh3c7f32b0089937cp1873e1jsn48131f4fde6f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const myfunc=(city)=>{

	//e.preventDefault()
	//var naam = document.forms.myform.myinput.value;
	myid.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			//cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			//feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			//min_temp.innerHTML = response.min_temp
			//max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			//wind_degrees.innerHTML = response.wind_degrees
			//sunrise.innerHTML = response.sunrise
			//sunset.innerHTML = response.sunset
			document.getElementById("myid").innerHTML = naam;
		})
		.catch(err => console.error(err));
	}
		mysubmit.addEventListener("click", (e)=>{
			e.preventDefault()
			myfunc(city.value)
		})
		myfunc("Lucknow")