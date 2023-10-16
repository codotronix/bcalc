import styles from "./Calc.module.css"

const Display = ({ txt }) => {
    return (
        <div className={styles.display}>
            {txt || '0'}
        </div>
    )
}

export default Display