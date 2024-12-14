function Food() {
    
    const food1 = "orange"
    const food2 = "banan"
    return(
        // javascript put in {}
        <ul>
            <li>dd</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase}</li>
        </ul>
    );
}

// need to export it (like an object)
export default Food