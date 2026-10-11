import { useEffect, useState } from 'react'

type Show = {
    id: number
    venue: string
    city: string
    date: string
}



function Shows() {

    const [shows, setShows] = useState<Show[]>([])

    const formatShowDate = (date: string) => {

        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            timeZone: "UTC"
        })
    }

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
                                <p className="showDate"> {formatShowDate(show.date)}</p>
                                <a className="showTicketLink" href="#">Get Tickets ↗ </a>
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