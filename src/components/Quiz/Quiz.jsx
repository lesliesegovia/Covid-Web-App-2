import React, { useState } from "react";
import "./quiz.css";

function Quiz(){
    
    const [score, setScore] = useState(0);
    console.log(score);
    
    function increase(){
        setScore(prevScore => prevScore + 1);
    }
    
    function decrease(){
        setScore(prevScore => prevScore - 1);
    }

    function handleChnage(e){
        let isChecked = e.target.checked;

        isChecked ? increase() : decrease(); 

    }

    function quizResult(){
        // score <= 3 ? alert("Based on your answer, stay home") : console.log("get tested"); 
        
        if (score <= 4) {
            alert("Based on your result, you should stay home and monitor for symptoms if they develop. If so, follow CDC guidelines.");
        } else {
            // promt popup window (cancel or yes)
            if(window.confirm("Based on your answers, would you like to be taken to our testing sites page?")) {
                console.log("taking you to new page..."); // remove anytime
                // route to page
            }
            // no need for else statement because the window prompts a cancel option
        }
        
    }
    
  
    return (
        <div className="quiz">
            <h1>Should I get tested for Covid-19 ?</h1>
            <p>Take this short quiz to see if it is better for you to quarentine or get tested.</p>

            <form>
            <p>*If an option does <b>not</b> apply to you, please do not check the box. </p>
            <p id="list-question">Recall any locations or people you have been near: </p>
                <label className="container">You have had close contact with someone diagnosed with COVID-19 or been notified that you may have been exposed to it
                <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                <span className="checkmark"></span>
                </label>
                <label className="container">You live in a long-term care facility, nursing home, or homeless shelter?
                <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                <span className="checkmark"></span>
                </label>
                <label className="container">In the last two weeks, you worked or volunteered in a healthcare facility or as a first responder. Healthcare facilities include a hospital, other medical setting (including dental care setting), or long-term care facility.
                <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                <span className="checkmark"></span>
                </label>
                <label className="container">In the two weeks before you felt sick, you cared for or had close contact (within 6 feet of an infected person for at least 15 minutes) with someone with symptoms of COVID-19, tested for COVID-19, or diagnosed with COVID-19?
                <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                <span className="checkmark"></span>
                </label> 

                <p id="list-question">Had or are experiencing these common symptoms:</p>
                    <label className="container"> Fever or chills
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label> 
                    <label className="container">Coughing
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label> 
                    <label className="container">Shortness of Breath
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label> 

                <p id="list-question">Had or are experiencing: </p>
                    <label className="container"> At least 1 of the <b>other</b> symptoms listed above this quiz?
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label> 

                <p id="list-question">If you checked any of the previous boxes above, would you say your symptoms are: :</p>
                    <label className="container"> Mild: Can perform activities of daily living (such as cook, shower, eat and drink) without feeling short of breath.
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label> 
                    <label className="container">Moderate: Have difficulty breathing (or shortness of breath) and can only perform limited activities of daily living such as eat and shower.
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="container">Severe: Have shortness of breath and/or rapid breathing with severely limited ability or inability to perform activities of daily living.
                    <input type="checkbox" onChange={(e) => handleChnage(e)}/>
                    <span className="checkmark"></span>
                    </label>
        </form>
            <button className="check-button" onClick={quizResult}>Check</button>
        </div>
    );
}

export default Quiz;