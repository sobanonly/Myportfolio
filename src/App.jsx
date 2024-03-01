import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div class="logo">
            <a href="#">SOBAN.</a>
        </div>
        <input type="checkbox" id="click"/>
        <label for="click" class="mainicon">
            <div class="menu">
                <i class="bi bi-list"></i>
            </div>
        </label>
        <nav>
            <a href="#" class="active">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </nav>
    </header>


    <section>
        <div class="main">
            <div class="detail">
                <h1><span>Hi, It's Me</span> <br/> I'm <span style="color:#244D61;">Soban</span></h1>
                <p>A passionate Worker <br/> with multi tasking skills. </p>
                <div class="social">
                    <a href="#"><i class="bi bi-github"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                </div>
            </div>
            <div class="images">
                <img src="/img/pass-image.png" alt="" width="100%"/ >
            </div>
        </div>
    </section>
    </>
  )
}

export default App
