import Tippy from "@tippyjs/react";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';


export default function ArrayBar(props) {
    let color
    switch (props.color) {
        case 'yellow':
            color = 'bg-yellow-400 transition ease-in-out hover:bg-zinc-300 duration-300'
            break
        case 'none':
            color = 'bg-zinc-400 transition ease-in-out hover:bg-zinc-300 duration-300'
            break
        case 'none-up':
            color = 'bg-zinc-400 -translate-y-5'
            break
        case 'sorted':
            color = "bg-indigo-400 transition ease-in-out hover:bg-indigo-300 duration-300"
            break
        case 'up-red':
            color = 'bg-red-500 -translate-y-5'
            break
        case 'up-green':
            color = 'bg-emerald-400 -translate-y-5'
            break
        case 'red':
            color = 'bg-red-500'
            break
        case 'green':
            color = 'bg-emerald-400'
            break
    }

    const height = String(props.value/4)

    return (
        <Tippy content={props.value} theme={"translucent"}>
            <div className={`${color} w-[60%] rounded-t-sm`} style={{ height: `${height}rem` }}>
                <div className="flex justify-center h-full items-end">
                    <p className="text-[10px] sm:text-sm lg:text-md text-white -mb-[2rem]">{props.value}</p>
                </div>
            </div>
        </Tippy>
    )
}