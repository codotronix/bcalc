import React, { useEffect, useState } from "react"
import styles from "./Calc.module.css"
import Display from "./Display"
import Buttons from "./Buttons"

const Calc = (props) => {
    const { initTxt='', forceUpdate } = props
    const [txt, setTxt] = useState('')

    useEffect(() => {
        setTxt(initTxt)
    }, [initTxt, forceUpdate])

    const btnClicked = c => {
        c = c.toString()    // Convert it to Char, 'coz we append

        // Preformatting
        // Square is ** in JS
        // if(c === '^') c = '**'

        // if C=Clear is pressed ?
        if(c === 'C') setTxt('')

        // if Solve (=) is pressed
        else if(c === '=') {
            try {
                // Replace ^ with ** for power operation
                const _txt = txt.replace(/\^/g, '**')
                setTxt(eval(_txt))
            }
            catch (err) {
                console.log(err)
                setTxt('ERROR')
            }
        }

        // Backspace (Del one char from right)
        else if(c === '<') {
            let s = txt.toString()
            setTxt(s.substring(0, s.length-1))
        }

        // else just append the character
        else {
            // if prev operation was an ERROR
            if(txt === 'ERROR') {
                setTxt(c)
            }
            else setTxt(s => s+c)
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.innerContiner}>
                <Display txt={txt} />
                <Buttons onBtnClick={btnClicked} />
            </div>
        </div>
    )
}

export default Calc