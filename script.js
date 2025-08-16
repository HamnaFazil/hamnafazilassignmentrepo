// Doctor data categorized
const doctorData = {
    
    "Dental": [
        { name: "Dr. Alice Brown", speciality: "Dentist", experience: "12 years", contact: "alice@gmail.com", availability: "Mon-Fri, 9 AM - 5 PM" , photo: "Images/1.jpeg"  },
        { name: "Dr. Bob White", speciality: "Orthodontist", experience: "8 years", contact: "bob@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/2.jpeg"  },
        { name: "Dr. Clara Green", speciality: "Periodontist", experience: "10 years", contact: "clara@gmail.com", availability: "Mon, Thurs, 8 AM - 3 PM" , photo: "Images/3.jpeg"  },
        { name: "Dr. Gabriel Okara", speciality: "Periodontist", experience: "12 years", contact: "gokara@gmail.com", availability: "wed, Fri, 8 AM - 3 PM", photo: "Images/4.jpeg" }
    ],
    "Cardiology": [
        { name: "Dr. John Doe", speciality: "Cardiologist", experience: "15 years", contact: "john@gmail.com", availability: "Mon-Fri, 9 AM - 5 PM" , photo: "Images/5.jpeg"  },
        { name: "Dr. Sarah Smith", speciality: "Heart Surgeon", experience: "10 years", contact: "sarah@gmail.com", availability: "Mon-Thur, 10 AM - 4 PM" , photo: "Images/6.jpeg" },
        { name: "Dr. Aura Heens", speciality: "Electrophysiologist", experience: "9 years", contact: "aurah@gmail.com", availability: "Mon, Thurs, 8 AM - 3 PM" , photo: "Images/7.jpeg" },
        { name: "Dr. Teens Hedrick", speciality: "Cardiovascular Surgeon", experience: "8 years", contact: "teenshedgmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/8.jpeg" },
        { name: "Dr. Richard Henry", speciality: "Pediatric Cardiologist", experience: "6 years", contact: "richhenry@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/9.jpeg" }
    ],
    "Neurology": [
        { name: "Dr. Peter Adams", speciality: "Neurologist", experience: "9 years", contact: "peter@gmail.com", availability: "Tue-Fri, 9 AM - 3 PM" , photo: "Images/10.jpeg" },
        { name: "Dr. Gray Hilman", speciality: "Neuro Surgeon", experience: "11 years", contact: "grey@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/11.jpeg" },
        { name: "Dr. Rey Sigmund", speciality: "Neurophysiologist", experience: "7 years", contact: "reysig@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/12.jpeg" }
    ],
    "Psychiatry": [
        { name: "Dr. John Baker", speciality: "Psychiatrist", experience: "15 years", contact: "johnbak@gmail.com", availability: "Mon-Fri, 9 AM - 5 PM" , photo: "Images/13.jpeg" },
        { name: "Dr. Henry Smith", speciality: "Clinical Psychologist", experience: "10 years", contact: "sarah@gmail.com", availability: "Mon-Thur, 10 AM - 4 PM" , photo: "Images/14.jpeg" },
        { name: "Dr. Sigmund Mel", speciality: "Therapist", experience: "9 years", contact: "aurah@gmail.com", availability: "Mon, Thurs, 8 AM - 3 PM" , photo: "Images/15.jpeg" },
        { name: "Dr. Adams Jack", speciality: "Counselor", experience: "8 years", contact: "adamsj@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/16.jpeg" },
        { name: "Dr. Selena Hary", speciality: "Pediatric Psychiatrist", experience: "6 years", contact: "selenah@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/17.jpeg" }
    ],
    "Dermatology": [
        { name: "Dr. Karan Edward", speciality: "Medical Dermatoogist", experience: "9 years", contact: "karaned@gmail.com", availability: "Tue-Fri, 9 AM - 3 PM" , photo: "Images/18.jpeg" },
        { name: "Dr. Ken Horney", speciality: "Cosmetic Dermatologist", experience: "11 years", contact: "khorney@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/19.jpeg" },
        { name: "Dr. Rey King", speciality: "Pediatric Dermatologist", experience: "7 years", contact: "reyk@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/20.jpeg" },
        { name: "Dr. Henry Baker", speciality: "Dermatopathologist", experience: "15 years", contact: "henrybak@gmail.com", availability: "Mon-Fri, 9 AM - 5 PM" , photo: "Images/21.jpeg" }
    ],
    "Radiology": [
        { name: "Dr. James Hen", speciality: "Diagnostic Radiologist", experience: "12 years", contact: "jameshen@gmail.com", availability: "Mon-Fri, 9 AM - 5 PM" , photo: "Images/22.jpeg" },
        { name: "Dr. Sting Hamen", speciality: "Interventional Radiologist", experience: "8 years", contact: "strhemen@gmail.com", availability: "Mon-Wed, 10 AM - 4 PM" , photo: "Images/23.jpeg" },
        { name: "Dr. Kale Sened", speciality: "Nucleur Medicine Radiologist", experience: "10 years", contact: "kalesened@gmail.com", availability: "Mon, Thurs, 8 AM - 3 PM" , photo: "Images/24.jpeg" },
        { name: "Dr. Gale Sane", speciality: "Radiation Oncologist", experience: "12 years", contact: "galesane@gmail.com", availability: "wed, Fri, 8 AM - 3 PM" , photo: "Images/25.jpeg" }
    ]
   

};

// Function to load categories dynamically
function loadCategories() {
    const categoryList = document.getElementById('category-list');
    Object.keys(doctorData).forEach(category => {
        const li = document.createElement('li');
        li.innerText = category;
        li.addEventListener('click', () => loadDoctors(category));
        categoryList.appendChild(li);
    });
}

// Function to load doctors based on selected category
function loadDoctors(category) {
    const doctorProfile = document.getElementById('doctor-profile');
    doctorProfile.innerHTML = '';  // Clear previous content

    doctorData[category].forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.classList.add('doctor-card');
        
        doctorCard.innerHTML = `
            <img src="doctor-image.jpg" alt="Doctor Photo" class="doctor-photo">
            <div class="doctor-info">
                <h2>${doctor.name}</h2>
                <p><strong>Specialty:</strong> ${doctor.specialty}</p>
                <p><strong>Experience:</strong> ${doctor.experience}</p>
                <p><strong>Contact:</strong> ${doctor.contact}</p>
                <p><strong>Availability:</strong> ${doctor.availability}</p>
                <button class="appointment-btn">Book Appointment</button>
            </div>
        `;

        const appointmentBtn = doctorCard.querySelector('.appointment-btn');
        appointmentBtn.addEventListener('click', () => {
            alert(`Booking an appointment with ${doctor.name}`);
        });

        doctorProfile.appendChild(doctorCard);
    });
}

// Load categories on page load
document.addEventListener('DOMContentLoaded', loadCategories);

function loadDoctors(category) {
    const doctorProfile = document.getElementById('doctor-profile');
    doctorProfile.innerHTML = '';  // Clear previous content

    doctorData[category].forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.classList.add('doctor-card');
        
        // Modify the image tag to use the specific image from the data
        doctorCard.innerHTML = `
            <img src="${doctor.photo}" alt="Photo of ${doctor.name}" class="doctor-photo">
            <div class="doctor-info">
                <h2>${doctor.name}</h2>
                <p><strong>Speciality:</strong> ${doctor.speciality}</p>
                <p><strong>Experience:</strong> ${doctor.experience}</p>
                <p><strong>Contact:</strong> ${doctor.contact}</p>
                <p><strong>Availability:</strong> ${doctor.availability}</p>
                <button class="appointment-btn">Book Appointment</button>
            </div>
        `;

        doctorProfile.appendChild(doctorCard);
    });
}

