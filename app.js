window.addEventListener('DOMContentLoaded', function () {

    //Created div container and appended div container to the body
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);
    //Created div element
    let divBtn = document.createElement('div');
    //Created button element
    let button = document.createElement('button');
    //Created text for button
    let text = document.createTextNode('Get Sight Word!');
    //Appended text to the button element.
    button.appendChild(text);
    //Appended button element (with text) to the div
    divBtn.appendChild(button);
    //Apended div to div container
    //div.className = 'btn';
    divContainer.appendChild(divBtn);

    //Created global variable for array increment.
    let i;


    //created an array with sight words
    let words = [
        'Look',
        'Of',
        'Him',
        'Her',
        'She',
        'He',
        'Me',
        'My',
        'Zoo',
        'Went',
        'Come',
        'With',
        'Are',
        'Make',
        'Has',
        'Have',
        'That',
        'Do',
        'Up',
        'Down',
        'Car',
        'Said',
        'Stop',
        'At',
        'Here',
        'It',
        'You',
        'But',
        'In',
        'No',
        'Not',
        'Jump',
        'Play',
        'Like',
        'Am',
        'Run',
        'I',
        'Yes',
        'Is',
        'To',
        'Go',
        'Can',
        'Was',
        'On',
        'A',
        'See',
        'For',
        'And',
        'We',
        'Get',
        'Make',
        'My',
        'Said',
        'Use',
        'This',
        'The',
        'Bring',
        'Get',
        'Quack',
        'Vest',
        'With',
        'Out',
        'Eat',
        'Kite',
        'Has',
        'Zoo',
        'For',
        'As',
        'Be',
        'From',
        'Or',
        'They'

    ];


    //Created function to add square (div) each time button is clicked.
    function insertSquare() {

        //Call the getRandomWord() function and assign value to variable.
        let w = getRandomWord();
        let div = document.createElement('div');
        //Append random word variable to divText.
        let divText = document.createTextNode(w);
        div.className = 'divs';
        divContainer.appendChild(div);
        div.setAttribute('i', i);
        i++;

        //Created event listener when each div is clicked, calls getRandom (color) function.
        div.addEventListener('click', function () {
            div.style.backgroundColor = getRandom();

        });


        //Created event listener and called hover function.
        div.addEventListener('mouseover', function () {
            hover(div, divText)
        });

        //Created event listener and called remove hover function.
        //div.addEventListener('mouseout', function () {
        // removeHover(divText)
        // });


    }

    //Created event listener for Add Square button that calls insertSquare function.
    divBtn.addEventListener('click', insertSquare);


    //Created an array with random colors
    let colors = [
    
        'blue',
        'orange',
        'black',
        'green',
        'brown',
        'red',
    ];

    //created a function that take color array and randomly assign color.
    function getRandom() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    //Created a function to get a random sight word.

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }


    //Created function show div id when mouse hovers over div
    function hover(div, divText) {
        div.appendChild(divText);
    }

    //Created function to remove div id when mouse moves away from div
   // function removeHover(divText) {
        //divText.remove();

   // }


});