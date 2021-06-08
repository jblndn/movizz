import React from "react";
import styles from '../styles/Quiz.module.scss'
import Image from "next/image";

function Quiz() {
    return (
        <div className={'main'}>
            <p className={styles.answer}>
                Did &nbsp;
                <span className={styles.up}>
                    Brad Pitt
                </span>
                &nbsp;
                play in &nbsp;
                <span className={styles.up}>
                    Fight Club
                </span>
                &nbsp;
                ?
            </p>
            <div className={styles.containerBtn}>
                <Image src="/remove.png" width={60} height={60} alt="" className={styles.yes}/>
                <Image src="/check.png" width={60} height={60} alt="" className={styles.no}/>
            </div>
        </div>
    )
}

export default Quiz