import {algoSpeed, algoTypes} from "../util/config.js";
import {manageStop, success} from "../util/util.js";
import {bubbleSortVisualizer} from "./bubbleSortVisualizer.js";
import {insertionSortVisualizer} from "./insertionSortVisualizer.js";
import {selectionSortVisualizer} from "./selectionSortVisualizer.js";


export async function visualizer(algorithm, array, speed, setArray, pseudo, setPseudo, setIsRunning) {
    let resultArr
    setIsRunning(true)

    let timer
    switch (speed) {
        case algoSpeed.slow:
            timer = 500
            break
        case algoSpeed.normal:
            timer = 100
            break
        case algoSpeed.fast:
            timer = 25
            break
    }

    if (algorithm === algoTypes.bubbleSort) {
        resultArr = await bubbleSortVisualizer(array, setArray, setPseudo, timer)

    }
    else if (algorithm === algoTypes.insertSort) {
        resultArr = await insertionSortVisualizer(array, setArray, setPseudo, timer)
    }
    else if (algorithm === algoTypes.selectionSort) {
        resultArr = await selectionSortVisualizer(array, setArray, setPseudo, timer)
    }

    setPseudo([0,0,0,0,0,0,0])
    await setDone(resultArr, setArray, setIsRunning)
    manageStop(false)
}

async function setDone(array, setArray, setIsRunning) {
    if (!manageStop()){
        for (let i = 0; i < array.length; i++) {
            setTimeout(() => {
                const tempArr = [...array]
                tempArr[i].color = 'sorted'
                setArray(tempArr)
            }, i * 50)
        }
    }
    else {
        const tempArr = [...array]
        setArray(tempArr)
    }

    if (!manageStop()) success('Array Sorted!')
    setIsRunning(false)
}