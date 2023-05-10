import {useState} from "react";

import Tippy from "@tippyjs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";


export default function Dropdown(props) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const runningClasses = props.running ? 'cursor-not-allowed text-zinc-500' : 'cursor-pointer text-white'

    function toggleDropdown() {
        if (!props.running) setIsDropdownOpen(!isDropdownOpen);
    }

    function selectOption(option) {
        props.setOption(option)
        setIsDropdownOpen(false)
    }

    return (
        <Tippy content={props.tip} delay={[500, 50]} placement={"bottom-start"} hideOnClick={true}>
            <div>
                <div className={`mr-8 flex justify-between items-center w-44 px-4 py-2 rounded-md focus:outline-none ${runningClasses}`} onClick={toggleDropdown}>
                    {props.defaultOption}
                    {!isDropdownOpen && <FontAwesomeIcon className="ml-2" icon={faChevronDown}/>}
                    {isDropdownOpen && <FontAwesomeIcon className="ml-2" icon={faChevronUp}/>}
                </div>

                {isDropdownOpen && (
                    <div className="absolute mt-2 py-2 w-44 bg-[#1D2020] rounded-b-sm shadow-xl z-10">
                        {props.options.map((option) => (
                            <div
                                onClick={() => selectOption(option)}
                                key={option}
                                className={`${option === props.defaultOption ? "bg-[#272B2B]" : "hover:bg-[#303636]"} cursor-pointer text-white block px-4 py-2 focus:outline-none`}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Tippy>
    )
}