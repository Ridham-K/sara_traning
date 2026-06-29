import Profile from './components/Profile/Profile.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Products from './components/Products/Products.jsx'
import { Card }  from './components/Products/Products.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <div className="main-content">
        <Sidebar />
        <Profile />
      </div>
      <div className='height'> 

      </div>
      <Products 
      name="Laptop"
      price={20000}
      />

      <Products 
      name="Mobile"
      price={25000}
      />

      <Products />

      <Card>
        <h1>Laptop</h1>
        <p>Price: 50000</p>
      </Card>

      <Card>
        <h1>Mobile</h1>
        <p>Price: 20000</p>
      </Card>

      <Footer />
    </>
  )
}

export default App

{/* <h3>Hello, {name}</h3>
    <h3>{10 * 5}</h3>
    <h3>{greet()}</h3> */}