import React, { useEffect, useState } from 'react'
import Slider from './Slider'

const API = () => {
    const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=30"
    const [ allPokemon, setAllPokemon ] = useState([])
    const [ pokemons, setPokemon ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ detailPokemonData, setDetailPokemonData ] = useState([])

    const fetchDataFromURL = async (url) => {
        return await new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    return resolve(res.json())
                })
                // .then((data) => {
                //     return resolve(data)
                // })
            .catch((error) => {
                reject(error)
            })
        })

    }

    const fetchPokemonData = async (data) => {
        let monsters = []
        for (let i = 0; i < data.results.length; i++) {
            let monster = await fetchDataFromURL(data.results[i].url)
            monsters.push(monster)
        }
        return monsters
    }

    const fetchPokemonDetail = async (data) => {
        let details = []
        for (let i = 0; i < data.results.length; i++) {
            let detail = await fetchDataFromURL(`https://pokeapi.co/api/v2/pokemon-species/${data.results[i].name}`)
            details.push(detail)
        }
        return details
        
    }


    const setUp = async () => {
        let data = await fetchDataFromURL(initialURL)
        setAllPokemon(data)

        
        let details = await fetchPokemonDetail(data)
        setDetailPokemonData(details)

        console.log(details)

        let eachPokemon = await fetchPokemonData(data)
        setPokemon(eachPokemon)

        console.log(eachPokemon)

        setLoading(false)
        
    }

    useEffect(() => {
        setUp()
    }, [ ])
    
  return (
    <div>
        { loading ? (<>
            ローディング
        </>) : (<>
            <Slider pokemons={ pokemons } detailPokemonData={ detailPokemonData } />
        </>)
        }

    </div>
  )
}

export default API