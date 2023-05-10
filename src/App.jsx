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


function App() {

    const [bubblePseudo, setBubblePseudo] = useState([0,0,0,0,0,0,0])
    const [algorithm, setAlgorithm] = useState(algoTypes.none)
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
            bubblePseudo={bubblePseudo}
            setBubblePseudo={setBubblePseudo}
        />

        <div className="pb-24 min-h-screen bg-[#2B303B] flex justify-center items-center bg-blend-multiply bg-fixed bg-[url('./img/bg.png')]">
            <Visualization
                array={array}
                setArray={setArray}
            />
            <PseudoCodeBlock
                algorithm={algorithm}
                bubblePseudo={bubblePseudo}
            />
        </div>

        <AlgoInfo algorithm={algorithm}/>
        <Footer/>
    </div>
  )
}

export default App
