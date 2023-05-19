import PseudoCodeLine from "./PseudoCodeLine.jsx";
import {algoTypes, bubbleSortPseudocode, insertionSortPseudocode, selectionSortPseudocode} from "../util/config.js";
import {manageStop} from "../util/util.js";


export default function PseudoCodeBlock(props) {

    function getPseudoCode() {
        const codeArr = []
        if (props.algorithm === algoTypes.bubbleSort) {
            for(let i=0; i<bubbleSortPseudocode.length; i++) {
                codeArr.push(<PseudoCodeLine key={Math.random()} text={bubbleSortPseudocode[i]} active={props.pseudo[i] === 1}/>)
            }
        }
        else if (props.algorithm === algoTypes.insertSort) {
            for(let i=0; i<insertionSortPseudocode.length; i++) {
                codeArr.push(<PseudoCodeLine key={Math.random()} text={insertionSortPseudocode[i]} active={props.pseudo[i] === 1}/>)
            }
        }
        else if (props.algorithm === algoTypes.selectionSort) {
            for(let i=0; i<selectionSortPseudocode.length; i++) {
                codeArr.push(<PseudoCodeLine key={Math.random()} text={selectionSortPseudocode[i]} active={props.pseudo[i] === 1}/>)
            }
        }
        return codeArr
    }

    function reset() {
        manageStop(true)
    }

    return (
        <div className="flex flex-col-reverse lg:flex-col justify-center items-center text-green-300 w-[100%] lg:w-[35%]">
            {props.algorithm === algoTypes.none && <div className="py-12 px-4 sm:px-2">
                <p className="text-[22px] xl:text-[30px] font-semibold text-cyan-300">Welcome to AlgoVisual!</p><br/>
                <p className="xl:text-lg text-white">Select an algorithm, speed and click <span className="text-cyan-100">Visualize</span> to start.</p>
                <p className="xl:text-lg text-white">Scroll down to get more information about the selected algorithm.</p>
            </div>}
            {(props.algorithm !== algoTypes.none && props.isRunning) && <div className='text-[12px] sm:text-sm xl:text-lg'>
                <button onClick={reset} className="px-4 border-2 rounded-sm border-red-600 text-white hover:text-rose-500 mb-2">STOP</button>
            </div>}
            {props.algorithm !== algoTypes.none && <div className="font-mono text-[12px] sm:text-sm xl:text-lg px-2 py-2 lg:py-6 xl:py-12 bg-white/10 backdrop-blur-sm rounded-sm">
                <p className="mb-3 text-white">{props.algorithm} Pseudocode</p>
                {getPseudoCode()}
            </div>}
        </div>
    )
}