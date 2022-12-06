import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import headerstyles from '../styles/Header.module.css'
import React, { useEffect } from "react";

let SERVER_URL = "http://localhost:3000"

let stdid = 20182651, pwd = "sndnrn12!";

if (typeof window !== "undefined") {
  window.onload = () => {
  }

  window.onclick = (e) => {
    if(!e.target.matches('#userInfoBtn')) {
      let dropdowns = document.querySelector('#userInfoDiv');
  
      if (dropdowns.classList.contains(headerstyles.show)) {
        let dropbtn = document.querySelector('#userInfoBtn')
        dropdowns.classList.remove(headerstyles.show);
        dropbtn.style.background = 'rgba(190, 190, 190, 0.0)';
      }
    } else {
      console.log("asd")
      let dropdowns = document.querySelector('#userInfoDiv');
      let dropbtn = document.querySelector('#userInfoBtn')
      dropdowns.classList.toggle(headerstyles.show);
      if(dropdowns.classList.contains(headerstyles.show)) {
        dropbtn.style.background = 'rgba(190, 190, 190, 0.6)';
      } else {
        dropbtn.style.background = 'rgba(190, 190, 190, 0.0)';
      }
    }
  }
}

const changeHeight = (obj) => {
  if(obj.view === "Subject") {
    let view = document.querySelector("#subjectBoard");
    view.style.height = obj.height + "px";
  } else if(obj.view === "Notice") {
    let view = document.querySelector("#noticeBoard");
    view.style.height = obj.height + "px";
  } else if(obj.view === "Lecture") {
    let view = document.querySelector("#lectureBoard");
    view.style.height = obj.height + "px";
  } else if(obj.view === "Calendar") {
    let view = document.querySelector("#calendarBoard");
    view.style.height = obj.height + "px";
  }
}

const GetMessage = () => {
  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.origin === SERVER_URL && e.data) {
        if(e.data.head === "changeHeight") {
          changeHeight(e.data.body);
        }
      }
    }, false);
  }, []);
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LMSSU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetMessage />

      <header id="header">
        <nav role="navigation">
          <div className={headerstyles.container}>

            <a className={headerstyles.logo} href="/">
              <img src="https://class.ssu.ac.kr/customs/main/header_logo.png?v=123213"/>
            </a>

            <div className={headerstyles.div_grow}></div>

            <div className={headerstyles.dropdown}>
              <div id="userInfoBtn" className={headerstyles.dropbtn}>
                <img src="/images/user.png" alt=""/>
                <div>
                  <p>컴퓨터학부</p>
                  <p>20182618</p>
                  <p>최규현</p>
                </div>
              </div>
              <div id="userInfoDiv" className={headerstyles.dropdown_content}>
                <div className={headerstyles.dropdown_content_list}>
                  <p className={headerstyles.dropdown_content_item}>
                    내 정보
                  </p>
                </div>
                <div className={headerstyles.dropdown_content_logout}>
                  <p className={headerstyles.logout_btn}>
                    로그아웃
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.board_left}>
          <iframe src={"/calendar?stdid="+stdid+"&pwd="+pwd} id="calendarBoard" className={styles.board_calendar} frameBorder="0" scrolling="no" />
          <iframe src={"/subject?stdid="+stdid+"&pwd="+pwd} id="subjectBoard" className={styles.board_subject} frameBorder="0" scrolling="no" />
          <iframe src={"/notice?stdid="+stdid+"&pwd="+pwd} id="noticeBoard" className={styles.board_notice} frameBorder="0" scrolling="no" />
        </div>
        <div className={styles.board_right}>
          <iframe src={"/lecture?stdid="+stdid+"&pwd="+pwd} id="lectureBoard" className={styles.board_lecture} frameBorder="0" scrolling="no" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
