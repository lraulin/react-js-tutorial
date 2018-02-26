import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      collapsed: true
    }
  }
  toggleClass () {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  render () {
    const { collapsed } = this.state
    const { pathname } = this.props.location
    const navClass = collapsed ? 'collapse' : ''
    const resumeClass = pathname === '/' ? 'active' : ''
    const projectsClass = pathname.match(/^\/projects/) ? 'active' : ''
    const bioClass = pathname.match(/^\/bio/) ? 'active' : ''
    const codeSchoolClass = pathname.match(/^\/codeschool/) ? 'active' : ''
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' onClick={this.toggleClass.bind(this)} data-toggle='collapse' data-target='#navbarContent' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          </div>
          <div className={'navbar-collapse ' + navClass} id='navbarContent'>
            <ul className='nav navbar-nav'>
              <li className={resumeClass}><NavLink to='/' onClick={this.toggleClass.bind(this)}>Resume</NavLink></li>
              <li className={projectsClass}><NavLink to='/projects' onClick={this.toggleClass.bind(this)}>Projects</NavLink></li>
              <li className={bioClass}><NavLink to='/bio' onClick={this.toggleClass.bind(this)}>Bio</NavLink></li>
              <li className={codeSchoolClass}><NavLink to='/codeschool' onClick={this.toggleClass.bind(this)}>CodeSchool</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
