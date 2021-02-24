import Head from 'next/head'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rannya7x.png"alt="Rayana Almeida" />
            <div>
                <strong>Rayana Almeida</strong>
                <p> <img src="icons/level.svg" alt="level"/> Level 1</p>
            </div>
        </div>
    )
}