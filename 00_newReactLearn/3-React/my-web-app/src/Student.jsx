import PropTypes from 'prop-types'

function Student(props) {
    return(
        // props.isStudent ? "Y" : "N" is a ternary operator
        // like a simple if true (?) then "Y", else "N"
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Y" : "N"}</p>
        </div>
    );
}

// ensures data passes in correctly
// issues a warning
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// default props / default value if none given
Student.defaultProps = {
    name: "gguest",
    age: 0,
    isStudent: false
}
export default Student