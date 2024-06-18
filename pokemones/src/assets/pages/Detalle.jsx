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
                    <div className='card'>
                        <h1 className='font3 d-flex justify-content-center card-title'>{pokemon.name}</h1>
                        <div className='d-flex justify-content-center'>
                            <h3 className="text-align-center text-xl mt-2 uppercase">
                                {""}
                                Tipo(s) :{""}
                            </h3>
                            {pokemon.types ? (
                                pokemon.types.map((type, index) => (
                                    <h3
                                        className="text-align-center mt-2 uppercase"
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
                        <card className="d-flex justify-content-center card2 mb-3">
                            <div className='row no-gutters'>
                                <div className='col-md-4 align-self-center'>
                                    {pokemon.sprites ? (
                                        <img src={pokemon.sprites?.front_default} className='card-img size' alt="Imagen Pokemon" />
                                    ) : null}
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body state'>
                                        {pokemon.stats && pokemon.stats.map((stat) => (
                                            <div className='d-flex' key={stat.stat.name}>
                                                <label className='font'>{stat.stat.name} : </label>
                                                <p className='font2'>{stat.base_stat}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </card>
                    </div >
                </>
            ) : null}

        </div>
    )

}
export default Detalle
