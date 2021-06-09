import React, {useEffect, useRef, useState} from "react";
import styles from '../styles/Quiz.module.scss'
import Image from "next/image";
import {Question} from "../components/Question/Question";
import axios from "axios";

function Quiz() {
    const [timer, setTimer] = useState(60);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    const checkAnswer = (e, choice) => {
        e.preventDefault()
        // axios.get("http://localhost:8000/answer/")
        // .then(function (response) {
        //     const find = response.data.cast.find(item => item.id === actorId);
        //     const result = !!find;
        //     res.status(200).json(result);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
    }
    return (
        <div className={'main'}>
            {timer !== 0 && <span className={styles.timer}>Time : {timer}</span>}
            {timer !== 0 && <Question actor="Brad Pitt" movie="Fight Club"/>}
            {timer !== 0 && <div className={styles.containerBtn}>
                <Image src="/remove.png" width={60} height={60} alt="" className={styles.yes} onClick={(e)=>{checkAnswer(e , false)}}/>
                <Image src="/check.png" width={60} height={60} alt="" className={styles.no} onClick={(e)=>{checkAnswer(e , true)}}/>
            </div>}
            {timer === 0 && <div className={styles.score}>{score}</div>}
        </div>
    )
}
Quiz.getInitialProps = async () => {
    const res1 = await fetch('http://localhost:8000/movies');
    const movies = await res1.json();

    const res2 = await fetch('http://localhost:8000/actors')
    const actors = await res2.json()

    return { movies: movies, actors: actors }
}

export default Quiz