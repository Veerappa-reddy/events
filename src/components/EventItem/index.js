import './index.css'

const EventItem = props => {
  const {itemDetails, onEventClick, itemClicked} = props
  const {registrationStatus, imageUrl, name, location, id} = itemDetails

  const clickEvent = () => {
    onEventClick(registrationStatus, id)
  }

  const imageBorder = itemClicked ? 'img-border' : null

  return (
    <li className="event-container" onClick={clickEvent}>
      <button type="button" className="li-btn">
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${imageBorder}`}
        />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
