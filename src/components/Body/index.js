// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value

      return (
        <div className="body-background">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1>Right Navbar</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
