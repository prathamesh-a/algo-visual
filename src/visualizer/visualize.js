import {algoSpeed, algoTypes} from "../util/config.js";
import {addDelay, success} from "../util/util.js";
import {bubbleSort} from "../algorithms/bubbleSort.js";


export async function visualizer(algorithm, array, speed, setArray, bubblePseudo, setBubblePseudo, setIsRunning) {

    const temp = [...array]

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
        const animations = bubbleSort(temp)
        setBubblePseudo([1,0,0,0,0,0,0])

        for(let i=0; i<animations.length; i++) {
            array = array.map(each => {return {
                ...each,
                color: 'none'
            }})

            const tempArr = [...array]
            const left = animations[i][0]
            const right = animations[i][1]
            const swap = animations[i][2]

            if (swap) {
                changeColor(left, right, array, 'selected', setArray)
                setBubblePseudo([0,0,0,1,0,0,0])
                await addDelay(timer)
                changeColor(left, right, array, 'swap', setArray)
                setBubblePseudo([0,0,0,0,1,0,0])
                await addDelay(timer)
                setBubblePseudo([0,0,0,0,0,1,0])
                swapBars(left, right, array, setArray)
                await addDelay(timer)
                setBubblePseudo([0,0,1,0,0,0,0])
            } else {
                changeColor(left, right, array, 'selected', setArray)
                setBubblePseudo([0,0,0,1,0,0,0])
                await addDelay(timer)
                changeColor(left, right, array, 'ok', setArray)
                await addDelay(timer)
                setBubblePseudo([0,0,1,0,0,0,0])
            }

            if (right === tempArr.length-1) {
                setBubblePseudo([0, 1, 0, 0, 0, 0, 0])
                await addDelay(timer)
            }

            array = tempArr
            setArray(tempArr)

            await addDelay(timer)
        }

        let tempArr = [...array]
        for (let i=0; i<array.length; i++) {
            tempArr[i].color = 'none'
        }
        setArray(tempArr)
    }

    for(let i=0; i<array.length; i++) {
        setBubblePseudo([0,0,0,0,0,0,0])
        setTimeout(() => {
            const tempArr = [...array]
            tempArr[i].color = 'ok'
            setArray(tempArr)
        }, i*100)
    }
    success('Array Sorted!')
    setIsRunning(false)
}

function changeColor(left, right, array, color, setArray) {
    const tempArr = [...array]
    tempArr[left].color = color
    tempArr[right].color = color
    setArray(tempArr)
}

function swapBars(left, right, array, setArray) {
    const tempArr = [...array]
    const leftVal = tempArr[left].value
    tempArr[left].value = tempArr[right].value
    tempArr[right].value = leftVal
    setArray(tempArr)
}