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

    let pwIntRegex = /\d/
    let pwCaseRegex = /[A-Z]/
    let pwLength = pwValue.length

    function handlePWChange(e) {
        setPwValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    useEffect(() =>{
        
        if(pwIntRegex.test(pwValue)) {
            setPwReq({
                ...pwReq,
                pwInt: true
            })
        } else if(pwCaseRegex.test(pwValue)) {
            setPwReq({
                ...pwReq,
                pwUppercase: true
            })
        } else if (pwLength >= 8) {
            setPwReq({
                ...pwReq,
                pwLength: true
            })
        }

        if(!Object.values(pwReq).includes(false)) setAllPass(true)


        console.log(pwReq)

    }, [pwValue])


 
    return(
        <React.Fragment>
            <div className="homepage">
                <h1 className="title">Password</h1>

                <div className="password__container">

                    <form className="password__form" onSubmit={handleSubmit}>
                        <div>
                            <label for="password">Password: </label>
                            <input class="password__input" type="password" name="password" value={pwValue} onChange={handlePWChange}></input>
                        </div>
                        <button type="submit" className={`password__button ${allPass ? 'green' : ''}`} disabled={!allPass}>Confirm</button>
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

                </div>

            </div>
        </React.Fragment>
    )

}

export default App4