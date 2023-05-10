export const algoTypes = {
    none: "Algorithm",
    bubbleSort: "Bubble Sort",
    insertSort: "Insertion Sort",
    mergeSort: "Merge Sort"
}

export const algoSpeed = {
    slow: "Slow",
    normal: "Normal",
    fast: "Fast"
}

export const bubbleSortPseudocode = [
    'Do',
    'ㅤㅤswapped = false',
    'ㅤㅤfor element i = 0 to (array length - 2)',
    'ㅤㅤif array[i] > array[i+1]',
    'ㅤㅤㅤㅤswap elements i and i+1',
    'ㅤㅤㅤㅤswapped = true',
    'While swapped = true'
]