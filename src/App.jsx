import {useState} from "react";

import PseudoCodeBlock from "./components/PseudoCodeBlock.jsx";
import Visualization from "./components/Visualization.jsx";
import AlgoInfo from "./components/AlgoInfo.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

import {algoSpeed, algoTypes} from "./util/config.js";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Scroller from "./components/Scroller.jsx";


function App() {

    const [pseudo, setPseudo] = useState([0,0,0,0,0,0,0,0])
    const [algorithm, setAlgorithm] = useState(algoTypes.none)
    const [isRunning, setIsRunning] = useState(false)
    const [speed, setSpeed] = useState(algoSpeed.normal)
    const [array, setArray] = useState([])

  return (
    <div>
        <ToastContainer/>
        <Navbar
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            speed={speed}
            setSpeed={setSpeed}
            array={array}
            setArray={setArray}
            pseudo={pseudo}
            setPseudo={setPseudo}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
        />

        <div className="bg-[#2B303B] bg-blend-multiply bg-fixed bg-[url('/assets/bg.png')]">
            <div className="pb-24 min-h-screen bg-[#2B303B] hidden lg:flex justify-center items-center bg-blend-multiply bg-fixed bg-[url('/assets/bg.png')]">
                <Visualization
                    array={array}
                    setArray={setArray}
                />
                <PseudoCodeBlock
                    algorithm={algorithm}
                    pseudo={pseudo}
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    setArray={setArray}
                />
            </div>
            <div className="hidden lg:block"><Scroller algorithm={algorithm}/></div>

        </div>

        <div className="bg-[#2B303B] bg-blend-multiply bg-fixed bg-[url('/assets/bg.png')]">
            <div className="pb-24 min-h-screen bg-[#2B303B] flex flex-col lg:hidden justify-center items-center bg-blend-multiply bg-fixed bg-[url('/assets/bg.png')]">
                <PseudoCodeBlock
                    algorithm={algorithm}
                    pseudo={pseudo}
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    setArray={setArray}
                />
                <Visualization
                    array={array}
                    setArray={setArray}
                />
            </div>
            <div className="block lg:hidden"><Scroller algorithm={algorithm}/></div>
        </div>



        <AlgoInfo algorithm={algorithm}/>
        <Footer/>
    </div>
  )
}

export default App
