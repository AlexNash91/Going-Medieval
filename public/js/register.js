
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  const kingdom = document.querySelector('#kingdom').value.trim();
  if (username && password && kingdom) {
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, kingdom }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
      console.log(response);
    }
    const data = await response.json();
    console.log(data);
  }
};
document.querySelector('#registration').addEventListener('submit', signupFormHandler); 