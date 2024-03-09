document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name"),
      email = document.getElementById("email"),
      topic = document.getElementById("topic"),
      messageText = document.getElementById("message_text"),
      consent = document.getElementById("consent"),
      nameError = document.getElementById("nameError"),
      emailError = document.getElementById("emailError"),
      topicError = document.getElementById("topicError"),
      messageError = document.getElementById("messageError"),
      consentError = document.getElementById("consentError");

    function showError(input, errorElement, message) {
      input.classList.add("error");
      errorElement.textContent = message;
    }

    function clearError(input, errorElement) {
      input.classList.remove("error");
      errorElement.textContent = "";
    }

    clearError(name, nameError);
    clearError(email, emailError);
    clearError(topic, topicError);
    clearError(messageText, messageError);
    clearError(consent, consentError);

    if (!name.validity.valid) {
      showError(name, nameError, name.validationMessage);
    }

    if (!email.validity.valid) {
      showError(email, emailError, email.validationMessage);
    }

    if (!topic.validity.valid) {
      showError(topic, topicError, "Выберите тему");
    }

    if (!messageText.validity.valid) {
      showError(messageText, messageError, "Введите сообщение");
    }

    if (!consent.checked) {
      consent.classList.add("checkbox-error");
      consentError.textContent = "Необходимо дать согласие на обработку данных";
    }

    if (
      name.validity.valid &&
      email.validity.valid &&
      topic.validity.valid &&
      messageText.validity.valid &&
      consent.checked
    ) {
      console.log("Имя:", name.value);
      console.log("Электронная почта:", email.value);
      console.log("Тема:", topic.value);
      console.log("Сообщение:", messageText.value);

      // Очистка формы
      this.reset();
    }
  });
function search() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const paragraphs = document
    .getElementsByTagName("main")[0]
    .getElementsByTagName("p");
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraphText = paragraphs[i].textContent.toLowerCase();
    if (paragraphText.includes(searchText)) {
      const result = document.createElement("p");
      result.textContent = paragraphs[i].textContent;
      searchResults.appendChild(result);
    }
  }

  if (searchResults.innerHTML === "") {
    searchResults.innerHTML = "Ничего не найдено.";
  }
}
