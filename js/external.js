// EXTERNAL JavaScript

// Connect to NASA API
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

// Gather the data
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`);
    const data = await response.json();
    console.log('NASA APOD data', data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

// Display the data
const displayData = data => {
    document.getElementById('photo').src = data.hdurl;
    document.getElementById('title').textContent = data.title;
    document.getElementById('date').textContent = data.date;
    document.getElementById('caption').textContent = data.explanation;
}

// Grab the data
fetchNASAData();

//  Show a like
const like = document.querySelector('button');

like.addEventListener('click', updateContent);

function updateContent () {
    console.log(`like was clicked.`);
    like.style.backgroundColor = '#fcf0da'; 
    like.textContent = (`Like!`);
    like.style.backgroundColor = '#ffa500';
    like.style.fontWeight = 'bold';
}


// how get infinate scroll? make 10 items ... on scroll if goes on beyond viewport hieght somehow duplicate the entire section and load another 10? maybe with incrementing the class or id?
