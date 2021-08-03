import React, { useEffect, useState } from 'react'


let BASE_URL = 'https://www.breakingbadapi.com/api/characters'


function App3() {

    const [users, setUsers] = useState(undefined)
    const [pointer, setPointer] = useState(0)

    function handleClick(e) {
        let btnClicked = e.target.id
        let userLength = users.length

        if(btnClicked === 'left' && pointer > 0) {
            console.log('left')
            setPointer(prev => prev + 1)
        } else if(btnClicked === 'right' && pointer < userLength) {
            console.log('right')
            setPointer(prev => prev - 1)
        }
    }

    async function fetchUsers() {
        let users = await fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            let usersArr = []
            data.forEach(data => {
                let obj = {}
                obj.name = data.name
                obj.img = data.img
                usersArr.push(obj)
            })
            return usersArr
        })
        return users
    }

    useEffect(() => {
        fetchUsers().then(user => {
            setUsers(user)
        })
    }, [])

    console.log(pointer)

    return(
        <React.Fragment>
            <div className="homepage__container">
                <div className="slider">
                    <button id="left" className="slider__button" onClick={handleClick}>left</button>
                    <div className="slider__info">
                        <img className="slider__img" src='' />
                        <p className="name">test</p>
                    </div>
                    <button id="right" className="slider__button" onClick={handleClick}>right</button>
                </div>
            </div>

        </React.Fragment>
    )

}



export default App3