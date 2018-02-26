import React from 'react'
import { Route } from 'react-router-dom'
import Resume from './Resume'
import Projects from './Projects'
import Bio from './Bio'
import CodeSchool from './CodeSchool'
import Nav from '../components/Layout/Nav'
import Footer from '../components/Layout/Footer'

// import Bootstrap from "../vendor/bootstrap-without-jquery.js"

export default class Layout extends React.Component {
  render () {
    console.log(this.props)
    const { location } = this.props

    const containerStyle = {
      marginTop: '60px'
    }
    return (
      <div>
        <Nav location={location} />
        <div className='container' style={containerStyle}>
          <div>
            <Route path='/projects' component={Projects} />
            <Route path='/bio' component={Bio} />
            <Route path='/codeschool' component={CodeSchool} />
            <Route exact path='/' component={Resume} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
