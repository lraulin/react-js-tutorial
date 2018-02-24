import React from 'react'
import { Route } from 'react-router-dom'
import Todos from './Todos'
import Favorites from './Favorites'
import Settings from './Settings'
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
            <Route path='/favorites' component={Favorites} />
            <Route path='/settings' component={Settings} />
            <Route exact path='/' component={Todos} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
