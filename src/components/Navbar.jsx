import {useState} from "react";

import Dropdown from "./Dropdown.jsx";

import {alert, getRandomiseArray} from "../util/util.js";
import {algoSpeed, algoTypes} from "../util/config.js";
import {visualizer} from "../visualizer/visualize.js";


export default function Navbar(props) {

    const [isRunning, setIsRunning] = useState(false)
    const algorithms = [algoTypes.bubbleSort, algoTypes.mergeSort, algoTypes.insertSort];
    const speedTypes = [algoSpeed.slow, algoSpeed.normal, algoSpeed.fast]
    const runningClasses = isRunning ? 'text-zinc-600 cursor-not-allowed border-zinc-600' : 'border-gray-300 text-white hover:text-cyan-300'

    function randomiseArray() {
        if (!isRunning) {
            const randomArray = getRandomiseArray(props.array)
            props.setArray(randomArray)
        }
    }

    function visualize() {
        if (!isRunning) {
            if (props.algorithm === algoTypes.none) alert("Select an Algorithm.")
            else visualizer(props.algorithm, props.array, props.speed, props.setArray, props.bubblePseudo, props.setBubblePseudo, setIsRunning)
        }
    }

    return (
        <div className={`flex bg-[#1A1D23] justify-center py-4 text-lg border-b-2 border-black`}>
            <Dropdown tip={'Select an algorithm to visualize.'} running={isRunning} options={algorithms} setOption={props.setAlgorithm} defaultOption={props.algorithm}/>
            <Dropdown tip={'Select the speed of the animation.'} running={isRunning} options={speedTypes} setOption={props.setSpeed} defaultOption={props.speed}/>
            <button onClick={randomiseArray} className={`rounded-sm border-2 px-4 mr-8 ${runningClasses}`}>Randomise Array</button>
            <button onClick={visualize} className={`rounded-sm border-2 px-4 mr-8 ${runningClasses}`}>Visualize</button>
        </div>
    )
}