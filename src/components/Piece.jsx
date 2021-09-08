import React, {useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Piece = ({data}) => {

    const [isOpen, setisOpen] = useState(false);

    const toggleThing = () => {
        setisOpen(!isOpen)
    }

    return (
        <div key={data. id} className={'piece'}>
            <button onClick={toggleThing}>
                {(isOpen) ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            <h1>{data.question}</h1>
            <br className={`content${(isOpen) ? '' : ' Open'}`} />
            <p className={`content${(isOpen) ? '' : ' Open'}`}>{data.content}</p>
        </div>
    )
}

export default Piece
