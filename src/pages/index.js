import React, {useEffect} from 'react';
import styles from "./styles.module.css"

export default function MainPage() {
    useEffect(() => {
        document.getElementById('main_page').style.height = window.innerHeight + 'px';
        window.addEventListener(`resize`, () => {
            document.getElementById('main_page').style.height = window.innerHeight + 'px';
        })
    }, [])

    return (
        <div id={'main_page'}
             style={{
                 backgroundSize: 'cover',
                 backgroundImage: 'url("/img/bg.jpg")',
                 alignItems: 'center', display: 'flex',
                 flexFlow:'column'
        }}>
            <h1 style={{top:'20%',position:"relative", color:'white'}}>Welcome to S3-Storage!</h1>
            <br/>
            <h5 style={{top:'20%',position:"relative", color:'white'}}>
                Built with <a href={'https://docusaurus.io/'} className={styles.link}>Docusaurus</a>. Deploy on <a href={'https://app.netlify.com'} className={styles.link}>Netlify</a>.
            </h5>
            <h5 style={{top:'20%',position:"relative", color:'white'}}>
                Made by Brian
            </h5>
            <br/>
            <h6 style={{top:'20%',position:"relative"}}>
                <a href={'/10mb.test'} style={{textDecoration:'underline', color:'white'}}>Download Test</a>
            </h6>
        </div>
    )
}