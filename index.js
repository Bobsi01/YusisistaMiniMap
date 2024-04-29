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
            document.getElementById('floor11').style.backgroundColor = 'red';
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
