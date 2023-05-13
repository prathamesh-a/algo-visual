import {algoSpeed, algoTypes} from "../util/config.js";
import {manageStop, success} from "../util/util.js";
import {bubbleSortVisualizer} from "./bubbleSortVisualizer.js";


export async function visualizer(algorithm, array, speed, setArray, bubblePseudo, setBubblePseudo, setIsRunning) {
    let resultArr
    setIsRunning(true)

    let timer
    switch (speed) {
        case algoSpeed.slow:
            timer = 300
            break
        case algoSpeed.normal:
            timer = 150
            break
        case algoSpeed.fast:
            timer = 50
            break
    }

    if (algorithm === algoTypes.bubbleSort) {
        resultArr = await bubbleSortVisualizer(array, setArray, setBubblePseudo, timer)
    }

    setBubblePseudo([0,0,0,0,0,0,0])
    await setDone(resultArr, setArray, setIsRunning)
    manageStop(false)
}

async function setDone(array, setArray, setIsRunning) {
    if (!manageStop()){
        for (let i = 0; i < array.length; i++) {
            setTimeout(() => {
                const tempArr = [...array]
                tempArr[i].color = 'ok'
                setArray(tempArr)
            }, i * 100)
        }
    }
    else {
        const tempArr = [...array]
        setArray(tempArr)
    }

    if (!manageStop()) success('Array Sorted!')
    setIsRunning(false)
}