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



let checkupJSON = `[{
    "title": "Девочки и подростки до 18",
    "description": [
        "Общий анализ крови с лейкоцитарной формулой и СОЭ",
        "Общий анализ мочи с микроскопией осадка",
        "Анализ кала на яйца и личинки гельминтов, простейшие и их цисты PARASEP",
        "Копрограмма",
        "Витамин D",
        "Паратиреоидный гормон",
        "Кальций общий",
        "Фосфор неорганический",
        "Тиреотропный гормон (ТТГ)",
        "Глюкоза",
        "Билирубин общийн",
        "Аланин-аминотрансфераза",
        "Аспартат-аминотрансфераза",
        "Креатинин",
        "Общий белок"
    ],
    "preparation": "Рекомендовано сдавать кровь в первой половине дня, натощак (интервал без приема пищи 8 -14 часов), можно пить воду без газа. Обязательно сказать администратору о постоянно принимаемых лекарственных средствах.",  
    "interpretation": "Референсные пределы указаны по каждому показателю в бланке результата."
}, {
    "title": "Девушки и женщины с 18 до менопаузы",
    "description": [
        "Общий анализ крови",
        "Общий анализ мочи",
        "Анализ кала на скрытую кровь",
        "Глюкоза",
        "Холестерин общий",
        "Холестерин: липопротеины высокой плотности",
        "Триглицериды",
        "Аланинаминотрансферазы (АЛТ)",
        "Аспартатаминотрансферазы (АСТ)",
        "Билирубин общий",
        " Билирубин прямой (конъюгированный)",
        "Общий белок",
        "Альбумин",
        "Креатинин",
        "Лактатдегидрогеназа",
        "Тиреотропный гормон",
        "Исследование гинекологического материала методом жидкостной цитологии, окрашивание по Папаниколау",
        "Микроскопическое исследование отделяемого женских мочеполовых органов, в том числе на трихомонады, гонококки",
        "Антиген СА 125",
        "Антиген СА 15-3"
    ],
    "preparation": "Рекомендовано сдавать кровь в первой половине дня, натощак (интервал без приема пищи 8 -14 часов), можно пить воду без газа. Обязательно сказать администратору о постоянно принимаемых лекарственных средствах.",  
    "interpretation": "Референсные пределы указаны по каждому показателю в бланке результата."
}, {
    "title": "Женщины в менопаузе-климакс",
    "description": [
        "Тиреотропный гормон (ТТГ, тиротропин, Thyroid Stimulating Hormone, TSH)",
        "Фолликулостимулирующий гормон (ФСГ, Follicle Stimulating Hormone, FSH)",
        "Эстрадиол (E2, Estradiol)",
        "Индекс инсулинорезистентности HOMA (HOMA-IR, Homeostasis Model Assessment of Insulin Resistance)"
    ],
    "preparation": "Рекомендовано сдавать кровь в первой половине дня, натощак (интервал без приема пищи 8 -14 часов), можно пить воду без газа. Обязательно сказать администратору о постоянно принимаемых лекарственных средствах.",  
    "interpretation": "Референсные пределы указаны по каждому показателю в бланке результата."
}, {
    "title": "Беременность",
    "description": [
        "Глюкоза (в крови) (Glucose)",
        "Тироксин свободный (Т4 свободный, Free Thyroxine, FT4)",
        "Тиреотропный гормон (ТТГ, тиротропин, Thyroid Stimulating Hormone, TSH)",
        "Клинический анализ крови: общий анализ, лейкоформула, СОЭ (с микроскопией мазка крови при наличии патологических сдвигов)",
        "Группа крови (Blood group, АВ0)",
        "Резус­-принадлежность (Резус­фактор, Rh­factor, Rh)",
        "ИНБИОФЛОР. Выявление возбудителей ИППП(4+КВМ)",
        "Анализ мочи общий (Анализ мочи с микроскопией осадка)",
        "Антитела к ВИЧ 1 и 2 и антиген ВИЧ 1 и 2 (HIV Ag/Ab Combo)",
        "HBsAg, качественный тест (HBs-антиген, поверхностный антиген вируса гепатита B, «австралийский» антиген)",
        "Anti-HCV-total (антитела к антигенам вируса гепатита C)",
        "Антитела класса IgG к вирусу Varicella-Zoster (Varicella-Zoster Virus IgG, anti-VZV IgG, антитела класса IgG к вирусу ветряной оспы и опоясывающего лишая)",
        "Anti-Rubella-IgG (Антитела класса IgG к вирусу краснухи)",
        "Антитела класса IgG к вирусу кори, количественный тест (anti-Measles virus IgG, Rubeola Antibody IgG, quantitative)",
        "Определение ДНК ВПЧ (Вирус папилломы человека, Human papillomavirus, HPV) высокого онкогенного риска, скрининг 14 типов (16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68) + КВМ в соскобе эпителиальных клеток урогенитального тракта",
        "Микроскопическое (бактериоскопическое) исследование мазка, окрашенного по Граму (Gram Stain. Bacterioscopic examination of different smears)",
        "RPR ­тест (антикардиолипиновый тест) (Rapid Plasma Reagin Test)",
        "Антитела классов IgM и IgG к антигенам бледной трепонемы, суммарно (антитела IgG, IgM к антигенам Treponema pallidum) (Anti­Treponema pallidum IgG, IgM, Syphilis TP EIA, Total)",
        "Жидкостная цитология. Цитологическое исследование биоматериала шейки матки (окрашивание по Папаниколау)",
        "ИНБИОФЛОР. Бактериальный вагиноз"
    ],
    "preparation": "Рекомендовано сдавать кровь в первой половине дня, натощак (интервал без приема пищи 8 -14 часов), можно пить воду без газа. Обязательно сказать администратору о постоянно принимаемых лекарственных средствах.",  
    "interpretation": "Референсные пределы указаны по каждому показателю в бланке результата."
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let checkups = JSON.parse(checkupJSON);
    let checkupsContent = "";
    for (let check_up of checkups) {
        checkupsContent += `
            <h2 class = "checkup__title">${check_up.title}</h2>
            <div class = "checkup">

                <div class="checkup__links">
                    <p class = "link2 link">Описание</p> 
                    <p class = "link3 link">Подготовка</p> 
                    <p class = "link1 link">Интерпретация</p> 
                </div>
                
    
                <div class = "checkup__description checkup__general" id="#description">${Array.from(check_up.description).map((description) => `<p>${description}</p>`).join('')}
                </div>
                <div class = "checkup__preparation checkup__general" id="#preparation">${check_up.preparation}</div>
                <div class = "checkup__interpretation checkup__general" id="#interpretation">${check_up.interpretation}</div>
            </div>
            `;
    }

    document.getElementById("checkupContainer").innerHTML = checkupsContent;
    const checkupContainer = document.querySelector('#checkupContainer');
    checkupContainer.addEventListener('click', (event) => {
        // клик для смены информации
        if (event.target.classList.contains('link1')) {
            const parentDiv = event.target.parentNode.parentNode; //ищем родителя элемента по которому произошел клик
            let checkup__interpretation = parentDiv.querySelector(".checkup__interpretation");
            let checkup__description = parentDiv.querySelector(".checkup__description");
            let checkup__preparation = parentDiv.querySelector(".checkup__preparation");

            function changeInfo() {
                checkup__interpretation.style.display = "block";
                checkup__description.style.display = "none";
                checkup__preparation.style.display = "none";
            }
            changeInfo();
        } 
        if (event.target.classList.contains('link2')) {
            const parentDiv = event.target.parentNode.parentNode; //ищем родителя элемента по которому произошел клик
            let checkup__interpretation = parentDiv.querySelector(".checkup__interpretation");
            let checkup__description = parentDiv.querySelector(".checkup__description");
            let checkup__preparation = parentDiv.querySelector(".checkup__preparation");

            function changeInfo() {
                checkup__interpretation.style.display = "none";
                checkup__description.style.display = "block";
                checkup__preparation.style.display = "none";
            }
            changeInfo();
        } 
        if (event.target.classList.contains('link3')) {
            const parentDiv = event.target.parentNode.parentNode; //ищем родителя элемента по которому произошел клик
            let checkup__interpretation = parentDiv.querySelector(".checkup__interpretation");
            let checkup__description = parentDiv.querySelector(".checkup__description");
            let checkup__preparation = parentDiv.querySelector(".checkup__preparation");

            function changeInfo() {
                checkup__interpretation.style.display = "none";
                checkup__description.style.display = "none";
                checkup__preparation.style.display = "block";
            }
            changeInfo();
        } 

    });
});