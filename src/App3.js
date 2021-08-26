import React, { useEffect, useState } from 'react'
import Input from './components/Input'


// let BASE_URL = 'https://www.breakingbadapi.com/api/characters'
let BASE_URL = 'https://randomuser.me/api/'


function App3() {

    const [users, setUsers] = useState(undefined)
    const [pointer, setPointer] = useState(0)
    const [query, setQuery] = useState('')


    function getQuery(e) {
        setQuery(e)
    }

    // Fetch function
    // function fetchUsers() {
    //     let users = fetch(`${BASE_URL}?name=${query}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         let usersArr = []
    //         data.forEach(data => {
    //             let obj = {name: data.name, img: data.img}
    //             usersArr.push(obj)
    //         })
    //         return usersArr
    //     })
    //     return users
    // }

    // useEffect(() => {
    //     fetchUsers().then(user => {
    //         setUsers(user)
    //     })
    // }, [query])

    // Fetch Users
    const fetchUsers = () => {
            const res = fetch(BASE_URL)

            const data = res.json()
    
            return data.results[0]
    }

    useEffect(() => {

   
    }, [])



    // console.log(query)

    return(
        <React.Fragment>
            <div className="homepage__container">
                <Input getQuery={getQuery} />
                {/* <div className="slider">
                    <button id="left" className="slider__button" onClick={handleClick}>left</button>
                    <div className="slider__info">
                        <img className="slider__img" src={imgUrl}/>
                        <p className="name">{name}</p>
                    </div>
                    <button id="right" className="slider__button" onClick={handleClick}>right</button>
                </div> */}
                <div className="character-grid">
                    {/* { users ? (
                        users.map( indUser => {
                            return <div className="character-grid__card">
                                        <img src={indUser.img} />
                                        <p>{indUser.name}</p>
                                   </div>
                        })
                    ) : (
                        ''
                    )} */}
                </div>
            </div>

        </React.Fragment>
    )

}



export default App3