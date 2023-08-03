import axios from 'axios';
import {useEffect} from 'react';
import Pokemon from '../Pokemon/Pokemon.jsx'
function Pokelist(){
    const [pokemonlist,setpokemonlist]=usestate([]);
    const [isloading,setloading]=useState(true);
    async function Downloadpokemon(){
        const response=await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonResults=response.data.results;
        const pokemonPromise=pokenmonResults.map((pokenmon)=>axios.get(pokemon.url));
        const pokemondata=await axios.all(pokenmonPromise);
        console.log(pokemondata);
        const res=pokenmondata.map((pokenmon)=>{
            const pokemon=pokenmon.data;
            return{
                name:pokemon.name,
                image:pokenmonData.sprites.other.dream_world.front_default,
                types:pokenmon.types,

            }

        })
        console.log(res);
        setpokemonlist(res);

    }
    useEffect(()=>{
        Downloadpokemon();
        setloading(false);

    },[])
    return (
        <div className="pokemon-wrapper">
            Pokemonlist
            {(isloading)?'loading...':pokemonlist.map((p)=><Pokenmon name={name} image={image}/>)}

        </div>
    )

}
export default Pokelist;