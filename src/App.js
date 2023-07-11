import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



import HomePage from "./Components/HomePage"
import Navbar from "./Components/Navbar"
import CustomSoftware from "./Components/CustomSoftware"

// import About from "./components/about/About"
// import CourseHome from "./components/allcourses/CourseHome"
// import Team from "./components/team/Team"
// import Pricing from "./components/pricing/Pricing"
// import Blog from "./components/blog/Blog"
// import Contact from "./components/contact/Contact"
// import Footer from "./components/common/footer/Footer"

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/customsoftware" exact component={CustomSoftware}/>
     
          
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App