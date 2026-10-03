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
        <div>
            <h2>Upcoming Shows</h2>
            <div>
                {
                    shows.map((show) => {
                        return (
                            <div key={show.id}>
                                <p> {show.venue} , {show.city} </p>
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