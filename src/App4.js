import React, {useState, useEffect} from 'react'

const checkMark = '&#10004;'
const crossMark = '&#x2717;'


function App4() {

    const [pwValue, setPwValue] = useState('')
    const [pwReq, setPwReq] = useState({
        pwLength: false,
        pwUppercase: false,
        pwInt: false
    })
    const [allPass, setAllPass] = useState(false)

    function handlePWChange(e) {
        let newPwValue = e.target.value

    }

    // function checkPwReqMet(newPwValue) {
        
    //     let ch
        
    //     for(var i = 0; i < newPwValue.length; i++) {
    //         ch = newPwValue.charAt(i)
    //         console.log(isUpperCase(ch))
    //     }

    // }

    // Check if all pw requirments are met
    // function isAllReqMet() {
    //     let result = true
    //     for(var i in pwReq) {
    //         if(!(pwReq[i])) {
    //             result = false
    //             break
    //         }
    //     }
    //     return result
    // }

    useEffect(() =>{

        setPwReq({
            ...pwReq,
            pwLength: true,
            pwUppercase: true
        })

    }, [])


 
    return(
        <React.Fragment>
            <div className="homepage">
                <h1 className="title">Password</h1>

                <div className="password__container">

                    <form className="password__form">
                        <div>
                            <label for="password">Password: </label>
                            <input class="password__input" type="password" name="password" onChange={handlePWChange}></input>
                        </div>
                    </form>

                    <div className="password__valiblock">
                        <div className="item">
                            <p className={`text ${pwReq.pwLength ? 'green' : ''}`}>Password must be at least 8 characters</p>
                        </div>
                        <div className="item">
                            <p className={`text ${pwReq.pwUppercase ? 'green' : ''}`}>Password must contain 1 uppercase character</p>
                        </div>
                        <div className="item">
                            <p className={`text ${pwReq.pwInt ? 'green' : ''}`}>Password must contain 1 number</p>
                        </div>
                    </div>

                    <button className={`password__button ${allPass ? 'green' : ''}`} disabled={!allPass}>Confirm</button>

                </div>

            </div>
        </React.Fragment>
    )

}

export default App4