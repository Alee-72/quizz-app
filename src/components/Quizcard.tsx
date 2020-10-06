import React, { useState } from 'react'


export const Quizcard: React.FC<any> = ({question,options,callback}) => {
  let [selection , setselection] = useState("");
  const selecthandle = (el: any) => {
       setselection(el.target.value);
  }
  
    return (
          
        <div className='container'>
            <div className='content'>
           <div><h3>{question}</h3></div>
           <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e,selection)}>
               {options.map( (el: string,ind: number) => {
                       return(
                       <div key={ind}>
                      <h4> <label>
                           <input type='radio' value={el} name='el'
                            onChange={selecthandle}
                            checked={selection===el}
                            required />{el}
                        </label></h4>
                        </div>
                       )
               }
                )}


               <input type='submit' className='btn' />
           </form>
           </div>
        </div>
    )
}