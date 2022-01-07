// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showContent,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      const onChangingContentCheckbox = () => {
        onToggleShowContent()
      }
      const onChangingRightNavCheckbox = () => {
        onToggleShowRightNavbar()
      }
      const onChangingLeftNavCheckbox = () => {
        onToggleShowLeftNavbar()
      }
      return (
        <div className="config-control-background">
          <h1 className="heading-style">LayOut</h1>
          <div>
            <input
              onChange={onChangingContentCheckbox}
              id="content"
              type="checkbox"
              defaultChecked={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              onChange={onChangingLeftNavCheckbox}
              id="Left Navbar"
              type="checkbox"
              defaultChecked={showLeftNavbar}
            />
            <label htmlFor="Left Navbar">Left Navbar</label>
          </div>
          <div>
            <input
              onChange={onChangingRightNavCheckbox}
              id="Right Navbar"
              type="checkbox"
              defaultChecked={showRightNavbar}
            />
            <label htmlFor="Right Navbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
