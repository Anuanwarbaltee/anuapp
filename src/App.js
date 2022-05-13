import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'DOM stand for _____________  .  ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Document Object Module', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'HTML stand for  _____________  . ?',
			answerOptions: [
				{ answerText: 'HTML', isCorrect: false },
				{ answerText: 'CSS', isCorrect: false },
				{ answerText: 'Hypertext Markup Language', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'CSS stand for  _____________  .  ?',
			answerOptions: [
				{ answerText: 'HTML', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'casecading style sheet', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'ALU stand for  _____________  .  ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Arthimatic Logic Unit', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'PSL stand for   _____________  . ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Pakistan Supper Leage', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'OLX stand for  ______________________  .  ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'On-line-Exchange', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'LU stand for  _______________________  . ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Logic Unit', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},

		{
			questionText: 'Who is CEO of Tesla  ______________  . ?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company  _____________  . ?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there  _____________  . ?',
      answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
 
 
  
   const [currentQustion , setcurrentQustion] = useState(0);
   const [score, setscore] = useState(0);
   const [clicked, setClicked] = useState(false);
   const [count, setcount] = useState(false);


  //  const onclickfunction = (i) => {

  //   if(i == true){
  //   setscore(count + 1)
  // }

  // setClicked(true);
 // const nextQution = currentQustion + 1;
 // if (nextQution < questions.length) {
 // 	setcurrentQustion(nextQution);
 // }
 // else {
   
 // 	setscore(true);
 // }

// };

   const handleNextQuestion =() =>{
     setClicked(false)
     if(currentQustion < questions.length - 1){
     setcurrentQustion(currentQustion + 1)
   }else{
     setcount(true);
   }
  
   };

   const onclickfunction = (i) => {

	     if(i == true){
			 setscore(score  + 1)
		 }

     setClicked(true);
	}
	return (
		<div className='app container  bg-secondary py-4 w-100'>
			{count? (
				<div className='score-section  text-light fw-bold '>You scored {score} out of {questions.length}</div>
			) : (
				<>
        
          <h3>QUiz APP</h3>
					<div className='question-section primarblue p-5 mt-4  shadow w-100 d-flex justify-content-between'>
          <div className='question-text'>{questions[currentQustion].questionText}</div>
            <div className='question-text text-white fs-bold'>
							<span> {currentQustion + 1}</span>/{questions.length}
						</div>
						
					</div>
					<div className='answer-section  py-4 d-flex  '>
					{questions[currentQustion].answerOptions.map((answerOptions)=> 
					<button className='btn btn-danger m-1 p-2 w-50 p-3  ' onClick={() => onclickfunction(answerOptions.isCorrect) }>{answerOptions.answerText}</button>)}
					</div>
           <div className='d-flex justify-content-end' >
            <button className='btn primarblue text-light   m-1 btn-lg shadow p-3  ' onClick={handleNextQuestion}>Next</button>
           </div>
				</>
			)}
		</div>
	);
}