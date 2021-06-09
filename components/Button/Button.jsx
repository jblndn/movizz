import React from "react";
import styles from './Button.module.scss'

export function Button({text, href, reset}) {
    return (
        <div className={styles.container}>
            {!reset &&
            <a
                href={href}
                className={styles.link}
            >
                {text}
            </a>
            }
            {reset &&
            <button
                onClick={()=> {reset(60)}}
                className={styles.button}
            >
                {text}
            </button>}
        </div>
    )
}