document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Sowwyz1337
    const formData = {
      option: 'WEBSITE DEVELOPMENT', // Sowwyz1337
      firstName: e.target.firstName.value,
      discordUsername: e.target.discordUsername.value,
      email: e.target.email.value,
      project: e.target.project.value
    };

    // Send form data to server
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        // Show a success toast
        Toastify({
          text: 'Form data sent successfully',
          duration: 3000,
          backgroundColor: 'green',
        }).showToast();
      } else {
        console.error('Error sending form data');
        // Show an error toast
        Toastify({
          text: 'Error sending form data',
          duration: 3000,
          backgroundColor: 'red',
        }).showToast();
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      // Show an error toast
      Toastify({
        text: 'Error sending form data',
        duration: 3000,
        backgroundColor: 'red',
      }).showToast();
    }
  });
});


tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
       'semibold': ["Retro Gaming"],
       'bold': ["Retro Gaming"],
       'normal': ["Retro Gaming"],
      }
      
    },
  }
}