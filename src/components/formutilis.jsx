import React, { useState } from 'react'



function formutilis({title}) {
 const [text,settext] =useState("Enter Your Name");

    const handleClick=()=>
    {
        let updatetext=text.toUpperCase();
        settext(updatetext)
    }
    const handleChange=(event)=>
    {
        settext(event.target.value)
    }

    const wordCount = () => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
      };
      const letterCount = () => {
        return text.replace(/\s/g, '').length;
      };

    return (
        <React.Fragment>
            <div className="container mt-5">

                <div className="mb-3">
                    <h1>{title}</h1>
                    <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleClick} >Uppercase</button>
                <p><strong>Word :</strong> {wordCount()} Letter:{letterCount()}</p>
            </div>
        </React.Fragment>
    )
}

export default formutilis
