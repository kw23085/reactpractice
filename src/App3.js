import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function App3() {

    let competitions = [
        ['HTML', 'c#'],
        ['c#', 'Python'],
        ['Python', 'HTML']
    ]

    let results = [0, 0, 1]

    function tourneyWinner(competitions, results) {

        let HOME_TEAM_WON = 1

        let currentBestTeam = ''

        let scores = {[currentBestTeam]: 0}

        for(let i = 0; i < results.length; i++) {
            
            let result = results[i]

            let [homeTeam, awayTeam] = competitions[i]

            let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

            updateScore(scores, winningTeam, 3)

            if(scores[winningTeam] > scores[currentBestTeam]) {
                currentBestTeam = winningTeam
            }

        }

        return currentBestTeam
        
        function updateScore(scores, team, points) {

            if(!(team in scores)) {
                scores[team] = 0
            }

            scores[team] += points


        }


    }

    console.log(tourneyWinner(competitions, results))




    return(
        <React.Fragment>
            <div className="app3-header">
                <fieldset>
                    <legend>Hi</legend>
                </fieldset>
            </div>
        </React.Fragment>
    )

}



export default App3