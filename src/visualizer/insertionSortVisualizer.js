import {insertionSort} from "../algorithms/insertionSort.js";
import {addDelay, changeColor, manageStop, swapBars} from "../util/util.js";

export async function insertionSortVisualizer(array, setArray, setPseudo, timer) {
    const temp = [...array]
    const animations = insertionSort(temp)

    for (let i=0; i<animations.length; i++) {
        if (manageStop()) break

        const tempArr = [...array]
        const selected = animations[i][0]
        const toCompare = animations[i][1]
        const swap = animations[i][2]
        const comparator = animations[i][3]

        if (comparator) {
            setPseudo([0,0,0,1,0,0,0,0])
            changeColor(selected, 'red', toCompare, 'green', array, setArray)
        }
        else if (swap) {
            setPseudo([0,0,0,0,1,0,0,0])
            changeColor(selected, 'green', toCompare, 'red', array, setArray)
            swapBars(selected, toCompare, array, setArray)
            //changeColor(selected, 'up-red', toCompare, 'green', array, setArray)
            await addDelay(timer)
            setPseudo([0,0,0,0,0,1,0,0])
            changeColor(selected, 'none', toCompare, 'red', array ,setArray)
        }
        else {
            setPseudo([0,0,0,0,0,0,1,0])
            resetAllBars(array, setArray)
            await addDelay(timer)
            setPseudo([1,0,0,0,0,0,0,0])
            await addDelay(timer/2)
            setPseudo([0,1,1,0,0,0,0,0])
            changeColor(selected, 'red', selected, 'red', array, setArray)
        }

        array = tempArr
        setArray(tempArr)

        if (i === animations.length-1) {
            setPseudo([0, 0, 0, 0, 0, 0, 0, 1])
        }

        await addDelay(timer)
    }

    let tempArr = [...array]
    for (let i=0; i<array.length; i++) {
        tempArr[i].color = 'none'
    }
    setArray(tempArr)

    return tempArr
}

function resetAllBars(array, setArray) {
    const tempArr = [...array]
    for(let i=0; i<tempArr.length; i++) {
        tempArr[i].color = 'none'
    }
    setArray(tempArr)
}