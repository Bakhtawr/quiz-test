import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, TextField, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import quizQuestions from './quizQuestions'; 
import './Test.css';
import goodluck from "../assets/good-luck.gif";


const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [usernameEntered, setUsernameEntered] = useState(false); 
  const [selectedOptions, setSelectedOptions] = useState(Array(quizQuestions.length).fill(-1)); 

  const handleAnswerClick = () => {
    if (selectedOptions[currentQuestion] === -1) {
      alert('Please select an option to proceed.');
      return;
    }

    if (selectedOptions[currentQuestion] === quizQuestions[currentQuestion].correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    if (username.trim() === '') {
      alert('Please enter a username to start the quiz.');
      return;
    }
    setUsernameEntered(true);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUsername('');
    setQuizCompleted(false);
    setUsernameEntered(false); 
    setSelectedOptions(Array(quizQuestions.length).fill(-1)); 
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleOptionChange = (optionIndex) => (event) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  if (quizCompleted) {
    return (
      <div className='test-result'>
        <Typography variant="h5" gutterBottom>
          Quiz Completed
        </Typography>
        <Typography variant="body1" gutterBottom>
          {username}! Your score is {score}/{quizQuestions.length}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleResetQuiz}>
          Reset Quiz
        </Button>
      </div>
    );
  }

  if (!usernameEntered) {
    return (
      <Card variant="outlined" style={{ }}>
        <img src={goodluck} alt="Math Image" width="100px" />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Enter Username to Start the Quiz
          </Typography>
          <TextField
            label="Enter Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            style={{ marginTop: 20, width: '100%' }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={handleStartQuiz}
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="outlined" style={{ maxWidth: 600, margin: 'auto', marginTop: 50 }}>
      <CardContent className="question-container">
        <Typography variant="h5" gutterBottom>
          Mark the Correct Answers  --  Question {currentQuestion + 1}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {quizQuestions[currentQuestion].question}
        </Typography>
        <FormControl component="fieldset">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedOptions[currentQuestion] === index}
                  onChange={handleOptionChange(index)}
                />} label={option}/>
          ))}
        </FormControl><br></br>
        <div className='text-center'>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          onClick={handleAnswerClick}>
          Next
        </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Test;
