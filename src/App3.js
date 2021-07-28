import React from 'react'

function App3() {

    const arr = [0, 1, 2, 3, 4]

    const gg = [...Array(6)]

    gg.map( (s, i) => {
        console.log('this is nice at ' + i)
    })

    // console.log(gg)

    return(
        <React.Fragment>
            <div className="app3-header">
                <h1 className="app3-title">App3</h1>
            </div>
        </React.Fragment>
    )

}





export default App3