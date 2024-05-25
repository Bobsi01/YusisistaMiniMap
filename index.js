var defaultMap = document.querySelector('.defaultmap');
var logoimg = document.querySelector('.logoimg');
var informationheader = document.querySelector('.informationheader');
var informationdetails = document.querySelector('.informationdetails');
var infomationcontact = document.querySelector('.infomationcontact');
var building1floor1 = document.querySelector('.building1floor1');
// Function to handle button clicks and show floor buttons for building 1
function showFloorsForBuilding1() {
    // Hide both building buttons
    document.getElementById('building1').style.display = 'none';
    document.getElementById('building2').style.display = 'none';

    // Show building 1 floor buttons
    document.getElementById('button1').style.display = 'inline-block';
    document.getElementById('button2').style.display = 'inline-block';
    document.getElementById('button3').style.display = 'inline-block';
    document.getElementById('button4').style.display = 'inline-block';
    document.getElementById('button5').style.display = 'inline-block';
    document.getElementById('button13').style.display = 'inline-block';

    // Hide building 2 floor buttons
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button9').style.display = 'none';
    document.getElementById('button10').style.display = 'none';
    document.getElementById('button12').style.display = 'none';
}

// Function to handle button clicks and show floor buttons for Building 2
function showFloorsForBuilding2() {
    // Show building 2 floor buttons
    document.getElementById('button6').style.display = 'inline-block'; // Show 5th floor button
    document.getElementById('button7').style.display = 'inline-block';
    document.getElementById('button8').style.display = 'inline-block';
    document.getElementById('button9').style.display = 'inline-block';
    document.getElementById('button10').style.display = 'inline-block';
    document.getElementById('button13').style.display = 'inline-block'; // Show back button
    document.getElementById('button11').style.display = 'none'; // Hide building 1 button
    document.getElementById('button12').style.display = 'none'; // Hide building 2 button
    // Hide both building buttons
    document.getElementById('building1').style.display = 'none';
    document.getElementById('building2').style.display = 'none';
}

// Function to handle back button click
function goBack() {
    // Reset background color of all cells
    var cells = document.querySelectorAll('.floorindicator td');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = '';
    });

    // Hide floor buttons for both buildings
    for (let i = 1; i <= 13; i++) {
        document.getElementById('button' + i).style.display = 'none';
    }

    // Show both building buttons again
    document.getElementById('building1').style.display = 'inline-block';
    document.getElementById('building2').style.display = 'inline-block';

    // Hide the back button
    document.getElementById('button13').style.display = 'none';
}

// Function to handle button clicks and change background color
function searchButton(building, floor) {
    // Reset background color of all cells
    var cells = document.querySelectorAll('.floorindicator td');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = '';
    });
    
    // Set background color based on floor and building
    if (building === 1) {
        if (floor === 1) {
            document.getElementById('floor11').style.backgroundColor = '#e89d3a';
        } else if (floor === 2) {
            document.getElementById('floor21').style.backgroundColor = '#e89d3a';
        } else if (floor === 3) {
            document.getElementById('floor31').style.backgroundColor = '#e89d3a';
        } else if (floor === 4) {
            document.getElementById('floor41').style.backgroundColor = '#e89d3a';
        } else if (floor === 5) {
            document.getElementById('social').style.backgroundColor = '#e89d3a';
        }
    } else if (building === 2) {
        if (floor === 1) {
            document.getElementById('floor12').style.backgroundColor = '#e89d3a';
        } else if (floor === 2) {
            document.getElementById('floor22').style.backgroundColor = '#e89d3a';
        } else if (floor === 3) {
            document.getElementById('floor32').style.backgroundColor = '#e89d3a';
        } else if (floor === 4) {
            document.getElementById('floor42').style.backgroundColor = '#e89d3a';
        } else if (floor === 5) {
            document.getElementById('social').style.backgroundColor = '#e89d3a';
        }
    }
}
// Function to filter buttons based on search input
function filterButtons() {
    // Get the search input value
    var searchInput = document.getElementById("search").value.toLowerCase();

    // Reset the display of all buttons
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        var buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(searchInput)) {
            button.style.display = 'inline-block'; // Show matched buttons
        } else {
            button.style.display = 'none'; // Hide unmatched buttons
        }
    });
}

// Function to handle button clicks and show floor buttons for building 1
function showFloorsForBuilding1() {
    // Hide both building buttons
    document.getElementById('building1').style.display = 'none';
    document.getElementById('building2').style.display = 'none';

    // Show building 1 floor buttons
    document.getElementById('button1').style.display = 'inline-block';
    document.getElementById('button2').style.display = 'inline-block';
    document.getElementById('button3').style.display = 'inline-block';
    document.getElementById('button4').style.display = 'inline-block';
    document.getElementById('button5').style.display = 'inline-block';
    document.getElementById('button13').style.display = 'inline-block';

    // Hide building 2 floor buttons
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button9').style.display = 'none';
    document.getElementById('button10').style.display = 'none';
    document.getElementById('button12').style.display = 'none';
}

// Function to handle button clicks and show floor buttons for Building 2
function showFloorsForBuilding2() {
    // Show building 2 floor buttons
    document.getElementById('button6').style.display = 'inline-block'; // Show 5th floor button
    document.getElementById('button7').style.display = 'inline-block';
    document.getElementById('button8').style.display = 'inline-block';
    document.getElementById('button9').style.display = 'inline-block';
    document.getElementById('button10').style.display = 'inline-block';
    document.getElementById('button13').style.display = 'inline-block'; // Show back button
    document.getElementById('button11').style.display = 'none'; // Hide building 1 button
    document.getElementById('button12').style.display = 'none'; // Hide building 2 button
    // Hide both building buttons
    document.getElementById('building1').style.display = 'none';
    document.getElementById('building2').style.display = 'none';
}


// Function to handle back button click
function goBack() {

    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "University of Caloocan City";
            informationdetails.innerHTML = "a public-type local university established in 1971 and formerly called Caloocan City Community College and Caloocan City Polytechnic College. The University of Caloocan City was formed in 2004 out of Caloocan City Polytechnic College (CCPC), which started as a two-year course college in 1971 and offered four-year courses in 1975.";

            // Remove the 'fade' class and add the 'fade-in' class to start the fade in effect
            informationheader.classList.remove('fade');
            informationheader.classList.add('fade-in');
            informationdetails.classList.remove('fade');
            informationdetails.classList.add('fade-in');

            // After the fade in effect is complete, 
            setTimeout(function() {
                informationheader.classList.remove('fade-in');
                informationdetails.classList.remove('fade-in');
            }, 500); // The timeout should be the same as the transition duration in the CSS
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
    // Hide floor buttons for both buildings
    for (let i = 1; i <= 13; i++) {
        document.getElementById('button' + i).style.display = 'none';
    }
    // Show both building buttons again
    document.getElementById('building1').style.display = 'inline-block';
    document.getElementById('building2').style.display = 'inline-block';
    let floors = [11, 21, 31, 41, 12, 22, 32, 42, 'social'];
        floors.forEach(floor => {
        let element = document.getElementById('floor' + floor);
        if (element) {
            element.style.backgroundColor = '#ffffffde';
        }
        });
        document.getElementById('social').style.backgroundColor = '#ffffffde';

    // Set its visibility to visible
    if (defaultMap) {
        defaultMap.style.visibility = 'visible';
    }
    if (building1floor1) {
        building1floor1.style.visibility = 'hidden';
    }
    // Hide the back button
    document.getElementById('button13').style.display = 'none';

    
}


// Function to handle button clicks and change background color
function searchButton(building, floor) {
    // Reset background color of all cells
    var cells = document.querySelectorAll('.floorindicator td');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = '';
    });

    // Select the element with the class 'defaultmap'
    

    // Set background color based on floor and building

    //ALL SWITCHING HERE
    if (building === 1) {
        if (floor === 1) {
            document.getElementById('floor11').style.backgroundColor = 'red';
            if (defaultMap) {
                defaultMap.style.visibility = 'hidden';
            }
            if (building1floor1) {
                building1floor1.style.visibility = 'visible';
            }
        } else if (floor === 2) {
            document.getElementById('floor21').style.backgroundColor = 'red';
        } else if (floor === 3) {
            document.getElementById('floor31').style.backgroundColor = 'red';
        } else if (floor === 4) {
            document.getElementById('floor41').style.backgroundColor = 'red';
        } else if (floor === 5) {
            document.getElementById('social').style.backgroundColor = 'red';
        }
    } else if (building === 2) {
        if (floor === 1) {
            document.getElementById('floor12').style.backgroundColor = 'red';
        } else if (floor === 2) {
            document.getElementById('floor22').style.backgroundColor = 'red';
        } else if (floor === 3) {
            document.getElementById('floor32').style.backgroundColor = 'red';
        } else if (floor === 4) {
            document.getElementById('floor42').style.backgroundColor = 'red';
        } else if (floor === 5) {
            document.getElementById('social').style.backgroundColor = 'red';
        }
    }
}

//map handlers

// Function to handle showregistrar click
function showRegistrar() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Office of the Registrar";
            informationdetails.innerHTML = "The University's Registrar is responsible in handling student's records and documents. <br><br> All student credentials can be requested in the registrar's office <br><br><br><br> Office Hours: <br><br>Monday - Friday <br> 8:00 AM - 5:00 PM";

            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function showroom101() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Guidance & Nurse office";
            informationdetails.innerHTML = "The Guidance and Nurse office is responsible in providing guidance and health services to the students. <br><br> The guidance office provides counseling services to students who are in need of emotional and psychological support. <br><br> The nurse office provides first aid and medical assistance to students who are in need of medical attention. <br><br>";

            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

