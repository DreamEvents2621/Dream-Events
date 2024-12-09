// JavaScript for Event Management Website

// Example list of events (this can be dynamically fetched from a server in a real application)
const events = [
    {
      title: "Annual Tech Conference",
      date: "2024-12-15",
      description: "Join us for a day of innovation and networking with industry leaders.",
    },
    {
      title: "Music Festival",
      date: "2025-01-10",
      description: "Experience live performances from top artists around the globe!",
    },
    {
      title: "Charity Marathon",
      date: "2025-02-05",
      description: "Run for a cause and make a difference in your community.",
    },
  ];
  
  // Function to display events dynamically
  function displayEvents() {
    const eventList = document.getElementById("event-list");
  
    // Clear any existing content
    eventList.innerHTML = "";
  
    // Loop through the events and create HTML for each
    events.forEach((event) => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event";
  
      const eventTitle = document.createElement("h3");
      eventTitle.textContent = event.title;
  
      const eventDate = document.createElement("p");
      eventDate.textContent = `Date: ${event.date}`;
  
      const eventDescription = document.createElement("p");
      eventDescription.textContent = event.description;
  
      const eventButton = document.createElement("button");
      eventButton.textContent = "Learn More";
      eventButton.onclick = () => {
        alert(`More details about: ${event.title}`);
      };
  
      eventDiv.appendChild(eventTitle);
      eventDiv.appendChild(eventDate);
      eventDiv.appendChild(eventDescription);
      eventDiv.appendChild(eventButton);
  
      eventList.appendChild(eventDiv);
    });
  }
  
  // Form Submission Handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset(); // Clear the form
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  }
  
  // Call the function to display events when the page loads
  document.addEventListener("DOMContentLoaded", displayEvents);
  