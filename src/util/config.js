export const algoTypes = {
    none: "Algorithm",
    bubbleSort: "Bubble Sort",
    insertSort: "Insertion Sort",
    selectionSort: "Selection Sort"
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

export const insertionSortPseudocode = [
    'for element i=1 to (array length - 1)',
    'ㅤㅤkey = arr[i]',
    'ㅤㅤj = i - 1',
    'ㅤㅤwhile j >= 0 and arr[j] > key',
    'ㅤㅤㅤㅤswap arr[j+1] with arr[i]',
    'ㅤㅤㅤㅤj = j - 1',
    'ㅤㅤend while',
    'end for'
]