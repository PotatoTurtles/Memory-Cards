import { useEffect, useState } from "react";

export default function Cards({val,setVal}){

    function clicked(component){
        
    }
    
    // function randomize(){
    //     setIndex([])
    // }

    const poke = ['mudkip','pidgeot','abra','greninja','altaria','gible','scraggy','jangmo-o'];
    const [sprites, setSprites] = useState([]);

    useEffect(() => {
        async function loadSprites() {
            const urls = await Promise.all(
            poke.map(async (mon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${mon}`);
                const data = await res.json();
                return data.sprites.front_default;
            })
            );
            setSprites(urls);
        }
        loadSprites();
    }, []);
    return(
        <>
            {sprites.map((url,index)=>{
                return(
                    <img src={url} alt={'Image of' + poke[index]} key={index} />
                )
            })}
        </>
    )
}