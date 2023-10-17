import TranslatingSection from "../components/translaitingSection";
import Guide from "./guide";
export default function Main(){
    return(
        <div className="page main">
        <h1>Welcomde to english-morse translator!</h1>
        <TranslatingSection/>
        <Guide/>
        </div>
    )
}