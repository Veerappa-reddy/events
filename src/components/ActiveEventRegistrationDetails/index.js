// import {Component} from 'react'

// const activeEventsStatus = {
//   initial: 'INITIAL',
//   yetToRegister: 'YET TO REGISTER',
//   registered: 'REGISTERED',
//   registrationClosed: 'REGISTRATION CLOSED',
// }

// class ActiveEventRegistrationDetails extends Component{
//     state = {status:activeEventsStatus.initial}
//     render(){
//         co
//         switch ()
//     }
// }
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props

  const initialDetails = () => (
    <div className="yet-register-container-1">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const yetToRegister = () => (
    <div className="yet-register-container-1">
      <div className="yet-register-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-register-img"
        />
        <p>A live performance brings so much to your relationship with dance</p>
        <button type="button" className="btn">
          Register Here
        </button>
      </div>
    </div>
  )

  const registered = () => (
    <div className="yet-register-container-1">
      <div className="yet-register-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="register"
        />
        <h1>You have already registered for the event</h1>
      </div>
    </div>
  )

  const registrationClosed = () => (
    <div className="yet-register-container-1">
      <div className="yet-register-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt=" registrations closed"
          className="already-user-image"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen</p>
      </div>
    </div>
  )

  switch (activeEvent) {
    case 'INITIAL':
      return initialDetails()
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTERED':
      return registered()
    case 'REGISTRATIONS_CLOSED':
      return registrationClosed()
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
