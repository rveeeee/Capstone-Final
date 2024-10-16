function startTimer() {
  const sendButton = document.getElementById("send-btn");
  sendButton.disabled = true;
  let timeLeft = 60;

  const timer = setInterval(() => {
    timeLeft--;
    sendButton.textContent = `Resend (${timeLeft}s)`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      sendButton.disabled = false;
      sendButton.textContent = "Send";
    }
  }, 1000);
}

function validateVerificationCode() {
  const verificationCode = document.getElementById("verification-code").value;

  // Return true if verification code is correct
  return verificationCode === "123456";
}

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.toggle("hidden");
}

function checkEmailInput() {
  const emailInput = document.getElementById("reset-email");
  const emailError = document.getElementById("email-error");

  // Check if email contains an "@" symbol and is not empty
  if (emailInput.value.includes("@") && emailInput.value.trim() !== "") {
    emailInput.classList.remove("invalid");
    emailError.classList.add("hidden");
    return true;
  } else {
    emailInput.classList.add("invalid");
    emailError.classList.remove("hidden");
    return false;
  }
}

function handleSendClick(event) {
  event.preventDefault(); // Prevent default button action

  if (checkEmailInput()) {
    startTimer(); // Start timer if email is valid
  }
}

// Add event listener to the Send button
const sendButton = document.getElementById("send-btn");
sendButton.addEventListener("click", handleSendClick);

const forgotPasswordLink = document.getElementById("forgot-password-link");
forgotPasswordLink.addEventListener("click", () => {
  toggleModal("forgot-password-modal");
});

// Event listener for Continue button
const continueButton = document.querySelector(
  "#forgot-password-modal button[type='submit']",
);
continueButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button action

  if (validateVerificationCode()) {
    toggleModal("forgot-password-modal");
    toggleModal("new-password-modal");
  } else {
    // Optionally handle invalid verification code
    alert("Invalid verification code. Please try again.");
  }
});
