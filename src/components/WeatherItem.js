

import React, { Component } from 'react'

export class WeatherItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles:[]
        };
        this.countryList = [
            "india",
            "pakistan",
            "united state",
            "china",
            "russia",
            "sri lanka",
            "canada",
            "iran",
            "nepal",
        ];
    
    }
       
    getWeather = async ()=>{
        for (let country of this.countryList){
            const url = `http://api.weatherapi.com/v1/current.json?key=38ba52045d5f41bc8bc81128220703&q=${country}&aqi=no`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({articles:this.state.articles.concat(parsedData)})
        }
        
    }
    async componentDidMount(){
        this.getWeather()
    }
   
  render() {
    return (
        <>
        {this.state.articles.map((ele) => {
            return <div className="my-3" key={ele.location.name}>
            <div className={this.props.light === 1?"card bg-white mb-3":"card text-white bg-secondary mb-3"}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0',
                    backgroundColor:'black'
                }}> 
            
                </div>
                <div className="card-body">
                <h5 className="card-title">{ele.location.country} - {ele.location.region}</h5>
                    <h5 className="card-text">{ele.current.temp_c} degree cel  </h5>
                    <p className="card-text">Date Updated:{ele.current.last_updated}</p>
                    <p className="card-text">Humidity:{ele.current.humidity}%</p>    
                    <img src={ele.current.condition.icon} alt="" />
                </div>
            </div>
        </div>
        })}
    </>
    )
  }
}

export default WeatherItem



                    