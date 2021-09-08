import React from 'react'
import data from './data'
import '../styles/styles.css'
import Piece from '../components/Piece';

const App = () => {

    return (
        <div>
            {
                data.map((accordion) => {
                    return (
                        <Piece key={accordion.id} data={accordion}/>
                    )
                })
            }
        </div>
    )
}

export default App
