import { createContext, useEffect, useState } from "react";
import run from "../config/gemini";
import formatContentToHTML from "../utils/html-formatter";

export const Context = createContext();

const ContextProvider = (props) => {
    // State variables
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [formattedResultData, setFormattedResultData] = useState("");

    // Function to delay the display of each word in the result
    const wordToWordWriter = (index, nextWord) => {
        setTimeout(function () {
            setFormattedResultData(prev => prev + nextWord); 
        }, 50 * index);
    };

    const onSent = async (prompt) => {
        setResultData(""); 
        setFormattedResultData(""); 
        setLoading(true); 
        setShowResult(true); 
        let response;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else{
            setPreviousPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }
        const formattedResponse = formatContentToHTML(response);
        setResultData(formattedResponse); 
        setLoading(false); 
        setInput(""); 
    };


    useEffect(() => {
        const resultDataArray = resultData.split(" ");
        resultDataArray.forEach((nextWord, index) => {
            wordToWordWriter(index, nextWord + " "); 
        });
    }, [resultData]); 

   
    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        formattedResultData, 
        input,
        setInput,
    };

    return (

        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
