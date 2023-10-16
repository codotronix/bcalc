import styles from "./Calc.module.css"
import Display from "./Display"
import Buttons from "./Buttons"

const Calc = () => {
    return (
        <div className={styles.root}>
            <div className={styles.innerContiner}>
                
                <Display txt="1234" />

                <Buttons />

            </div>
        </div>
    )
}

export default Calc