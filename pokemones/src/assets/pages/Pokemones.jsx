import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = "https://pokeapi.co/api/v2/pokemon"
function Pokemones() {
    const [pokemones, setPokemones] = useState([])
    const [name, setName] = useState([])
    const navigate = useNavigate()
    const getData = async () => {
        try {
            const response = await fetch(URL)
            const { results } = await response.json()
            setPokemones(results)
        }
        catch (error) {
            console.log("NO HAY INFORMACION")

        }
    }

    useEffect(() => {
        getData()

    }, [])
    return (
        <>
            <select value={name} onChange={(e) => setName(e.target.value)}>
                <option value="" disabled defaultValue>Selecciona tu Pokemon</option>
                {
                pokemones.map(({ name }) => <option key={name} value={name}>{name}</option>)
                }

            </select>
            <button onClick={() => navigate(`/pokemones/${name}`)}>Ver Pokemon</button>
        </>
    )
}

export default Pokemones