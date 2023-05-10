export function bubbleSort(array) {
    let swapped
    const animations = []

    do {
        swapped = false

        for (let i=0; i<array.length - 1; i++) {

            if (array[i].value > array[i+1].value) {
                animations.push([i, i+1, true])

                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp

                swapped = true
            }
            else animations.push([i, i+1, false])
        }
    }
    while (swapped)

    return animations
}