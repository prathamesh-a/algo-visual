import {useEffect} from "react";

import ArrayBar from "./ArrayBar.jsx";
import {getRandomiseArray} from "../util/util.js";


export default function Visualization(props) {

    useEffect(() => props.setArray(getRandomiseArray(props.array)), [])

    let arrayBars = props.array.map(each => <ArrayBar key={Math.random()} value={each.value} color={each.color}/>)

    useEffect(() => {
        arrayBars = props.array.map(each => <ArrayBar key={Math.random()} value={each.value} color={each.color}/>)
    }, [props.array])

    return (
        <div className="w-[95%] sm:w-[80%] lg:w-[65%] sm:my-12 md:mr-4 md:ml-6 xl:ml-12">
            <div className="border-b-2 border-white h-[29rem] w-full px-1 sm:px-4 py-2">
                <div className="pb-[2rem] w-full h-full grid grid-cols-[repeat(20,_minmax(0,_1fr))] items-end justify-items-center">
                    {arrayBars}
                </div>
            </div>
        </div>
    )
}