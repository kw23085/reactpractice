import React, { useState, useEffect } from 'react'

function App5() {


    const [pointer, setPointer] = useState(0)


    const changeLight = () => {
        setPointer(prv => prv += 1)
    }


    useEffect(() => {

        if(pointer < 3) {

            let interval = setInterval(() => {

                changeLight()
        
            }, 2000)
    
            return () => clearInterval(interval)

        } else {
            
            setPointer(0)

        }

    }, [pointer])

    return (
        <React.Fragment>
            <p>{pointer === 0 ? 'state is 0' : 'bye'}</p>
            <p>{pointer === 1 ? 'state is 1' : 'bye'}</p>
            <p>{pointer === 2 ? 'state is 2' : 'bye'}</p>
        </React.Fragment>
    )
}

export default App5
