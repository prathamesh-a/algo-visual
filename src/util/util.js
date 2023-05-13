import {toast} from "react-toastify";


let stop = false;
export function manageStop(flag) {
    if (typeof flag != 'undefined') {
        stop = flag
    }
    return stop
}

export function getRandomiseArray() {
    const randomArray = []
    for (let i=0; i<20; i++) {
        randomArray[i] = {value: Math.floor(Math.random() * 100) + 1, color: 'none'}
    }
    return randomArray
}

export function addDelay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done()
        }, n)
    })
}

export function alert(string) {
    toast.error(string, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export function success(string) {
    toast.success(string, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export function changeColor(left, right, array, color, setArray) {
    const tempArr = [...array]
    tempArr[left].color = color
    tempArr[right].color = color
    setArray(tempArr)
}

export function swapBars(left, right, array, setArray) {
    const tempArr = [...array]
    const leftVal = tempArr[left].value
    tempArr[left].value = tempArr[right].value
    tempArr[right].value = leftVal
    setArray(tempArr)
}