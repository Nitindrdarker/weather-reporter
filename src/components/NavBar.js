
import React, { Component } from 'react'

export class NavBar extends Component {

  render() {
    return (
      <nav className={this.props.light === 1 ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Weather Reporter</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={()=>this.props.toggleMode()} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" style={{color:this.props.light ? 'black':'white'}} htmlFor="flexSwitchCheckDefault">Switch to dark</label>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
