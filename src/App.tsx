import React, { useEffect,useState } from "react";
import { Quizcard } from "./components/Quizcard";
import { getdata } from "./services/Quizservice";
import { actualdata } from "./types/Quiztypes";
import './App.css';
import logo1 from './logo1.svg';
import { Header } from "./components/Header";



function App() {
   let [data, setdata] = useState <actualdata[]>([]);
   let [current, setcurrent] = useState(0);
   let [score, setscore] = useState(0);
   let [result, setresult] = useState(false);

  useEffect(()=>{
    async function fetchdata() {
      const questions: actualdata[] = await getdata(5,'hard');
     setdata(questions);

    }
    fetchdata();
  },[])
  
if(!data.length) return <div className='load'> Loading<div> <img src={logo1} alt="Loading" /> </div></div>

const handler = (ev: React.FormEvent<EventTarget>, userAns: string) => {
  ev.preventDefault();
  const currentanswer = data[current].answer;
  if(userAns === currentanswer){
    setscore(++score);
    console.log('Passed')
  }
  else{
    console.log('Failed')
  }

  if(current !== data.length-1)
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
        <h3>Your result is {score} out of {data.length}</h3>
        </div>
    </div>
  )
}




  return(
   <div> 
     <Header/>
  
      <Quizcard question={data[current].question}
       options={data[current].options} callback={handler} />
   </div>
   )
}

export default App;