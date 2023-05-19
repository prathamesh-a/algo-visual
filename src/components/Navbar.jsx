import Dropdown from "./Dropdown.jsx";

import {alert, getRandomiseArray} from "../util/util.js";
import {algoSpeed, algoTypes} from "../util/config.js";
import {visualizer} from "../visualizer/visualize.js";


export default function Navbar(props) {

    const { isRunning, setIsRunning } = props
    const algorithms = [algoTypes.bubbleSort, algoTypes.selectionSort, algoTypes.insertSort];
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
            else visualizer(props.algorithm, props.array, props.speed, props.setArray, props.pseudo, props.setPseudo, setIsRunning)
        }
    }

    return (
        <>
            <div className={`hidden sm:flex bg-[#1A1D23] justify-center py-2 xl:py-4 text-md xl:text-lg border-b-2 border-black`}>
                <Dropdown tip={'Select an algorithm to visualize.'} running={isRunning} options={algorithms} setOption={props.setAlgorithm} defaultOption={props.algorithm}/>
                <Dropdown tip={'Select the speed of the animation.'} running={isRunning} options={speedTypes} setOption={props.setSpeed} defaultOption={props.speed}/>
                <button onClick={randomiseArray} className={`rounded-sm border-2 px-4 mr-3 lg:mr-8 ${runningClasses}`}>Randomise Array</button>
                <button onClick={visualize} className={`rounded-sm border-2 px-4 ${runningClasses}`}>Visualize</button>
            </div>
            <div className={`sm:hidden p-4 gap-x-2 gap-y-2 grid grid-cols-2 bg-[#1A1D23] py-2 text-md border-b-2 border-black`}>
                <Dropdown tip={'Select an algorithm to visualize.'} running={isRunning} options={algorithms} setOption={props.setAlgorithm} defaultOption={props.algorithm}/>
                <Dropdown tip={'Select the speed of the animation.'} running={isRunning} options={speedTypes} setOption={props.setSpeed} defaultOption={props.speed}/>
                <button onClick={randomiseArray} className={`rounded-sm border-2 px-1 ${runningClasses}`}>Randomise Array</button>
                <button onClick={visualize} className={`rounded-sm border-2 px-1 ${runningClasses}`}>Visualize</button>
            </div>
        </>
    )
}