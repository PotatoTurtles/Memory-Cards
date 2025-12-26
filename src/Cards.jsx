import { useEffect, useState } from "react";

export default function Cards({score,bestscore,setScore,setBestscore}){

    const poke = ['mudkip','pidgeot','abra','greninja','altaria','gible','scraggy','jangmo-o'];
    const [sprites, setSprites] = useState([]);
    const [isClicked, setIsClicked] = useState(poke.map(()=>false))
    const [place,setPlace] = useState(poke.map((a,b)=>b+1))

    function randomify(){
        let base=[...place];
        let shuffled =[]
        for(let i = 1; i<=place.length;i++){
            let rand = Math.floor(Math.random()*base.length);
            shuffled.push(base.splice(rand,1)[0]);
        }
        return shuffled;
    }

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
    useEffect(()=>{
        if(score>bestscore){
            setBestscore(score);
        }
        setPlace(randomify());
    },[score])
    return(
        <>
            {sprites.map((url,index)=>{
                function clicked(){
                    if(!isClicked[index]){
                        setScore(score+1);
                        setIsClicked(prev=>{const next = [...prev];next[index]=true;return next});
                    }
                    else{
                        if((score%poke.length)===0){
                            setIsClicked(poke.map(()=>false));
                            setScore(score+1);
                            setIsClicked(prev=>{const next = [...prev];next[index]=true;return next});
                        }
                        else{
                            setScore(0);
                            setIsClicked(poke.map(()=>false));
                        }
                    }
                    
                }
                return(
                    <button key={poke[index]} onClick={clicked} style={{gridArea:`${Math.floor((place[index]-1)/4+1)} / ${Math.floor((place[index]-1)%4+1)}`}}><img src={url} alt={'Image of' + poke[index]}/></button>
                    
                )
            })}
        </>
    )
}