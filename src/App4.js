import React, {useState, useEffect} from 'react'

const checkMark = '&#10004;'
const crossMark = '&#x2717;'



function App4() {
    // const pw = useRef(null);
    // const [pwValue, setPwValue] = useState('')
    const [pwReq, setPwReq] = useState({
        pwLength: false,
        pwUppercase: false,
        pwInt: false
    })
    const allPass = pwReq.pwLength && pwReq.pwUppercase && pwReq.pwInt;

    let pwIntRegex = /\d/
    let pwCaseRegex = /[A-Z]/
    // let pwLength = pwValue.length

    function handlePWChange(e) {
        const value =  e.target.value;
        setPwReq({
            ...pwReq,
            pwLength: value.length >= 8,
            pwUppercase: pwCaseRegex.test(value),
            pwInt: pwIntRegex.test(value)        
        })
    }

    const debouncedHandlePwChange = debounce(handlePWChange, 500);

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function handleSubmit(e) {
        e.preventDefault()
    }

    // useEffect(() =>{
        
    //     if(pwIntRegex.test(pwValue)) {
    //         setPwReq({
    //             ...pwReq,
    //             pwInt: true
    //         })
    //     } else if(pwCaseRegex.test(pwValue)) {
    //         setPwReq({
    //             ...pwReq,
    //             pwUppercase: true
    //         })
    //     } else if (pwLength >= 8) {
    //         setPwReq({
    //             ...pwReq,
    //             pwLength: true
    //         })
    //     }

    //     if(!Object.values(pwReq).includes(false)) setAllPass(true)


    //     console.log(pwReq)

    // }, [pwValue])

    console.log('re-rendered')
 
    return(
        <React.Fragment>
            <div className="homepage">
                <h1 className="title">Password</h1>

                <div className="password__container">

                    <form className="password__form" onSubmit={handleSubmit}>
                        <div>
                            <label for="password">Password: </label>
                            <input class="password__input" type="password" name="password" onChange={debouncedHandlePwChange}></input>
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