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
        <div className="w-[65%] my-12 mr-4 ml-12 rounded-sm">
            <div className="rounded-sm border-b-2 border-white h-[29rem] w-full px-4 py-2">
                <div className="pb-[2rem] w-full h-full grid grid-cols-[repeat(20,_minmax(0,_1fr))] items-end justify-items-center">
                    {arrayBars}
                </div>
            </div>
        </div>
    )
}