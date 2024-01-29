import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../restaurantSlice';


function Header() {
  const dispatch=useDispatch()
  return (
   <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:"none",color:"white"}}>FOOD CIRCLE</Link></Navbar.Brand>
          <input type="text"  className='form-control w-25'
          onChange={(e)=>dispatch(search(e.target.value))}
          />
          <img 
          height="50px"
          width="50px"
          src="https://th.bing.com/th/id/OIP.X4yf8ZgE6IOWxhFxYV-3mQHaHa?rs=1&pid=ImgDetMain" alt="" />
          
        </Container>
      </Navbar>
   </>
  )
}

export default Header