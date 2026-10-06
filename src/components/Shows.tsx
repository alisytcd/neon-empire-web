import { useEffect, useState } from 'react'

type Show = {
    id: number
    venue: string
    city: string
    date: string
}



function Shows() {

    const [shows, setShows] = useState<Show[]>([])

    useEffect(() => {

        async function fetchShows() {

            const response = await fetch('/content/shows')
            const data = await response.json()

            setShows(data)
        }

        fetchShows()

    }, [])


    return (
        <div className="shows">

            <h2 className="showsHeading">Upcoming Shows</h2>

            <div className="showsList">
                {
                    shows.map((show) => {
                        return (
                            <div className="show" key={show.id}>
                                <p className="showVenue"> {show.venue} </p>
                                <p className="showCity"> {show.city} </p>
                                <p className="showDate"> {show.date}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Shows