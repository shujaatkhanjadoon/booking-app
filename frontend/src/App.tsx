import { BrowserRouter as Router , Routes, Route} from "react-router-dom"
import { Layout } from "./layouts/Layout"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { Register } from "./pages/Register"

function App() {

  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Layout> <p>Home Page</p> </Layout>} />
        <Route path="/search" element={<Layout> <p>Search Page</p> </Layout>} />
        <Route path="*" element={<Layout> <p>Page not found</p> </Layout>} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={ <Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
