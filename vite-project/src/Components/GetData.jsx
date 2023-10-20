import React, { useState } from 'react'
import axios from 'axios'

const GetData = () => {
    const [srno, setSrno] = useState("")
    const [name, setName] = useState("")
    const [aadharNo, setAadharNo] = useState("")
    const [game, setGame] = useState("")
    const [ageGrp, setAgeGrp] = useState("")
    const [position, setPosition] = useState("")
    const [state, setState] = useState("")
    const [tournamentName, setTournamentName] = useState("")
    const [organisedAt, setOrganisedAt] = useState("")
    const [venue, setVenue] = useState("")


    const [showData, setShowData] = useState("")

    return (
        <>
            <div className="searchPlayer">
                <input type="number" placeholder='search player by aadhar number' />
                <button id="search">Search</button>

            </div>
            <div>
                {showData && (
                    <form>
                        <label htmlFor="">Srno</label>
                        <input disabled type="text" value={srno} />


                        <label htmlFor="">Name</label>
                        <input disabled type="text" value={Name} />

                        <label htmlFor="">AadharNo</label>
                        <input disabled type="text" value={aadharNo} />


                        <label htmlFor="">Game</label>
                        <input disabled type="text" value={game} />

                        <label htmlFor="">AgeGrp</label>
                        <input disabled type="text" value={ageGrp} />

                        <label htmlFor="">Position</label>
                        <input disabled type="text" value={position} />

                        <label htmlFor="">State</label>
                        <input disabled type="text" value={state} />

                        <label htmlFor=""> TournamentName</label>
                        <input disabled type="text" value={tournamentName} />

                        <label htmlFor="">OrganisedAt</label>
                        <input disabled type="text" value={organisedAt} />

                        <label htmlFor="">Venue</label>
                        <input disabled type="text" value={venue} />

                    </form>
                )}
            </div>

        </>
    )
}

export default GetData