import React from 'react'
import "../index.css"
import QuizPage from "../Components/QuizPage";
import { QuizProvider } from "../Contexts/Quiz";
import Nav from "../Components/Nav"



const InternetArt = () => {
  return (
    <div>
        <Nav/>
           


        <QuizProvider>
        <QuizPage />
            
            </QuizProvider>


    </div>
  )
}

export default InternetArt