import styles from "./Calc.module.css"

const Display = ({ txt }) => {
    return (
        <div className={styles.display}>
            {txt}
        </div>
    )
}

export default Display