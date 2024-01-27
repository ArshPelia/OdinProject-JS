console.log("Script Started")
document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#home').addEventListener('click', () => load_home());
    document.querySelector('#menu').addEventListener('click', () => load_menu());
    document.querySelector('#about').addEventListener('click', () => load_about());
  
    // By default, load the inbox
    load_home();
  });

function load_home() { 
    console.log('Opening Home: ')
    // Show the mailbox and hide other views
    document.querySelector('#home-view').style.display = 'block';
    document.querySelector('#menu-view').style.display = 'none';
    document.querySelector('#about-view').style.display = 'none';

    document.querySelector('#home-view').innerHTML = `<h1>Arsh's Restaurant</h1>`;

    try {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('intro');
        contentDiv.style.backgroundColor = 'gray'

        const intro = document.createElement('h3');
        const hours = document.createElement('h3');
        const location = document.createElement('h3');

        // Set the innerHTML of from, sub, and time elements
        intro.innerHTML = `Intro`;
        hours.innerHTML = `Hours`;
        location.innerHTML = `Location`;

        // Append from, sub, and time elements to the contentDiv
        contentDiv.appendChild(intro);
        contentDiv.appendChild(hours);
        contentDiv.appendChild(location);

        document.querySelector('#home-view').append(contentDiv);
        

        }catch(err){
            console.error(err)
        }
}

function load_menu() { 
    console.log('Opening Menu: ')
    // Show the mailbox and hide other views
    document.querySelector('#home-view').style.display = 'none';
    document.querySelector('#menu-view').style.display = 'block';
    document.querySelector('#about-view').style.display = 'none';

    document.querySelector('#menu-view').innerHTML = `<h1>Menu</h1>`;

    try {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('menu');
        contentDiv.style.backgroundColor = 'gray'

        const intro = document.createElement('h3');
        const hours = document.createElement('h3');
        const location = document.createElement('h3');

        // Set the innerHTML of from, sub, and time elements
        intro.innerHTML = `Item 1`;
        hours.innerHTML = `Item 2`;
        location.innerHTML = `Item 3`;

        // Append from, sub, and time elements to the contentDiv
        contentDiv.appendChild(intro);
        contentDiv.appendChild(hours);
        contentDiv.appendChild(location);

        document.querySelector('#menu-view').append(contentDiv);
        

        }catch(err){
            console.error(err)
        }
}


console.log("Script Ended")
