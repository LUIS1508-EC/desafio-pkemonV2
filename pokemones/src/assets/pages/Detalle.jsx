import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './card.css'
const URL = "https://pokeapi.co/api/v2/pokemon/"

const Detalle = () => {
    const [pokemon, setPokemon] = useState({})
    const { name } = useParams()


    const getData = async () => {
        try {
            const response = await fetch(URL + name)
            const results = await response.json()
            setPokemon(results)
        }
        catch (error) {
            console.log("NO HAY INFORMACION")

        }
    }

    console.log(pokemon)
    useEffect(() => {
        getData()
    }, [name])

    return (
        <div>
            {pokemon ? (
        <>
            <div>
                <h1 className='text-3xl font-bold uppercase text-center mt-5'>{pokemon.name}</h1>
                <div className='d-flex justify-content-center'>
                    <h3 className="text-align-center text-xl mt-2 uppercase">
                        {""}
                        Tipo(s) :{""}
                    </h3>
                    {pokemon.types ? (
                        pokemon.types.map((type, index) => (
                            <h3
                                className="text-align-center text-xl mt-2 uppercase"
                                key={index}
                            >
                                {index > 0 ? " , " : ""}
                                {type.type.name}
                            </h3>
                        ))
                    ) : (
                        <h3 className="text-align-center">Desconocido</h3>
                    )}
                </div>
                <div className='d-flex justify-content-center'>
                    {pokemon.sprites ? (
                        <img src={pokemon.sprites?.front_default} alt="Imagen Pokemon" width={300} />
                        ) : null}
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    {pokemon.stats && pokemon.stats.map((stat) => (
                        <div className='d-flex justify-cocenter' key={stat.stat.name}>
                            <label className='font-bold'>'{stat.stat.name} : </label>
                            <p>{stat.base_stat}</p>
                        </div>
                    ))}
                </div>
            </div >
        </>
    ) : null}

    </div>
)

}
export default Detalle
