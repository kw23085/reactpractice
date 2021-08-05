import React, {useState} from 'react'

function Input({ getQuery }) {

    const [inputVal, setInputVal] = useState('')
    
    function handleOnChange(e) {
        setInputVal(e.target.value)
        getQuery(e.target.value)
    }

    return (
        <div className="search">
            <form>
                <input 
                    type="text"
                    className="slider__filter"
                    placeholder="Search Characters"
                    onChange={handleOnChange}
                    value={inputVal}
                    autoFocus
                ></input>
            </form>
        </div>
    )
}

export default Input
