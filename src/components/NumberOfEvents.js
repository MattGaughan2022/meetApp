import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, currentNumber})=>{
    const [numberListed, setNumberListed] = useState("");
    const [query, setQuery] = useState("");
    const handleNumberChanged = (event) => {
        const value = event.target.value;
        if(value==="") {
        setQuery(value)
        setCurrentNOE(32);
        countEventsListed(value);
        }
        // else if(value==="0"){
        // setQuery("")
        // setCurrentNOE(32);
        // }
        else{
        setQuery(value);
        setCurrentNOE(value);
        countEventsListed(value);
        }
    };
    const countEventsListed = (val) => {
        if(val === ""){
            setNumberListed(currentNumber);
        }
        else if(currentNumber > 32){  
        setNumberListed(32);
        }
        else if(currentNumber > val){
        setNumberListed(val);
        }
        else{
        setNumberListed(currentNumber);
        }
    };

    return(
        <div id='number-of-events'>Hello
            <form>
                <input 
                type="text" 
                placeholder="32"
                value={query}
                onChange={handleNumberChanged}></input>
            </form>
            <span>Number of events listed: {numberListed}</span>
        </div>
    )
}
export default NumberOfEvents;