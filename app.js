// Course Data
const courses = [
    {
        name: "Boxen für Frauen",
        courseId: "801904154",
        targetGroup: "Level 2-3",
        schedule: "Fr 19:00-20:30",
        location: "TU-Sportzentrum Dovestraße 6 / D",
        period: "24.10.2025-06.02.2026",
        pricing: "31 € für Studierende, 47 € für Beschäftigte, 47 € für Alumni der TU, 62 € für Externe",
        description: "noch 1 freier Platz in diesem Kurs",
        note: "kein Kursbetrieb Fr. 19.12.25 - einschließlich Mo 05.01.26 (Schließzeit)"
    },
    {
        name: "Yoga - Hatha",
        courseId: "801901234",
        targetGroup: "Alle Level",
        schedule: "Mo 18:00-19:30",
        location: "TU-Hauptgebäude, Raum H 3004",
        period: "21.10.2025-03.02.2026",
        pricing: "25 € für Studierende, 40 € für Beschäftigte, 40 € für Alumni der TU, 55 € für Externe",
        description: "noch 3 freie Plätze in diesem Kurs",
        note: "kein Kursbetrieb 22.12.25 - einschließlich 05.01.26 (Weihnachtspause)"
    },
    {
        name: "Klettern Anfänger",
        courseId: "801905678",
        targetGroup: "Anfänger ohne Vorkenntnisse",
        schedule: "Mi 17:00-19:00",
        location: "Kletterhalle TU Berlin, Marchstraße 12",
        period: "23.10.2025-05.02.2026",
        pricing: "45 € für Studierende, 65 € für Beschäftigte, 65 € für Alumni der TU, 85 € für Externe",
        description: "noch 2 freie Plätze in diesem Kurs",
        note: "Materialleihe inklusive"
    },
    {
        name: "Schwimmen - Techniktraining",
        courseId: "801902345",
        targetGroup: "Fortgeschrittene",
        schedule: "Di 20:00-21:00",
        location: "Schwimmhalle Charlottenburg",
        period: "22.10.2025-04.02.2026",
        pricing: "35 € für Studierende, 50 € für Beschäftigte, 50 € für Alumni der TU, 70 € für Externe",
        description: "Kurs voll - Warteliste verfügbar",
        note: "Bitte Schwimmbrille und Badekappe mitbringen"
    },
    {
        name: "Fußball - Mixed",
        courseId: "801906789",
        targetGroup: "Alle Level",
        schedule: "Do 19:00-21:00",
        location: "Sportplatz Waldschulallee",
        period: "24.10.2025-06.02.2026",
        pricing: "20 € für Studierende, 35 € für Beschäftigte, 35 € für Alumni der TU, 50 € für Externe",
        description: "noch 8 freie Plätze in diesem Kurs",
        note: "Bei Regen findet das Training in der Halle statt"
    },
    {
        name: "Pilates",
        courseId: "801903456",
        targetGroup: "Level 1-2",
        schedule: "Mi 18:30-20:00",
        location: "TU-Sportzentrum Dovestraße 6 / A",
        period: "23.10.2025-05.02.2026",
        pricing: "28 € für Studierende, 42 € für Beschäftigte, 42 € für Alumni der TU, 60 € für Externe",
        description: "noch 5 freie Plätze in diesem Kurs",
        note: "Bitte Matte und Handtuch mitbringen"
    }
];

let currentCourse = null;

// Timer Variables
let startTime = 0;
let timerInterval = null;
let isRunning = false;

// Load random course into the form
function loadRandomCourse() {
    const randomIndex = Math.floor(Math.random() * courses.length);
    currentCourse = courses[randomIndex];

    // Update course info in the form
    document.getElementById('courseName').textContent = currentCourse.name + ', ' + currentCourse.courseId;
    document.getElementById('targetGroup').textContent = currentCourse.targetGroup;
    document.getElementById('schedule').innerHTML = '<b>' + currentCourse.schedule + '</b>&nbsp;&nbsp;&nbsp; ' + currentCourse.location;
    document.getElementById('period').textContent = currentCourse.period;
    document.getElementById('pricing').textContent = currentCourse.pricing;
    document.getElementById('courseDescription').innerHTML = '- ' + currentCourse.description + ' -<br> <hr> <br>' + currentCourse.note;

    // Update hidden course ID
    document.Formular.Kursnr.value = currentCourse.courseId;
}

function startSpeedrun() {
    // Load a random course first
    loadRandomCourse();

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('timerContainer').style.display = 'flex';

    startTime = Date.now();
    isRunning = true;
    timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const milliseconds = Math.floor((elapsed % 1000) / 10);

    document.getElementById('timerDisplay').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetSpeedrun() {
    // Clear the timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Reset the form
    HTMLFormElement.prototype.reset.call(document.Formular);

    // Load a new random course
    loadRandomCourse();

    // Restart the timer immediately
    startTime = Date.now();
    isRunning = true;

    // Update display immediately and then start interval
    updateTimer();
    timerInterval = setInterval(updateTimer, 10);
}

// Original validation functions
function EingabeOK(string) {
    if (!string) return false;
    var iChars = "^*|,\"<:>[]{}`';&#%";
    for (var i = 0; i < string.length; i++) {
        if (iChars.indexOf(string.charAt(i)) != -1) return false;
    }
    return true;
}

function chkFormular() {
    if((document.Formular.Geschlecht[0].checked == false) &&
        (document.Formular.Geschlecht[1].checked == false) &&
        (document.Formular.Geschlecht[2].checked == false) &&
        (document.Formular.Geschlecht[3].checked == false) ) {
        document.Formular.Geschlecht[0].focus();
        alert("Bitte geben Sie Ihr Geschlecht an !");
        return false;
    }
    if(!EingabeOK(document.Formular.Vorname.value) || (document.Formular.Vorname.value.indexOf('.') > -1)) {
        document.Formular.Vorname.focus();
        alert("Bitte geben Sie Ihren Vornamen vollständig ein!");
        return false;
    }
    if(!EingabeOK(document.Formular.Name.value) || (document.Formular.Name.value.indexOf('.') > 0)) {
        document.Formular.Name.focus();
        alert("Bitte geben Sie Ihren Nachnamen vollständig ein!");
        return false;
    }
    if(!EingabeOK(document.Formular.Strasse.value)) {
        document.Formular.Strasse.focus();
        alert("Bitte geben Sie Ihre Straße und Hausnummer ein!");
        return false;
    }

    var chkZ=0;
    for(var i=0;i<5;++i)
        if(document.Formular.Ort.value.charAt(i) < "0" || document.Formular.Ort.value.charAt(i) > "9")
            chkZ = -1;
    if(document.Formular.Ort.value.length < 7)
        chkZ = -1;
    if(!EingabeOK(document.Formular.Ort.value) || (chkZ == -1)) {
        document.Formular.Ort.focus();
        alert("Bitte geben Sie Ihre PLZ und Ihren Wohnort ein!");
        return false;
    }

    if(document.Formular.Statusorig.selectedIndex == 0) {
        document.Formular.Statusorig.focus();
        alert("Bitte wählen Sie Ihren Status aus!");
        return false;
    }

    if((document.Formular.Statusorig.options[document.Formular.Statusorig.selectedIndex].value.substr(0,2)=='S-') &&
        (!EingabeOK(document.Formular.Matnr.value))) {
        document.Formular.Matnr.focus();
        alert("Bitte geben Sie Ihre Immatrikulationsnummer ein!");
        return false;
    }
    if((document.Formular.Statusorig.options[document.Formular.Statusorig.selectedIndex].value.substr(0,2)=='B-') &&
        (!EingabeOK(document.Formular.Institut.value))) {
        document.Formular.Institut.focus();
        alert("Bitte geben Sie Ihre dienstliche Telefonnummer ein!");
        return false;
    }

    if(!EingabeOK(document.Formular.Tel.value)) {
        document.Formular.Tel.focus();
        alert("Dies ist keine gültige Telefonnummer !");
        return false;
    }
    if((!EingabeOK(document.Formular.Mail.value)) || (document.Formular.Mail.value.indexOf('@') < 1)) {
        document.Formular.Mail.focus();
        alert("Dies ist keine gültige E-Mail-Adresse !");
        return false;
    }

    if(!EingabeOK(document.Formular.Geburtsdatum.value)) {
        document.Formular.Geburtsdatum.focus();
        alert("Bitte geben Sie Ihr Geburtsdatum ein!");
        return false;
    }

    if(!EingabeOK(document.Formular.iban.value)) {
        document.Formular.iban.focus();
        alert("Bitte geben Sie Ihre IBAN ohne Leer- oder Sonderzeichen ein!");
        return false;
    }

    if(!EingabeOK(document.Formular.bic.value)) {
        document.Formular.bic.focus();
        alert("Bitte geben Sie Ihre BIC ohne Leer- oder Sonderzeichen ein!");
        return false;
    }

    if (document.Formular.BuchBed.checked == false) {
        document.Formular.BuchBed.focus();
        alert("Sie müssen den Buchungs- und Teilnahmebedingungen zustimmen, um an diesem Angebot teilnehmen zu können!");
        return false;
    }

    // Stop timer on successful validation
    stopTimer();
    return false; // Prevent actual form submission
}
