export function insertionSort(array) {
    // [selected, compared, swap]
    const animations = []

    for (let i = 1; i < array.length; i++) {
        let index_i = i
        animations.push([index_i, index_i, false, false])
        let j = i - 1
        let key = array[i]
        while (j >= 0 && array[j].value > key.value) {
            animations.push([index_i, j, false, true])
            let swap = array[j+1]
            array[j+1] = array[j]
            array[j] = swap
            animations.push([index_i, j, true, false])
            index_i--
            j--
        }
    }

    return animations
}