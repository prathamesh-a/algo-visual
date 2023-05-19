import {algoTypes} from "../util/config.js";


export default function AlgoInfo(props) {

    const bubblePseudocode = [
        'bubbleSort(A)',
        'ㅤㅤn = length(A)',
        'ㅤㅤdo',
        'ㅤㅤㅤㅤswapped = false',
        'ㅤㅤㅤㅤfor i = 1 to n-1 do',
        'ㅤㅤㅤㅤㅤㅤif A[i] > A[i+1] then',
        'ㅤㅤㅤㅤㅤㅤㅤㅤswap(A[i], A[i+1])',
        'ㅤㅤㅤㅤㅤㅤㅤㅤswapped = true',
        'ㅤㅤㅤㅤㅤㅤend if',
        'ㅤㅤㅤㅤend for',
        'ㅤㅤㅤㅤn = n - 1',
        'ㅤㅤwhile swapped',
        'end bubbleSort'
    ]

    const insertionPseudocode = [
        'insertionSort(A)',
        'ㅤㅤn = length(A)',
        'ㅤㅤfor i = 1 to n-1 do',
        'ㅤㅤㅤㅤkey = A[i]',
        'ㅤㅤㅤㅤj = i - 1',
        'ㅤㅤㅤㅤwhile j >= 0 and A[i] > key do',
        'ㅤㅤㅤㅤㅤㅤA[j+1] = A[j]',
        'ㅤㅤㅤㅤㅤㅤj = j - 1',
        'ㅤㅤㅤㅤend while',
        'ㅤㅤㅤㅤA[i+1] = key',
        'ㅤㅤend for',
        'end insertionSort'
    ]

    const selectionPseudocode = [
        'selectionSort(A)',
        'ㅤㅤn = length(A)',
        'ㅤㅤfor i = 0 to n-1 do',
        'ㅤㅤㅤㅤminIndex = i',
        'ㅤㅤㅤㅤfor j = i+1 to n do',
        'ㅤㅤㅤㅤㅤㅤif A[j] < A[minIndex] then',
        'ㅤㅤㅤㅤㅤㅤㅤㅤminIndex = j',
        'ㅤㅤㅤㅤㅤㅤend if',
        'ㅤㅤㅤㅤend for',
        'ㅤㅤㅤㅤif minIndex != i then',
        'ㅤㅤㅤㅤㅤㅤswap(A[i], A[minIndex])',
        'ㅤㅤㅤㅤend if',
        'ㅤㅤend for',
        'end selectionSort'
    ]

    return (
        <div className=" bg-[#23272F] border-t-2 border-black">
            {props.algorithm === algoTypes.bubbleSort && <div className="px-8 sm:px-12 lg:px-24 py-12">
                <p className="text-[25px] xl:text-[30px] text-cyan-300">Bubble Sort Algorithm</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements in a list until the list is sorted. It is called "bubble" sort because the smaller elements "bubble" to the top of the list as the algorithm progresses.</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">The algorithm compares adjacent elements in the list and swaps them if they are in the wrong order. This process is repeated until the list is sorted.</p>

                <p className="text-md xl:text-xl mt-6 text-zinc-300">Here's the pseudocode for Bubble sort:</p>
                <div className="my-8 bg-[#1A1D23] pl-4 rounded-sm w-[100%] sm:w-1/2 py-4">
                    {bubblePseudocode.map(each => <p key={each} className="font-mono text-sm xl:text-lg text-cyan-200">{each}</p>)}
                </div>

                <p className="text-md xl:text-xl mt-6 text-zinc-300">In the pseudocode, <b>A</b> is an array of elements to be sorted. The <b>bubbleSort</b> function iterates through the list, comparing adjacent elements and swapping them if they are in the wrong order. This process is repeated until no more swaps are needed, indicating that the list is sorted.</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300 font-semibold">Time Complexity: O(N^2)</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">Note that bubble sort has a time complexity of O(n^2), which can make it inefficient for larger lists. However, it is a good algorithm to use for educational purposes as it is simple to understand and implement.</p>
            </div>}

            {props.algorithm === algoTypes.insertSort && <div className="px-8 sm:px-12 lg:px-24 py-12">
                <p className="text-[25px] xl:text-[30px] text-cyan-300">Insertion Sort Algorithm</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It works by iteratively inserting elements from the unsorted part of the array into their correct positions in the sorted part of the array.</p>\
                <p className="text-md xl:text-xl text-zinc-300">The algorithm starts with the second element in the array and assumes it as the "key" element. It compares the key element with each element on its left, shifting them one position to the right until it finds the correct position for the key element. The process is repeated for each subsequent element in the array, inserting them into their correct positions in the sorted part.</p>

                <p className="text-md xl:text-xl mt-6 text-zinc-300">Here's the pseudocode for Bubble sort:</p>
                <div className="my-8 bg-[#1A1D23] pl-4 rounded-sm w-[100%] sm:w-1/2 py-4">
                    {insertionPseudocode.map(each => <p key={each} className="font-mono text-sm xl:text-lg text-cyan-200">{each}</p>)}
                </div>

                <p className="text-md xl:text-xl mt-6 text-zinc-300">In the pseudocode, A is an array of elements to be sorted. The insertionSort function iterates through the list, starting from the second element (index 1). It picks an element (key) and compares it with the elements on its left, shifting them one position to the right until finding the correct position for the key element. This process is repeated for each element in the list until the entire list is sorted.</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300 font-semibold">Time Complexity: O(N^2)</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">The time complexity of insertion sort is also O(n^2), which makes it inefficient for large lists. However, it performs better than bubble sort in most cases because it tends to have fewer comparisons and swaps. Insertion sort is a stable sorting algorithm and can be useful for small or partially sorted lists.</p>
            </div>}

            {props.algorithm === algoTypes.selectionSort && <div className="px-8 sm:px-12 lg:px-24 py-12">
                <p className="text-[25px] xl:text-[30px] text-cyan-300">Selection Sort Algorithm</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">Selection Sort is a simple comparison-based sorting algorithm that divides the input array into two parts: the sorted portion at the beginning and the unsorted portion at the end. The algorithm repeatedly finds the minimum element from the unsorted portion and swaps it with the current element at the start of the unsorted portion. This process is repeated until the entire array is sorted.</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">The algorithm starts with the first element in the array and assumes it as the minimum element. It then iterates through the unsorted portion of the array to find the minimum element. Once the minimum element is found, it swaps it with the current element at the start of the unsorted portion. The algorithm then moves the boundary of the sorted and unsorted portions one position to the right.</p>

                <p className="text-md xl:text-xl mt-6 text-zinc-300">Here's the pseudocode for Selection sort:</p>
                <div className="my-8 bg-[#1A1D23] pl-4 rounded-sm w-[100%] sm:w-1/2 py-4">
                    {selectionPseudocode.map(each => <p key={each} className="font-mono text-sm xl:text-lg text-cyan-200">{each}</p>)}
                </div>

                <p className="text-md xl:text-xl mt-6 text-zinc-300">In the pseudocode, A is an array of elements to be sorted. The selectionSort function iterates through the list, maintaining a sorted portion at the beginning and finding the minimum element from the unsorted portion in each iteration. It then swaps the minimum element with the current element at the start of the unsorted portion. This process is repeated until the entire list is sorted.</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300 font-semibold">Time Complexity: O(N^2)</p>
                <p className="text-md xl:text-xl mt-6 text-zinc-300">The time complexity of selection sort is also O(n^2). Although it has the same time complexity as bubble sort, selection sort generally performs better in practice due to its reduced number of swaps. However, like bubble sort, it is also inefficient for larger lists. Selection sort is primarily used for educational purposes or when the number of elements is small and minimizing the number of swaps is desirable.</p>
            </div>}
        </div>
    )
}