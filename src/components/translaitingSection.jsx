import { useState,useRef } from "react";
import { dataBase } from "../data";
export default function TranslatingSection(){
    const [input,setInput] = useState('');
    const [output,setOutput] = useState('');
    const alertRef = useRef();
    function copyOutput(){
    const textarea = document.createElement('textarea');
    textarea.value = output;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showAlert();
    }
    function showAlert(){
        alertRef.current.style.display='block';
        setTimeout(()=>{
        alertRef.current.style.display='none';
        },1500)
    }

    function translate(arrayOfCharacters) {
        const translated = arrayOfCharacters.map(char => {
        const item = dataBase.find(item => item.input.includes(char));
        return item ? item.code+' ' : char;
        });
        return translated;
    }
    function handleInput(e){
        const content = e.target.value
        setInput(content);
        const characters = content.split('');
        const morseCode = translate(characters).join('');
        setOutput(morseCode);
    }
    return(
        <div className="translatingSection">
            <div className="boxes">
            <textarea placeholder="Enter your text..." value={input} onChange={handleInput} type="text" className="translatingBox inputSection"/>
            <div className="translatingBox output">
                {output}
                <button className="copyBtn" onClick={copyOutput}><i class="fa-regular fa-copy"></i></button>
            </div>
            </div>
            <span ref={alertRef} style={{position:'absolute',right:'30px',bottom:'70px',fontSize:"26px",padding:"4px 8px 8px 8px",backgroundColor:"darkgreen",color:"white",borderRadius:"5px",display:"none"}}>copied!</span>
        </div>
    )
}