import React, { useState, useEffect } from "react";
import Balloon from "../Balloon/Balloon";
import Constants from "../../utils/constants";
import "./BalloonGrid.css";

const Questions = [
  {
    ques: "What is the fundamental right in India that ensures children's right to education?",
    options: ["Right to Equality", "Right to Freedom", "Right to Education"],
    answer: "Right to Education",
  },
  {
    ques: "Which organization in India is responsible for implementing child rights under the Juvenile Justice Act?",
    options: ["UNICEF", "CWC", "NCPCR"],
    answer: "CWC",
  },
  {
    ques: "What is the legal age for employment in India as per the Child Labour (Prohibition and Regulation) Act?",
    options: ["14 years", "16 years", "18 years"],
    answer: "14 years",
  },
  {
    ques: "What is the name of the program in India that aims to provide free and nutritious meals to school children?",
    options: ["Mid-Day Meal Scheme", "Anganwadi Scheme", "Sarva Shiksha Abhiyan"],
    answer: "Mid-Day Meal Scheme",
  },
  {
    ques: "Which year was the National Policy for Children adopted by the Government of India?",
    options: ["2000", "2005", "2013"],
    answer: "2013",
  },
  {
    ques: "What is the name of the act that prohibits child marriage in India?",
    options: ["Child Marriage Restraint Act", "Prohibition of Child Marriage Act", "Child Marriage Prevention Act"],
    answer: "Prohibition of Child Marriage Act",
  },
  {
    ques: "Which international treaty outlines the rights of the child, which India ratified in 1992?",
    options: ["Universal Declaration of Human Rights", "United Nations Convention on the Rights of the Child", "International Covenant on Civil and Political Rights"],
    answer: "United Nations Convention on the Rights of the Child",
  },
  {
    ques: "What is the main objective of the Integrated Child Development Services (ICDS) program in India?",
    options: ["Promoting primary education", "Providing healthcare to adults", "Improving the health and nutrition of children"],
    answer: "Improving the health and nutrition of children",
  },
  {
    ques: "In India, what is the legal age for marriage for boys and girls?",
    options: ["18 years for both", "21 years for boys, 18 years for girls", "21 years for both"],
    answer: "18 years for girls and 21 years for boys",
  },
  {
    ques: "What is the name of the government scheme in India that aims to provide financial security to the girl child?",
    options: ["Beti Bachao Beti Padhao", "Sukanya Samriddhi Yojana", "Swachh Bharat Abhiyan"],
    answer: "Sukanya Samriddhi Yojana",
  },
  {
    ques: "Which organization in India is responsible for ensuring the rights and welfare of children in need of care and protection?",
    options: ["UNICEF", "Child Welfare Committee (CWC)", "National Commission for Protection of Child Rights (NCPCR)"],
    answer: "Child Welfare Committee (CWC)",
  },
  {
    ques: "What is the penalty for employing a child in hazardous occupations under the Child Labour (Prohibition and Regulation) Act?",
    options: ["Imprisonment up to 1 year", "Fine up to Rs. 20,000", "Both imprisonment and fine"],
    answer: "Both imprisonment and fine",
  },
  {
    ques: "Which organization is responsible for the implementation of the Right to Education (RTE) Act in India?",
    options: ["Ministry of Education", "National Council of Educational Research and Training (NCERT)", "State Governments"],
    answer: "State Governments",
  },
  {
    ques: "What is the name of the government program in India that provides financial support for the education of children from disadvantaged backgrounds?",
    options: ["Sarva Shiksha Abhiyan", "Pradhan Mantri Vidya Lakshmi Yojana", "Rashtriya Madhyamik Shiksha Abhiyan"],
    answer: "Pradhan Mantri Vidya Lakshmi Yojana",
  },
  {
    ques: "What is the legal age for voting in India?",
    options: ["16 years", "18 years", "21 years"],
    answer: "18 years",
  },
  {
    ques: "Which organization in India is responsible for the welfare and development of children with disabilities?",
    options: ["National Commission for Protection of Child Rights (NCPCR)", "National Trust", "Child Welfare Committee (CWC)"],
    answer: "National Trust",
  },
  {
    ques: "In India, what is the maximum punishment for child trafficking under the Immoral Traffic (Prevention) Act?",
    options: ["Imprisonment for life", "Imprisonment for 10 years", "Fine of Rs. 1 lakh"],
    answer: "Imprisonment for life",
  },
  {
    ques: "What is the name of the program in India that provides healthcare services to pregnant women and children up to 6 years of age?",
    options: ["Swachh Bharat Abhiyan", "Janani Suraksha Yojana", "Anganwadi Scheme"],
    answer: "Janani Suraksha Yojana",
  },
  {
    ques: "In India, what is the legal age for consuming alcohol?",
    options: ["18 years", "21 years", "25 years"],
    answer: "18 years",
  },
  {
    ques: "What is the main objective of the Juvenile Justice (Care and Protection of Children) Act, 2015?",
    options: ["Preventing juvenile delinquency", "Providing care and protection to children in conflict with the law", "Promoting child labor"],
    answer: "Providing care and protection to children in conflict with the law",
  },
  {
    ques: "Which organization is responsible for the implementation of the Mid-Day Meal Scheme in India?",
    options: ["Ministry of Education", "Food Corporation of India", "State Governments"],
    answer: "State Governments",
  },
  {
    ques: "What is the name of the government program in India that aims to eliminate open defecation and improve sanitation facilities?",
    options: ["Pradhan Mantri Awas Yojana", "Swachh Bharat Abhiyan", "Janani Suraksha Yojana"],
    answer: "Swachh Bharat Abhiyan",
  },
  {
    ques: "Which constitutional amendment added Article 21A, providing the right to education as a fundamental right?",
    options: ["42nd Amendment", "86th Amendment", "97th Amendment"],
    answer: "86th Amendment",
  },
  {
    ques: "What is the name of the government program in India that aims to improve the nutritional status of children below the age of 6?",
    options: ["Sukanya Samriddhi Yojana", "Integrated Child Development Services (ICDS)", "Beti Bachao Beti Padhao"],
    answer: "Integrated Child Development Services (ICDS)"
  }
];

const BalloonGrid = ({ numberOfBalloons}) => {
  const [activeBalloons, setActiveBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gridColor, setGridColor] = useState(Constants.balloonColor);
  const [toastHit, setToastHit] = useState(0);
  const [showOptions, setShowOptions] = useState(true);

  useEffect(() => {
    if (!gameStarted) {
      startGame();
    }

    const timer = setTimeout(() => {
      setShowOptions(false);
      clearTimeout(timer);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleBalloonClick = (id, answerIndex) => {
    if (gameStarted && activeBalloons.includes(id) && !activeBalloons.includes("answered")) {
      if (answerIndex === Questions[currentQuestionIndex].options.indexOf(Questions[currentQuestionIndex].answer)) {
        setGridColor("red");
        setScore(score + 1);
        setToastHit(toastHit + 1);
      } else {
        const wrongAnswerIndex = Questions[currentQuestionIndex].options.indexOf(Questions[currentQuestionIndex].answer);
        const wrongAnswerElement = document.getElementById(wrongAnswerIndex.toString());
        if (wrongAnswerElement) {
          wrongAnswerElement.style.color = "red";
        }
      }
  
      setActiveBalloons([]);
      setActiveBalloons(["answered"]);
  
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex < Questions.length) {
            setGridColor(Constants.balloonColor);
            setShowOptions(true);
            setActiveBalloons([0, 1, 2]);
            const correctAnswerElement = document.getElementById(answerIndex.toString());
            if (correctAnswerElement) {
              correctAnswerElement.style.color = "lightgreen";
            }
            return nextIndex;
          } else {
            setGameStarted(false);
          }
        });
      }, 1000);
    }
  };
  
  
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setActiveBalloons([]);
    setGridColor(Constants.balloonColor);
    setShowOptions(true);
    setActiveBalloons([0, 1, 2]);
  };

  const currentQuestion = Questions[currentQuestionIndex];
  const balloons = [];

  for (let i = 0; i < numberOfBalloons; i++) {
    balloons.push(
      <Balloon
        key={i}
        id={i}
        color={gridColor}
        isActive={activeBalloons.includes(i)}
        onClick={() => handleBalloonClick(i, i)}
      >
        {showOptions && (
        <p id={i} className={`balloon-grid-option${i}`}>{currentQuestion.options[i]}</p>
      )}
      </Balloon>
    );
  }

  return (
    <div className="balloon-grid-wrapper">
      <h1
      className="balloon-grid-question">{currentQuestion.ques}</h1>
      <div className="balloon-grid">
        <div className="answer-container">
          <p className="balloon-grid-option1">{currentQuestion.options[0]}</p>
        </div>
        <div className="answer-container">
          <p className="balloon-grid-option2">{currentQuestion.options[1]}</p>
        </div>
        <div className="answer-container">
          <p className="balloon-grid-option3">{currentQuestion.options[2]}</p>
        </div>  
        {balloons}
      </div>
    </div>
  );
};

export default BalloonGrid;
