const form = document.querySelector('form');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      if (username === 'example' && password === 'password') {
        alert('Login successful!');
      } else {
        alert('Incorrect username or password. Please try again.');
      }

    });

    function show() {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }