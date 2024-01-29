import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../restaurantSlice';

function Home() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])
  const allRestaurant=useSelector((state)=>state.restaurantSlice.allRestaurant.restaurants)
  console.log("gfgfhh")
  console.log(allRestaurant)
  return (
   <>
   <Row>{
    allRestaurant?.length>0?
    allRestaurant.map((restaurant)=>(
      <Col className='px-5 py-3 ' sm={6} md={4} lg={4}>
      <Restcard restaurant={restaurant}/>

    </Col>

    )):
    <p>No restaurant found</p>
    }
    
   </Row>
   </>
  )
}

export default Home