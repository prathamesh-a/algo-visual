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

    return (
        <div className=" bg-[#23272F] border-t-2 border-black">
            {props.algorithm === algoTypes.bubbleSort && <div className="px-24 py-12">
                <p className="text-[30px] text-cyan-300">Bubble Sort Algorithm</p>
                <p className="text-xl mt-6 text-zinc-300">Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements in a list until the list is sorted. It is called "bubble" sort because the smaller elements "bubble" to the top of the list as the algorithm progresses.</p>
                <p className="text-xl mt-6 text-zinc-300">The algorithm compares adjacent elements in the list and swaps them if they are in the wrong order. This process is repeated until the list is sorted.</p>

                <p className="text-xl mt-6 text-zinc-300">Here's the pseudocode for Bubble sort:</p>
                <div className="my-8 bg-[#1A1D23] pl-4 rounded-sm w-1/2 py-4">
                    {bubblePseudocode.map(each => <p className="font-mono text-cyan-200">{each}</p>)}
                </div>

                <p className="text-xl mt-6 text-zinc-300">In the pseudocode, <b>A</b> is an array of elements to be sorted. The <b>bubbleSort</b> function iterates through the list, comparing adjacent elements and swapping them if they are in the wrong order. This process is repeated until no more swaps are needed, indicating that the list is sorted.</p>
                <p className="text-xl mt-6 text-zinc-300 font-semibold">Time Complexity: O(N2)</p>
                <p className="text-xl mt-6 text-zinc-300">Note that bubble sort has a time complexity of O(n^2), which can make it inefficient for larger lists. However, it is a good algorithm to use for educational purposes as it is simple to understand and implement.</p>
            </div>}
        </div>
    )
}