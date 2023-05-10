import Tippy from "@tippyjs/react";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';


export default function ArrayBar(props) {
    let color
    switch (props.color) {
        case 'none':
            color = 'bg-zinc-400'
            break
        case 'selected':
            color = "bg-yellow-500"
            break
        case 'swap':
            color = 'bg-red-500'
            break
        case 'ok':
            color = 'bg-emerald-400'
            break
    }

    const height = String(props.value/4)

    return (
        <Tippy content={props.value} theme={"translucent"}>
            <div className={`${color} w-[60%] rounded-t-sm`} style={{ height: `${height}rem` }}>
                <div className="flex justify-center h-full items-end">
                    <p className="text-white -mb-[2rem]">{props.value}</p>
                </div>
            </div>
        </Tippy>
    )
}