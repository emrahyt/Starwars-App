import React from 'react'
import List from './List'
import Navbar from '../common/navbar'
import Header from '../common/header'



const StarShips = () => {
    return(
        <div>
            <Navbar />
            <Header content='Starships' />
            <List content='starships' />            
        </div>
    )
}

export default StarShips