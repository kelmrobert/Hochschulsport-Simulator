// Timer Variables
let startTime = 0;
let timerInterval = null;
let isRunning = false;

function startSpeedrun() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('timerOverlay').style.display = 'flex';

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
    clearInterval(timerInterval);
    isRunning = false;

    // Reset the timer display
    document.getElementById('timerDisplay').textContent = '00:00.00';

    // Reset the form
    document.Formular.reset();

    // Restart the timer immediately without showing the start screen
    startTime = Date.now();
    isRunning = true;
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
