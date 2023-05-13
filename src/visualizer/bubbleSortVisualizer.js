import {bubbleSort} from "../algorithms/bubbleSort.js";
import {addDelay, changeColor, manageStop, swapBars} from "../util/util.js";


export async function bubbleSortVisualizer(array, setArray, setBubblePseudo, timer) {
    const temp = [...array]
    const animations = bubbleSort(temp)
    setBubblePseudo([1,0,0,0,0,0,0])

    for(let i=0; i<animations.length; i++) {
        if (manageStop()) break

        array = array.map(each => {return {
            ...each,
            color: 'none'
        }})

        const tempArr = [...array]
        const left = animations[i][0]
        const right = animations[i][1]
        const swap = animations[i][2]

        if (swap) {
            changeColor(left, right, array, 'none-up', setArray)
            setBubblePseudo([0, 0, 1, 0, 0, 0, 0])
            await addDelay(timer)
            changeColor(left, right, array, 'up-red', setArray)
            setBubblePseudo([0, 0, 0, 1, 0, 0, 0])
            await addDelay(timer)
            swapBars(left, right, array, setArray)
            setBubblePseudo([0, 0, 0, 0, 1, 0, 0])
            await addDelay(timer)
            changeColor(left, right, array, 'red', setArray)
            setBubblePseudo([0, 0, 0, 0, 0, 1, 0])
            await addDelay(timer)
            changeColor(left, right, array, 'none', setArray)
        } else {
            changeColor(left, right, array, 'none-up', setArray)
            setBubblePseudo([0, 0, 1, 0, 0, 0, 0])
            await addDelay(timer)
            changeColor(left, right, array, 'up-green', setArray)
            setBubblePseudo([0, 0, 0, 1, 0, 0, 0])
            await addDelay(timer)
            changeColor(left, right, array, 'green', setArray)
            await addDelay(timer)
            changeColor(left, right, array, 'none', setArray)
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

    return tempArr
}