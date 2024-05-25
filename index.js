var defaultMap = document.querySelector('.defaultmap');
var logoimg = document.querySelector('.logoimg');
var informationheader = document.querySelector('.informationheader');
var informationdetails = document.querySelector('.informationdetails');
var infomationcontact = document.querySelector('.infomationcontact');
var building2floor1 = document.querySelector('.building2floor1');
var building2floor2 = document.querySelector('.building2floor2');
var building2floor3 = document.querySelector('.building2floor3');
var building2floor4 = document.querySelector('.building2floor4');
var building2floor5 = document.querySelector('.building2floor5');
var building1floor1 = document.querySelector('.building1floor1');
var building1floor2 = document.querySelector('.building1floor2');
var building1floor3 = document.querySelector('.building1floor3');
var building1floor4 = document.querySelector('.building1floor4');
var building1floor5 = document.querySelector('.building1floor5');
var logoimg = document.querySelector('.logoimg');
var fblink = document.querySelector('#fblink');
var weblink = document.querySelector('#weblink');
var fafacebok = document.querySelector('.fa-facebook');
var faweb = document.querySelector('.fa-globe');





function hideAllFloors() {
    defaultMap.style.visibility = 'hidden';
    building2floor1.style.visibility = 'hidden';
    building2floor2.style.visibility = 'hidden';
    building2floor3.style.visibility = 'hidden';
    building2floor4.style.visibility = 'hidden';
    building2floor5.style.visibility = 'hidden';
    building1floor1.style.visibility = 'hidden';
    building1floor2.style.visibility = 'hidden';
    building1floor3.style.visibility = 'hidden';
    building1floor4.style.visibility = 'hidden';
    building1floor5.style.visibility = 'hidden';

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
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
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
        hideAllFloors() 
        defaultMap.style.visibility = 'visible';
        logoimg.src = 'ucclogo.png';
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
            if (building2floor4) {
                hideAllFloors();
                building1floor1.style.visibility = 'visible';

                informationheader.textContent = "University of Caloocan City";
                informationdetails.innerHTML = "a public-type local university established in 1971 and formerly called Caloocan City Community College and Caloocan City Polytechnic College. The University of Caloocan City was formed in 2004 out of Caloocan City Polytechnic College (CCPC), which started as a two-year course college in 1971 and offered four-year courses in 1975.";
                fblink.textContent = "University of Caloocan City";
                weblink.textContent = "UCC";
                logoimg.src = 'ucclogo.png';
                fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
                fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
                weblink.href = 'https://ucc-caloocan.edu.ph/';
            }
            
        } else if (floor === 2) {
            document.getElementById('floor21').style.backgroundColor = 'red';
            if (building2floor4) {
                hideAllFloors();
                building1floor2.style.visibility = 'visible';

            informationheader.textContent = "Bachelor of Secondary Education Major in English";
            informationdetails.innerHTML = "<br><br>This floor is managed by Bachelor of Secondary Education Major in English<br><br>a comprehensive program that offers students a strong foundation in education and communication. Students will gain knowledge and skills in teaching, curriculum development, assessment, and classroom management.";
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
            }
        } else if (floor === 3) {
            document.getElementById('floor31').style.backgroundColor = 'red';
            if (building2floor4) {
                hideAllFloors();
                building1floor3.style.visibility = 'visible';

            informationheader.textContent = "BSED major in Science";
            informationdetails.innerHTML = "This floor is managed by BSED major in Science <br><br> a 4-year teacher education program that produces science teachers for the secondary level. The degree program has a good number of chemistry and physics courses to enable the graduates to teach physical sciences courses";
            fblink.textContent = "Science Department";
            weblink.textContent = "----";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/UCCScienceDept';
            fblink.href = 'https://www.facebook.com/UCCScienceDept';
            weblink.href = '';
            }
        } else if (floor === 4) {
            document.getElementById('floor41').style.backgroundColor = 'red';
            if (building2floor4) {
                hideAllFloors();
                building1floor4.style.visibility = 'visible';

            informationheader.textContent = "BA Comm & BS Psych";
            informationdetails.innerHTML = "This floor is managed by BA Comm & BS Psych <br><br> BA Comm and BS in Psych are two separate programs that share the same floor. The BA Communication program focuses on the study of communication theories, media, and journalism, while the BS Psychology program centers on the study of human behavior, mental processes, and psychological theories.";
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'claslogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
            }
        } else if (floor === 5) {
            document.getElementById('social').style.backgroundColor = 'red';
            if (building2floor4) {
                hideAllFloors();
                building1floor5.style.visibility = 'visible';

            informationheader.textContent = "Social Hall";
            informationdetails.innerHTML = "Social Hall is a place where students can gather and socialize. <br><br> The Social Hall is used for various events and activities such as seminars, workshops, and student organization meetings. <br><br> The Social Hall is also used for student performances, exhibits, and other cultural events.";
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
            }
        }
    } else if (building === 2) {
        if (floor === 1) {
            document.getElementById('floor12').style.backgroundColor = 'red';
            if (defaultMap) {
                defaultMap.style.visibility = 'hidden';
                
            }
            if (building2floor1) {
                hideAllFloors();
                building2floor1.style.visibility = 'visible';
            }
        } else if (floor === 2) {
            document.getElementById('floor22').style.backgroundColor = 'red';
            if (building2floor2) {
                hideAllFloors();
                building2floor2.style.visibility = 'visible';
            }
                informationheader.textContent = "The Department of Tourism and Hospitality Industry Management";
                informationdetails.innerHTML = "<br><br>The Department of Tourism and Hospitality Industry Management offers a practical education in tourism and hospitality, covering customer service, event management, hotel operations, and marketing. Through partnerships with industry players, students gain real-world experience for careers in these fields.";
                fblink.textContent = "no information available ";
                weblink.textContent = "---";
                logoimg.src = 'claslogo.png';
                fafacebok.href = '';
                fblink.href = '';
            
        } else if (floor === 3) {
            document.getElementById('floor32').style.backgroundColor = 'red';
            if (building2floor3) {
                hideAllFloors();
                building2floor3.style.visibility = 'visible';

                informationheader.textContent = "Computer Studies Department";
                informationdetails.innerHTML = "<br><br>This floor is managed by Allicance of E-Computer Students(ACES) <br><br>educate students in various aspects of computer science and technology, including programming, software engineering, cybersecurity, artificial intelligence, and data science.";
                fblink.textContent = "CSDNorthUCC";
                weblink.textContent = "---";
                logoimg.src = 'csdlogo.jpg';
                fafacebok.href = 'https://www.facebook.com/CSDNorthUCC';
                fblink.href = 'https://www.facebook.com/CSDNorthUCC';
            }
        } else if (floor === 4) {
            document.getElementById('floor42').style.backgroundColor = 'red';
            if (building2floor4) {
                hideAllFloors();
                building2floor4.style.visibility = 'visible';

                informationheader.textContent = "Bachelor of Public Administration";
                informationdetails.innerHTML = "<br>This floor is managed by the Bachelor of Public Administration Department.<br><br>The Bachelor of Public Administration Department teaches students about public sector management, policies, and governance. It equips them with skills in leadership, policy analysis, and organizational management for careers in government and related fields.";
                fblink.textContent = "ucclingkodbayan";
                weblink.textContent = "---";
                logoimg.src = 'bpalogo.png';
                fafacebok.href = 'https://www.facebook.com/ucclingkodbayan';
                fblink.href = 'https://www.facebook.com/ucclingkodbayan';
            }
        } else if (floor === 5) {
            document.getElementById('social').style.backgroundColor = 'red';
            if (building2floor4) {
                hideAllFloors();
                building2floor5.style.visibility = 'visible';

            informationheader.textContent = "Social Hall";
            informationdetails.innerHTML = "Social Hall is a place where students can gather and socialize. <br><br> The Social Hall is used for various events and activities such as seminars, workshops, and student organization meetings. <br><br> The Social Hall is also used for student performances, exhibits, and other cultural events.";
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
            }
           
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

function showMIS() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Management Information System Office";
            informationdetails.innerHTML = "<br>The Management Information System Office is responsible in handling the university's information system. <br><br> The office is responsible in managing the university's AIMS Portal and ensuring that all data are organized and correct. <br><br> Office Hours: <br><br>Monday - Friday <br> 8:00 AM - 5:00 PM";
            fblink.textContent = "UCC MIS - North ";
            weblink.textContent = "MIS NORTH ";
            logoimg.src = 'misnorthlogo.jpg';
            fafacebok.href = 'https://www.facebook.com/uccmisnorth';
            fblink.href = 'https://www.facebook.com/uccmisnorth';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function show104() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Room 103 & 104";
            informationdetails.innerHTML = "This room is used by the following programs: <br><br>Bachelor of Secondary Education Major in English <br><br> Bachelor of Secondary Education Major in English-Chinese <br><br> Bachelor in Secondary Education Major in Technology and Livelihood Education.  ";

            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function show103() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Room 103 & 104";
            informationdetails.innerHTML = "This room is used by the following programs: <br><br>Bachelor of Secondary Education Major in English <br><br> Bachelor of Secondary Education Major in English-Chinese <br><br> Bachelor in Secondary Education Major in Technology and Livelihood Education.  ";

            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function showCS() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "BS in Computer Science";
            informationdetails.innerHTML = "This room is managed by Computer Science council. <br><br> Bachelor of Science in Computer Science (BSCS) centers on the theoretical foundations and principles of computing, covering topics such as algorithms, programming languages, software development, and computational theory.";
            fblink.textContent = "CS Council";
            weblink.textContent = "---";
            logoimg.src = 'cslogo.png';
            fafacebok.href = 'https://www.facebook.com/UCCBSCS2022';
            fblink.href = 'https://www.facebook.com/UCCBSCS2022';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function showIS() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "BS in Information System";
            informationdetails.innerHTML = "This room is managed by Information System council. <br><br> Bachelor of Science in Information Systems (BSIS) combines business and computing technology, focusing on designing and managing information systems, data analytics, and the strategic use of technology in organizations.";
            fblink.textContent = "IS Council";
            weblink.textContent = "---";
            logoimg.src = 'islogo.png';
            fafacebok.href = 'https://www.facebook.com/profile.php?id=100091523451762';
            fblink.href = 'https://www.facebook.com/profile.php?id=100091523451762';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function showIT() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "BS in Information Technology";
            informationdetails.innerHTML = "<br><br>This room is managed by Information Technology council. <br><br> Bachelor of Science in Information Technology (BSIT) focuses on the practical applications of technology in business and organizations, emphasizing skills in networking, database management, web development, and IT support.";
            fblink.textContent = "IT Council";
            weblink.textContent = "---";
            logoimg.src = 'itlogo.png';
            fafacebok.href = 'https://www.facebook.com/profile.php?id=100091323001194';
            fblink.href = 'https://www.facebook.com/profile.php?id=100091323001194';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}

function showEMC() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "BS in Entertainment and Multimedia Computing";
            informationdetails.innerHTML = "<br><br>This room is managed by Entertainment and Multimedia Computing council. <br><br> Bachelor of Science in Entertainment and Multimedia Computing (BSEMC) concentrates on the study of digital entertainment and multimedia technologies, including game development, multimedia production, animation, and interactive media design.";
            fblink.textContent = "EMC Council";
            weblink.textContent = "---";
            logoimg.src = 'emclogo.png';
            fafacebok.href = 'https://www.facebook.com/profile.php?id=100093705553269';
            fblink.href = 'https://www.facebook.com/profile.php?id=100093705553269';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}


function showlibrary() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Library Room";
            informationdetails.innerHTML = "The University's Library is a place where students can study and do research. <br><br> The library has a collection of books, journals, and other resources that students can use for their academic needs. <br><br> The library also provides computers and internet access for students who need to do research online.";
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}
function showsharedrooms() {
    if (informationheader) {
        // Add the 'fade' class to start the fade out effect
        informationheader.classList.add('fade');
        informationdetails.classList.add('fade');

        // After the fade out effect is complete, change the text and start the fade in effect
        setTimeout(function() {
            informationheader.textContent = "Room 106, 107, 108, and 109 ";
            informationdetails.innerHTML = "<br><br>This room is used by the following programs: <br><br>Bachelor of Secondary Education Major in English <br><br> Bachelor of Secondary Education Major in English-Chinese <br><br> Bachelor in Secondary Education Major in Technology and Livelihood Education.  ";
            fblink.textContent = "University of Caloocan City";
            weblink.textContent = "UCC";
            logoimg.src = 'ucclogo.png';
            fafacebok.href = 'https://www.facebook.com/univofcaloocanofficial';
            fblink.href = 'https://www.facebook.com/univofcaloocanofficial';
            weblink.href = 'https://ucc-caloocan.edu.ph/';
            informationheader.classList.add('fade-in');
            informationdetails.classList.add('fade-in');
        }, 500); // The timeout should be the same as the transition duration in the CSS
    }
}


