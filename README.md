# 06 Server-Side APIs: Weather Dashboard

## Summary 

The purpose of the assignment was to create a timed quiz which leveraged Javascript logic, functions, and variables which dynamically updated the user's score based on their performance, ultimately letting them save their initals and score.

```
User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Site Picture
![Site](Assets/06-server-side-apis-homework-demo.png)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS framework directed at responsive, mobile first front-end web development
- JavaScript - provides dynamic interactivity on HTML documents
- jQuery - easy to use API library simplifying Javascript actions
- Server-Side API - utilized 3rd-party application APIs to retrieve data to incorporate into the site
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

Below is an example of a block of code in the JS file where most of the logic behind the quiz is stored. First I created a function enacted on the user's click on an answer choice checking it against the answer key to the question then displayed whether it was correct or incorrect in the result field and added or subtracted points accordingly. 

```js
answersElement.addEventListener("click", function(event) {
    console.log("answer chosen");
    var element = event.target;
    if (element.textContent !== quizQuestions[i].correct) {
        console.log(element)
        console.log("Wrong Answer")
        resultElement.textContent = "Incorrect!";
        console.log(resultElement.textContent)
        document.getElementById("result").style.color = 'red';            
        console.log(resultElement.style.color)

    } else {
        console.log(element)
        console.log("Right Answer")
        resultElement.textContent = "Correct!";
        console.log(resultElement.textContent)
        document.getElementById("result").style.color = 'green';            
        console.log(resultElement.style.color)
        userScore += 10
        console.log(userScore)

    }
    if (i < quizQuestions.length - 1) {
    i++;
    quiz();
    } else {
    clearInterval(timeInterval)    
    alert("Quiz Complete!");
    userScore += secondsLeft
    console.log(userScore)
    alert(userScore);
    endQuiz();
    restartQuiz();
    }
});
```

## Author Links

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson/6-weather-dashboard)

Special thanks to Mahisha Gunasekaran, Kerwin Hy, and Jeremy Cantwell for their input and assistance with the assignment!