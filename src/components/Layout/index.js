// Write your code here
import {Component} from 'react'

import Header from '../Header'

import Footer from '../Footer'

import Body from '../Body'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Layout extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showLeftNavbar, showContent, showRightNavbar} = value

          return (
            <div className="layout-background">
              <Header />
              <Body />
              <Footer />
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Layout
