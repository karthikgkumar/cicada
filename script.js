// Optional: Add this script to a page like verify.html before final.html

function checkFinalPassword() {
  const input = document.getElementById('finalAnswer').value.trim().toUpperCase();
  const result = document.getElementById('finalResult');

  if (input === 'KARMAECHODREAMNOW') {
    result.textContent = 'Access granted. Proceeding...';
    result.style.color = 'lime';
    setTimeout(() => {
      window.location.href = 'final.html';
    }, 1500);
  } else {
    result.textContent = 'Incorrect password.';
    result.style.color = 'red';
  }
}

// You can create a verify.html like this:
// <input id="finalAnswer" type="text">
// <button onclick="checkFinalPassword()">Enter</button>
// <p id="finalResult"></p>
