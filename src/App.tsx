import React, { useEffect,useState } from "react";
import { Quizcard } from "./components/Quizcard";
import material from './services/material.json'
import { actualdata } from "./types/Quiztypes";
import './App.css';
import logo1 from './logo1.svg';
import { Header } from "./components/Header";




function App() {
  navigator.serviceWorker.register('/firebase-messaging-sw.js');
  

   let [quiz, setquiz] = useState <actualdata[]>([]);
   let [current, setcurrent] = useState(0);
   let [score, setscore] = useState(0);
   let [result, setresult] = useState(false);

  useEffect(()=>{
    setquiz(material);
   
  },[])
  
if(!quiz.length) return <div className='load'> Loading<div> <img src={logo1} alt="Loading" /> </div></div>

const handler = (ev: React.FormEvent<EventTarget>, userAns: string) => {
  ev.preventDefault();
  const currentanswer = quiz[current].answer;
  if(userAns === currentanswer){
    setscore(++score);
    console.log('Passed')
  }
  else{
    console.log('Failed')
  }

  if(current !== quiz.length-1)
  setcurrent(++current);
  else{
    alert('Quiz Completed');
    setresult(true);

  }
  
}
if(result){
  return(
    <div className='container'>
        <div className='content'>
        <h2>Result</h2>
        <h3>Your result is {score} out of {quiz.length}</h3>
        </div>
    </div>
  )
}





  return(
   <div> 
     <Header/>
  
      <Quizcard question={quiz[current].question}
       options={quiz[current].options} callback={handler} />
       
    
   </div>
   
   )
}

export default App;