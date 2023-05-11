import PseudoCodeLine from "./PseudoCodeLine.jsx";
import {algoTypes, bubbleSortPseudocode} from "../util/config.js";


export default function PseudoCodeBlock(props) {

    function getBubblePseudoCode() {
        const codeArr = []
        for(let i=0; i<props.bubblePseudo.length; i++) {
            codeArr.push(<PseudoCodeLine key={Math.random()} text={bubbleSortPseudocode[i]} active={props.bubblePseudo[i] === 1}/>)
        }
        return codeArr
    }

    return (
        <div className="flex justify-center items-center text-green-300 w-[100%] lg:w-[35%]">
            {props.algorithm === algoTypes.none && <div className="py-12 px-4 sm:px-2">
                <p className="text-[22px] xl:text-[30px] font-semibold text-cyan-300">Welcome to AlgoVisual!</p><br/>
                <p className="xl:text-lg text-white">Select an algorithm, speed and click <span className="text-cyan-100">Visualize</span> to start.</p>
                <p className="xl:text-lg text-white">Scroll down to get more information about the selected algorithm.</p>
            </div>}
            {props.algorithm === algoTypes.bubbleSort && <div className="font-mono text-[12px] sm:text-sm xl:text-lg px-2 py-2 lg:py-6 xl:py-12 bg-white/10 backdrop-blur-sm rounded-sm">
                {getBubblePseudoCode()}
            </div>}
        </div>
    )
}