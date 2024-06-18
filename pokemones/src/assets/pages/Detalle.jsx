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
<<<<<<< HEAD
        <div>
            {pokemon ? (
                <>
                    <div className='card'>
                        <h1 className='text-transform-capitalize d-flex justify-content-center card-title'>{pokemon.name}</h1>
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
=======

        <div className='p-4 d-flex justify-content-center'>
            {pokemon ? (
                <>
                    <card className="card mb3 card2">
                        <div className='row'>
                            <div className='col-md-4 image'>
                                {pokemon.sprites ? (
                                    <img src={pokemon.sprites?.front_default} alt="Imagen Pokemon" width={300} />
                                ) : null}
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className='card-title'>{pokemon.name}</h1>
                                    <div>
                                        <h5>
                                            Tipo : {pokemon.types ? (
                                            pokemon.types.map((type, index) => (
                                                <p
                                                    key={index}
                                                >
                                                    {index > 0 ? " , " : ""}
                                                    {type.type.name}
                                                </p>
                                            ))
                                        ) : (
                                            <h3>Desconocido</h3>
                                        )}
                                        </h5>

                                        
                                    </div>
                                    <div className='p-5 m-4'>
                                        {pokemon.stats && pokemon.stats.map((stat) => (
                                            <div className='d-flex' key={stat.stat.name}>
                                                <label className='font-bold'>'{stat.stat.name} : </label>
                                                <p>{stat.base_stat}</p>
                                            </div>
                                        ))}
                                    </div>
                                                                      

                                </div>
                            </div >
                        </div>
                    </card>
                </>
            ) : null}

        </div>

>>>>>>> 0bf054e67603d233d3cb901dda6fbb29f157f342
    )

}
export default Detalle
