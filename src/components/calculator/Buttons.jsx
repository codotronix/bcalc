import styles from "./Calc.module.css"

const BUTTON_CHARS_NUMS = [
    'C', '^', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '<', '='
] 

const Buttons = props => {
    const { onBtnClick } = props 

    return (
        <div className={styles.btnsPanel}>
            {
                BUTTON_CHARS_NUMS.map(b => 
                <div key={b} className={styles.btn} onClick={() => onBtnClick(b)}>
                    { b }
                </div>)
            }
        </div>
    )
}

export default Buttons