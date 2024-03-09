import React from "react";
import './Day.css';

interface DayProps{
    code:number,
    maxWeather:number,
    minWeather:number,
    time:string,
    toDay:boolean,
    index:number
  }
  
export default class Days extends React.Component<DayProps>{


    formatDay = (dateStr:any,index:number) => {
        dateStr = new Date(dateStr);
        dateStr.setDate(dateStr.getDate() + index);
        return (new Intl.DateTimeFormat("en", {
        weekday: "short",
        }).format(new Date(dateStr)));
    }

    getWeatherIcon = (wmoCode:number) => {
        const icons = new Map<number[],string>([
        [[0], "☀️"],
        [[1], "🌤"],
        [[2], "⛅️"],
        [[3], "☁️"],
        [[45, 48], "🌫"],
        [[51, 56, 61, 66, 80], "🌦"],
        [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
        [[71, 73, 75, 77, 85, 86], "🌨"],
        [[95], "🌩"],
        [[96, 99], "⛈"],
        ]);

        const arr = Array.from(icons.keys()).find((key:number[]) => key.includes(wmoCode));
        if (!arr) return "NOT FOUND";
        return icons.get(arr);
    }

    render(): React.ReactNode {

        const{code,maxWeather,minWeather,time,toDay,index} = this.props;
        console.log(time);

        return(
        <div className="day">
            <p style={{fontSize:'2rem'}}>{this.getWeatherIcon(code)}</p>
            <p>{toDay ? 'Today' :this.formatDay(time,index)}</p>
            <p>{Math.ceil(minWeather)} &deg; - {Math.ceil(maxWeather)} &deg;</p>
        </div>
        )
    }
}