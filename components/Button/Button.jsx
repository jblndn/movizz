import React from "react";
import styles from './Button.module.scss'
import Link from "next/link";

export function Button({text, href}) {
    return (
        <div
            className={styles.button}
        >
            <Link
                href={href}
            >
                {text}
            </Link>
        </div>
    )
}