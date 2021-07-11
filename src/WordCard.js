import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _, { attempt } from 'lodash';


const prepareStateFromWord = given_word =>{
    let randomElement = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(randomElement))
    return {
        randomElement,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = c =>{
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length == state.randomElement.length){
            if(guess == state.randomElement){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset,  next attempt')
                setState({...state, guess: '', attempt: state.attempt+1})
            }
            
        }
    }

    const mainclass = `manu ${state.completed ? 'inV': " "}`
    

    return(
        <div className="contain">
            <div className="attmp">
                <h3>You attempt: {state.attempt}</h3>
            </div>
            <div className={mainclass}>
             {
                state.chars.map((c, i) => 
                <CharacterCard value={c} key = {i} activationHandler ={activationHandler} attempt={state.attempt}/>
                )
            }
            </div>
            
        </div>

    )

}
