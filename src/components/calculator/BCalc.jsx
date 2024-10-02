import { useState } from "react";
import Calc from "./Calc";

function BCalc(props) {
    const { renderMenu, onNew, onClose } = props
    const [initTxt, setInitTxt] = useState('')
    const [forceUpdate, setForceUpdate] = useState(0)
    const createMenu = () => {
        return renderMenu({
            File: {
                "New": { handleClick: onNew },
                "Clear": { handleClick: () => {setInitTxt(''); setForceUpdate(forceUpdate+1); console.log('clearing calc') } },
                "Quit": { handleClick: onClose },
            }
        })
    }
    return (
        <>
        { createMenu() }
        <Calc initTxt={initTxt} forceUpdate={forceUpdate} />
        </>
    )
}

export default BCalc;