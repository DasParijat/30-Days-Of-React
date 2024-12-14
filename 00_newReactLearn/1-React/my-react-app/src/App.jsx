// importing components
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import Card from './Card.jsx'

function App() {
    
    return (
      // need <> to use multiple components
      <> 
        <Header/>
        <Card/>
        <Food/>
        <Footer/>
      </>
    )
}

export default App
