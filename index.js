// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json())
      .then((data) => {
        // Update DOM with new data (e.g., display the new id)
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch((error) => {
        // Handle errors by appending error message to the DOM
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  
  // Call the function to test
  submitData();
