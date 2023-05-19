import {selectionSort} from "../algorithms/selectionSort.js";
import {addDelay, changeColor, manageStop, swapBars} from "../util/util.js";

export async function selectionSortVisualizer(array, setArray, setPseudo, timer) {
    const temp = [...array]
    const animations = selectionSort(temp)

    for (let i=0; i<animations.length; i++) {
        if (manageStop()) break

        resetAllBars(array, setArray)

        const tempArr = [...array]
        const selected = animations[i][0]
        const min = animations[i][1]
        const toCompare = animations[i][2]
        const swap = animations[i][3]
        const comparator = animations[i][4]

        if (swap) {
            setPseudo([0, 0, 0, 0, 0, 1, 0, 0])
            changeColor(selected, 'green', min, 'red', array, setArray)
            await addDelay(timer/2)
            swapBars(selected, min, array, setArray)
            setPseudo([0, 0, 0, 0, 0, 0, 1, 0])
            await addDelay(timer/2)
            setPseudo([1, 0, 0, 0, 0, 0, 0, 0])
            await addDelay(timer/2)
            setPseudo([0, 1, 0, 0, 0, 0, 0, 0])
        }
        else if (comparator) {
            setPseudo([0, 0, 1, 0, 0, 0, 0, 0])
            if (selected !== min) {
                changeColor(selected, 'green', min, 'red', array, setArray)
                changeColor(selected, 'green', toCompare, 'yellow', array, setArray)
            }
            else changeColor(selected, 'green', toCompare, 'yellow', array, setArray)
            await addDelay(timer/2)
            setPseudo([0, 0, 0, 1, 0, 0, 0, 0])
        }
        else {
            if (min === -1) changeColor(selected, 'green', selected, 'green', array, setArray)
            else {
                setPseudo([0, 0, 0, 0, 1, 0, 0, 0])
                changeColor(selected, 'green', min, 'red', array, setArray)
            }
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