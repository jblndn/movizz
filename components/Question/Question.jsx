import React from "react";
import styles from './Question.module.scss'

export function Question({actor, movie}) {
    return (
        <div>
            <p className={styles.answer}>
                Did &nbsp;
                <span className={styles.up}>
                    {actor}
                </span>
                &nbsp;
                play in &nbsp;
                <span className={styles.up}>
                    {movie}
                </span>
                &nbsp;
                ?
            </p>
        </div>
    )
}