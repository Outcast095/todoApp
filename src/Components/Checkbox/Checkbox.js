import React from 'react';
import styles from "./Checkbox.module.css";

function Checkbox (props) {

    const onchange = (event) => {
        props.onChange(event.target.checked)
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={props.checked}
                    className={styles.RealCheckbox}
                    onChange={onchange}
                />
                <span className={styles.CustomCheckbox}></span>
            </label>
        </div>
    )

}

export default Checkbox

