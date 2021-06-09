import React, {useEffect, useRef, useState} from "react";
import styles from '../styles/Quiz.module.scss'
import Image from "next/image";
import {Question} from "../components/Question/Question";
import axios from "axios";
import {Button} from "../components/Button/Button";

function Quiz({movies, actors}) {
    const [timer, setTimer] = useState(30);
    const [score, setScore] = useState(0);
    const [indexRandomMovies, setIndexRandomMovies] = useState(Math.floor(Math.random() * movies.length));
    const [indexRandomActors, setIndexRandomActors] = useState(Math.floor(Math.random() * actors.length));

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    const setIndex = ()=> {
        setIndexRandomMovies(Math.floor(Math.random() * movies.length))
        setIndexRandomActors(Math.floor(Math.random() * actors.length))
    }

    const checkAnswer = (e, choice) => {
        e.preventDefault();
        const actorId = actors[indexRandomActors].id;
        const movieId = movies[indexRandomMovies].id;

        axios.get('http://localhost:8000/answer/' + actorId + '/' + movieId)
            .then(function (response) {
                response.data === choice ? setScore(score + 1 ) : null
            })
            .catch(function (error) {
                console.log(error);
            })

        setIndex();
    }
    const reset = ()=> {
        setTimer(30);
        setScore(0)
    }

    return (
        <div className={'main'}>
            {timer !== 0 && <span className={styles.timer}>Time : {timer}</span>}
            {timer !== 0 && <Question actor={actors[indexRandomActors].name} movie={movies[indexRandomMovies].original_title} />}
            {timer !== 0 && <div className={styles.containerBtn}>
                <Image src="/remove.png" width={60} height={60} alt="" className={styles.yes} onClick={(e)=>{checkAnswer(e , false)}}/>
                <Image src="/check.png" width={60} height={60} alt="" className={styles.no} onClick={(e)=>{checkAnswer(e , true)}}/>
            </div>}
            {timer === 0 && <h2 className={styles.over}>The quiz is over</h2>}
            {timer === 0 && <div className={styles.score}>Your score : <span className={styles.number}>{score}</span></div>}
            {timer === 0 && <Button text={'Retry'} reset={reset}/>}
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