export function selectionSort(array) {
    //[selected, minimum, toCompare, swap, compare]
    const animations = []
    const n = array.length

    for(let i=0; i<n-1; i++) {
        animations.push([i, -1, -1, false, false])
        let minimum_index = i

        for(let j=i+1; j<n; j++) {
            animations.push([i, minimum_index, j, false, true])

            if(array[j].value < array[minimum_index].value) {
                animations.push([i, j, -1, false, false])
                minimum_index = j
            }
        }

        const temp = array[minimum_index]
        array[minimum_index] = array[i]
        array[i] = temp

        if (minimum_index !== temp) animations.push([i, minimum_index, -1, true, false])
    }

    return animations;
}