import "/src/static/scoller.css"
import {algoTypes} from "../util/config.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

export default function Scroller(props) {
    return (
        <div className="">
            {props.algorithm !== algoTypes.none && <div className="-mt-12 lg:-mt-20 flex justify-center animate-bounce">
                <FontAwesomeIcon className="text-white" icon={faChevronDown}/>
            </div>}
        </div>
    )
}