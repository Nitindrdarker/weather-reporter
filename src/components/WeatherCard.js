
import React, { Component } from 'react'

export class WeatherCard extends Component {
  render() {
    return (
        <div className="my-3">
        <div className="card">
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
            }
            }> 
                <span className="badge rounded-pill bg-danger"> 1 </span>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">ca  </h5>
                <p className="card-text">j</p>
            </div>
        </div>
    </div>
    )
  }
}

export default WeatherCard
