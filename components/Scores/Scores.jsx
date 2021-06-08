import styles from './Scores.module.scss'
import React from "react";

export function Scores() {
    return (
        <div
            className={styles.containerScores}
        >
            <h2>
                Scores :
            </h2>
            <div className={styles.allScores}>

            </div>
        </div>
    )
}