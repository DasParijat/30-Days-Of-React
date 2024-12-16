import PropTypes from 'prop-types';

function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>
                            
    const loginPrompt = <h2 className="login-prompt">
                         log in fool
                        </h2>

    return(props.isLoggedIn ? welcomeMessage 
                            : loginPrompt)
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "fake one"
}

export default UserGreeting