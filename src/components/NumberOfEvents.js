import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, currentNumber, setErrorAlert})=>{
    const [numberListed, setNumberListed] = useState("");
    const [query, setQuery] = useState("");
    const handleNumberChanged = (event) => {
        const value = event.target.value;
        let errorText;
        if(value==="") {
        setQuery(value)
        setCurrentNOE(32);
        countEventsListed(value);
        errorText = ""; 
        }
        // else if(value==="0"){
        // setQuery("")
        // setCurrentNOE(32);
        // }
        else if(isNaN(value) || value > 32 || value <= 0) {
            setQuery(value);
            setCurrentNOE(32);
            countEventsListed(32);
            errorText = "Please enter a valid number. (1-32)"
        } 
        else{
            setQuery(value);
            setCurrentNOE(value);
            countEventsListed(value);
            errorText = "";
            }
        setErrorAlert(errorText);
    };

    const countEventsListed = (val) => {
        if(val === ""){
            setNumberListed(currentNumber);
        }
        else if(currentNumber > 32 ){  
            setNumberListed(32);
        }
        else if(currentNumber > val && val > 0){
            setNumberListed(val);
        }
        else if (isNaN(val) || val <= 0 ){
            setNumberListed(currentNumber);
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