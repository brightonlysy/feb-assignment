import React from 'react';
import './App.css';


import Form from './components/Form'
import Weather from './components/Weather'
import Titles from './components/Titles'
import Navbar from './components/Navbar'



const API_KEY = '1243b7e92f418b052c1a8b30989bf484'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      navToggle: false,
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }  
  
  
  getWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    const data = await api_call.json()
    if (city && country) {
      
      // console.log(data)
      
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        // description: data.main.weather.description,
        description: data.weather[0].description,
        error: " "
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please Enter City'
      })
    }
  }
  

  navToggler = () => {
    this.setState(prevState => ({
      navToggle: !prevState.navToggle
    }))
  }

  render() {
    return (
      <>
        <div className='app-container'>
          <button onClick={this.navToggler}>|||</button>
          <Navbar navToggle={this.state.navToggle} />
        </div>
        <div className="wrapper">
          <div className="main">
              
            <div className="container">
              <div className="title">
                
                <Titles />
              </div>

              <div className="form">
                <Form getWeather={this.getWeather} />
              </div>

              <div className="weather">
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
}

export default App
