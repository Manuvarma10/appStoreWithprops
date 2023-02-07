import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const OnClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabButtonClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-item">
      <button type="button" onClick={OnClickTab} className={tabButtonClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
