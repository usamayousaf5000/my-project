import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { AppSidebar } from './SideBar'

const SeeAll = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <div style={{backgroundColor: 'black' ,display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-start'}}>
        <div style={{width: '30%',backgroundColor: 'black'}}>
          {/* <AppSidebar /> */}
        </div>
        <div style={{width: '70%', backgroundColor:'black'}}>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt quasi esse est officiis similique, at, provident accusamus, cupiditate eaque commodi omnis. Aliquid magnam mollitia dolore iusto id dicta nam.</p> */}
        </div>

      </div>
      {/* <Footer/> */}
      {/* <Sidebar/> */}
    </>
  )
}

export default SeeAll
