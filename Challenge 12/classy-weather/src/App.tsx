import React, { Component } from "react";
import WeatherModel from "./WeatherModel";
import Days from "./Day";
import './Day.css';

interface CounterState{
  count:number
}

interface CounterProps{
  name:string
}

class Counter extends Component<CounterProps,CounterState>{

  constructor(props:CounterProps){
    super(props);

    this.state = {count:0};
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    this.setState((currentState:any)=>{
      return{count: currentState.count + 1}
    });
  }

  handleDecrement = () => {
    this.setState((currentState:any)=>{
      return{count: currentState.count - 1}
    });
  }

  render(): React.ReactNode {

    const {count} = this.state;
    const {name} = this.props;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);

    return(
      <div>
        <p>Hello, {name}</p>
        <button onClick={this.handleDecrement}>-</button>
        <span>{currentDate.toDateString()} {count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter;

export const App = () => {
  return(
    <div>
      {/* <Counter name={'Kishore'}/> */}
      <ClassyWeather/>
    </div>
  )
}

interface ClassyWeatherState{
  location:string;
  isError:string,
  isLoading:boolean,
  countryFlag:string,
  weather:WeatherModel
}

interface ClassyWeatherProps{

}

class ClassyWeather extends React.Component<ClassyWeatherProps,ClassyWeatherState>{

  constructor(props:ClassyWeatherProps){
    super(props);

    this.state = {
                    location:'',
                    isLoading:false,
                    isError:'',
                    countryFlag:'',
                    weather:{
                      temperature_2m_max:[],
                      temperature_2m_min:[],
                      time:[],
                      weathercode:[]
                    }    
                 };
    this.handleWeather = this.handleWeather.bind(this);
    this.convertToFlag = this.convertToFlag.bind(this);
  }

  convertToFlag = (countryCode:any) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char:any) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  componentDidMount(): void {
    this.handleWeather();
  };

  componentDidUpdate(prevProps: Readonly<ClassyWeatherProps>, prevState: Readonly<ClassyWeatherState>, snapshot?: any): void {
    if(this.state.location !== prevState.location){
      this.handleWeather();
    }
  }

  handleWeather = async () => {

    if(this.state.location.length < 3)
    {
      this.setState({weather:{
        temperature_2m_max:[],
        temperature_2m_min:[],
        time:[],
        weathercode:[]
      }});
      return;
    }

    try {
      // 1) Getting location (geocoding)
      this.setState({isLoading:true});
      this.setState({isError:''});
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
  
      if (!geoData.results) 
        throw new Error("Location not found");
  
      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      this.setState({countryFlag:`${name} ${this.convertToFlag(country_code)}`});
  
      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({weather:weatherData.daily});

    } catch (err:any) {
      this.setState({isError:err.message});
    } finally{
      this.setState({isLoading:false});
    }
  }

  setLocation = (event:string) => {
    this.setState({location:event})
  }

  render():React.ReactNode{

    const {location} = this.state;
    const {isLoading} = this.state;
    const {isError} = this.state;
    // const {countryFlag} = this.state;
    const {weather} = this.state;

    return(
      <div className="app">
          <h1>Classy Weather</h1>
          <Input location={location} onChange={this.setLocation}/>
          {/* <button onClick={this.handleWeather}>Get Weather</button> */}
          {/* <p>{countryFlag}</p> */}
          { isLoading && <p>Loading...</p>}
          { !isLoading && isError !== '' && <p>{isError}</p>}
          { weather.weathercode.length > 0 && !isLoading && !isError && <Weather weather={weather}/>}
      </div>
    )
  }
}

interface InputProps{
  location:string,
  onChange:(value:string) => void
}

class Input extends React.Component<InputProps>{
  render(){

    const{location,onChange} = this.props;

    return(
      <input type="text" 
              value={location} 
              placeholder="Enter location"
              onChange={(event)=>onChange(event.target.value)}/>
    )
  }
}

interface WeatherProps{
  weather:WeatherModel
}

class Weather extends React.Component<WeatherProps>{
  render(): React.ReactNode {

    const {weather} = this.props;
    const {temperature_2m_max:max,temperature_2m_min:min,time,weathercode:codes} = weather;

    return(
      <div>
        {
          codes.length > 0 ? 
          <div className="weather">
            {
              codes?.map((code:number,index:number)=>{
                return(
                  <Days key={index} index={index} code={code ?? 0} maxWeather={max.at(index) ?? 0} minWeather={min.at(index) ?? 0} time={time.at(0) ?? ''} toDay={index === 0}/>
                  )
                })
              } 
           </div> : <></>
        }
      </div>
    )
  }
}
