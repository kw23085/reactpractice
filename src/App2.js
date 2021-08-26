import React, { useState, useContext } from 'react'

// Context Provider
// const TestContext = React.createContext()


// function TestContextProvider({ children }) {

//     function consoleLog() {
//         console.log('it worked')
//     }

//     const providerValues = {
//         consoleLog
//     }

//     return(

//         <TestContext.Provider value={ providerValues }>
//             {children}
//         </TestContext.Provider>

//     )

// }

// const useTestContext = () => {
//     const context = useContext(TestContext)
//     return context
// }

const ClickContext = React.createContext()

function ClickContextProvider({ children }) {

    function consoleLog() {
        console.log('it worked bro')
    }

    const providerValues = {
        consoleLog
    }

    return (
        <ClickContext.Provider value={providerValues}>
            {children}
        </ClickContext.Provider>
    )

}

const useClickContext = () => {

    const context = useContext(ClickContext)

    return context

}

// Main App
function App2() {


    const [currentTab, setCurrentTab] = useState('company')


    // Handle Click
    function handleClick(e) {
        setCurrentTab(e.target.id)
    }

    console.log(currentTab)
    
    return(

        <React.Fragment>
            <div className="practice-container">
                <h1 className="title">Rivian Tabs</h1>
                <div className="content-container">
                    <ClickContextProvider>
                        <SideMenu handleClick={handleClick} />
                        <Content currentTab={currentTab} />
                    </ClickContextProvider>
                </div>
            </div>
        </React.Fragment>

    )
}

// SideMenu
function SideMenu({ handleClick }) {

    const { consoleLog } = useClickContext()

    let tabsArr = [
        {
            id: 0,
            tabText: 'Company',
            type: 'company'
        },
        {
            id: 1,
            tabText: 'Products',
            type: 'products'
        },
        {
            id: 0,
            tabText: 'Preordering & Ownership',
            type: 'preordering'
        }
    ]

    return(

        <aside className="side-menu">
            {
                tabsArr.map( tab => {
                    return <Tab handleClick={handleClick} tabText={tab.tabText} type={tab.type} />
                })
            }
            <button onClick={consoleLog}>click</button>
        </aside>

    )

}

// Right Content
function Content({ currentTab }) {

    let displayContent = {
        company: {
            title: 'Company',
            content: <video controls src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"></video>,
            description: undefined
        },
        products: {
            title: 'Products',
            content: <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" />,
            description: 'Products What’s an Electric Adventure Vehicle anyway? EAVs are trucks and SUVs designed and engineered to go where most vehicles can’t go — that means steeper grades, through water and over challenging terrain.'
        },
        preordering: {
            title: 'Preordering & Ownership',
            content: undefined,
            description: 'Yes. For those in the USA, Canada and Mexico, a $1,000 fully refundable deposit will hold your place in line.'
        }
    }

    let actualDisplayContent
    
    if(displayContent[currentTab]) {
        actualDisplayContent = displayContent[currentTab]
    } else {
        actualDisplayContent = displayContent['company']
    }

    return(
        <div className="right-content">
            <h2 className="title">{actualDisplayContent.title}</h2>
            <div className="content">
                {actualDisplayContent.content}
            </div>
            <p className="description">{actualDisplayContent.description}</p>

        </div>
    )
}

// Tabs
function Tab({ tabText, handleClick, type }) {
    return(
        <button id={type} className='tab' onClick={handleClick}>
            {tabText}
        </button>
    )
}


export default App2