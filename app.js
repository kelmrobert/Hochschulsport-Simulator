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

// Show course list
function showCourseList() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('courseListScreen').style.display = 'block';

    // Show header on course list screen
    const header = document.querySelector('.pageheader');
    if (header) {
        header.style.display = 'block';
    }

    // Render course list with one random course
    renderCourseList();

    // Start timer when course list is visible
    startTime = Date.now();
    isRunning = true;
    document.getElementById('timerContainer').style.display = 'flex';
    timerInterval = setInterval(updateTimer, 10);
}

// Store the selected course index globally
let selectedCourseIndex = 0;

// Render one random course in list
function renderCourseList() {
    // Select random course
    selectedCourseIndex = Math.floor(Math.random() * courses.length);
    const course = courses[selectedCourseIndex];

    const container = document.getElementById('courseListContainer');

    // Create a mock description for the course
    const courseDescriptions = {
        "Boxen für Frauen": "Im Kurs <strong>Boxen für Frauen</strong> trainieren wir Technik, Kraft und Ausdauer. Der Kurs richtet sich an Fortgeschrittene, die bereits Grundkenntnisse im Boxsport haben und ihre Fähigkeiten weiter ausbauen möchten.",
        "Yoga - Hatha": "Im <strong>Yoga - Hatha Kurs</strong> werden traditionelle Hatha-Yoga-Übungen praktiziert. Der Fokus liegt auf Körperhaltungen (Asanas), Atemtechniken (Pranayama) und Entspannung. Für alle Level geeignet.",
        "Klettern Anfänger": "Im <strong>Kletterkurs für Anfänger</strong> lernen Sie die Grundlagen des Sportkletterns. Von der richtigen Sicherungstechnik bis zu den ersten Kletterrouten - alles für einen sicheren Einstieg in den Klettersport.",
        "Schwimmen - Techniktraining": "Im <strong>Schwimm-Techniktraining</strong> verbessern Fortgeschrittene ihre Schwimmtechnik in allen vier Schwimmarten. Individuelle Korrekturen und videogestützte Analyse helfen bei der Optimierung.",
        "Fußball - Mixed": "Beim <strong>Fußball - Mixed</strong> spielen wir zusammen ohne Leistungsdruck. Alle Geschlechter und Levels sind willkommen. Fair Play und Spaß am Spiel stehen im Vordergrund.",
        "Pilates": "Im <strong>Pilates-Kurs</strong> trainieren wir nach der Pilates-Methode mit Fokus auf Körpermitte, Atmung und fließende Bewegungen. Der Kurs ist für Einsteiger und leicht Fortgeschrittene geeignet."
    };

    const description = courseDescriptions[course.name] || `Im <strong>${course.name}</strong> Kurs trainieren wir gemeinsam. Vorkenntnisse sind hilfreich, aber keine Voraussetzung.`;

    // Generate instructor names based on course
    const instructors = {
        "Boxen für Frauen": ["Maria Schmidt", "Laura Weber"],
        "Yoga - Hatha": ["Sarah Klein"],
        "Klettern Anfänger": ["Thomas Müller", "Anna Fischer"],
        "Schwimmen - Techniktraining": ["Michael Becker"],
        "Fußball - Mixed": ["David Wagner", "Lisa Hoffmann"],
        "Pilates": ["Julia Schneider"]
    };

    const courseInstructors = instructors[course.name] || ["Max Mustermann"];
    const instructorHTML = courseInstructors.map(name => `<span>${name}</span>`).join('<br>');

    container.innerHTML = `
        <div id="c301" class="frame frame-default frame-type-list frame-layout-0">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-9">
                    <h1>${course.name}</h1>
                    <p>${description}</p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3">
                    <aside class="dwzeh_sportsmarginal">
                        <div class="dwzeh_singlecontact">
                            <div class="dwzeh_singlecontact_text">
                                <h3>Ansprechpartner</h3>
                                <h4>Geschäftsstelle TU-Sport</h4>
                                <ul>
                                    <li><a href="#" onclick="return false;" class="email-link encoded">E-Mail</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="headbutton">
                        <div class="bookingtablefilters" data-vacation="0" data-semtype="sem0" id="filterwrapper-sem0">
                            <div class="form-check form-check-inline">
                                <div>
                                    <input type="radio" id="showsemester-sem0" name="filter-sem0" class="form-check-input" value="1" checked>
                                    <label class="form-check-label" for="showsemester-sem0">Semesterangebote</label>
                                </div>
                                <div>
                                    <input type="radio" id="showvacations-sem0" name="filter-sem0" class="form-check-input" value="2">
                                    <label class="form-check-label" for="showvacations-sem0">Ferienangebote</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sem0" class="dwzeh_bookingtable">
                        <div class="table-caption">

                                Aktuelle Angebote



                            -
                            Wintersemester
                            2025/2026

                        </div>
                        <div class="table-header-group">
                            <div class="table-row">
                                <div class="table-head column-0"></div>
                                <div class="table-head column-1"></div>
                                <div class="table-head column-2">
                                    Details
                                </div>
                                <div class="table-head column-3">
                                    Datum
                                </div>
                                <div class="table-head column-4">
                                    Tag
                                </div>
                                <div class="table-head column-5">
                                    Uhrzeit
                                </div>
                                <div class="table-head column-6">
                                    Sportstätte
                                </div>
                                <div class="table-head column-7">
                                    Übungsleiter
                                </div>
                                <div class="table-head column-8">
                                    Entgelt
                                </div>
                                <div class="table-head column-9">
                                    Buchung
                                </div>
                            </div>
                        </div>
                        <div class="table-body-group">
                            <div class="table-row semtype_0 show " data-semester="0" data-endtime="1770245999" data-id="">
                                <div class="table-cell bookable column-0 "></div>
                                <div class="table-cell column-1"></div>
                                <div class="table-cell column-2">
                                    <span class="tablelable">Details</span>
                                    <span aria-label="${course.targetGroup}" data-tooltip="right">${course.targetGroup}</span>
                                </div>
                                <div class="table-cell column-3">
                                    <span class="tablelable">Datum</span>
                                    <span>${course.period.split('-')[0].trim()}-${course.period.split('-')[1].trim().substring(0, 5)}</span>
                                </div>
                                <div class="table-cell column-4">
                                    <span class="tablelable">Tag</span>
                                    <span title="" aria-label="" data-tooltip="up">



                                                ${course.schedule.split(' ')[0]}<br></span>
                                </div>
                                <div class="table-cell column-5">
                                    <span class="tablelable">Uhrzeit</span>
                                    <span>



                                                ${course.schedule.substring(course.schedule.indexOf(' ') + 1)}<br></span>
                                </div>
                                <div class="table-cell column-6 nonident" data-semid="197856">
                                    <span class="tablelable">Sportstätte</span>
                                    <div><a title="Detailansicht der Sportstätte" href="#" onclick="return false;">
                                                ${course.location}
                                            </a></div>
                                </div>
                                <div class="table-cell column-7">
                                    <span class="tablelable">Übungsleiter</span>
                                    <div>${instructorHTML}</div>
                                </div>
                                <div class="table-cell column-8 ">
                                    <span class="tablelable">Entgelt</span>
                                    <span data-tooltip="left" aria-label="${course.pricing}">
                                        ${course.pricing.match(/\d+/g).slice(0, 4).join('€/')}€</span>
                                </div>
                                <div class="bookable table-cell column-9">
                                    <span class="tablelable"></span>
                                    <a class="btn btn-default" title="${course.name} buchen" href="javascript:void(0);" onclick="startBooking(selectedCourseIndex);">
                                        buchen
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="table-footer-group"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12"></div>
            </div>
            <div class="row">
                <div class="col-12"></div>
            </div>
            <div class="row">
                <div class="12">
                    &nbsp;
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <a class="btn btn-default" href="#" onclick="return false;">Startseite</a>
                    &nbsp;


                    <a class="btn btn-default" href="#" onclick="return false;">A-Z Kursindex</a>
                </div>
                <div class="col-6"></div>
            </div>
        </div>
    `;
}

// Start booking process for selected course
function startBooking(courseIndex) {
    currentCourse = courses[courseIndex];

    // Update course info in the form
    document.getElementById('courseName').textContent = currentCourse.name + ', ' + currentCourse.courseId;
    document.getElementById('targetGroup').textContent = currentCourse.targetGroup;
    document.getElementById('schedule').innerHTML = '<b>' + currentCourse.schedule + '</b>&nbsp;&nbsp;&nbsp; ' + currentCourse.location;
    document.getElementById('period').textContent = currentCourse.period;
    document.getElementById('pricing').textContent = currentCourse.pricing;
    document.getElementById('courseDescription').innerHTML = '- ' + currentCourse.description + ' -<br> <hr> <br>' + currentCourse.note;

    // Update hidden course ID
    document.Formular.Kursnr.value = currentCourse.courseId;

    // Hide course list, show booking form
    document.getElementById('courseListScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';

    // Add scroll listener for navbar shrinking
    window.addEventListener('scroll', handleNavbarScroll);

    // Scroll to top when form appears
    window.scrollTo(0, 0);

    // Timer continues running (already started when course list appeared)
}

// Handle navbar shrinking on scroll
function handleNavbarScroll() {
    const header = document.querySelector('.pageheader');
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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

    // Remove scroll listener
    window.removeEventListener('scroll', handleNavbarScroll);

    // Reset header state
    const header = document.querySelector('.pageheader');
    if (header) {
        header.classList.remove('scrolled');
    }

    // Go back to course list
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('courseListScreen').style.display = 'block';

    // Render a new random course
    renderCourseList();

    // Restart the timer
    startTime = Date.now();
    isRunning = true;
    document.getElementById('timerContainer').style.display = 'flex';
    timerInterval = setInterval(updateTimer, 10);
}

function finalRestart() {
    // Hide final screen
    document.getElementById('finalTimerScreen').style.display = 'none';

    // Reset to start screen
    document.getElementById('startScreen').style.display = 'flex';

    // Remove scroll listener
    window.removeEventListener('scroll', handleNavbarScroll);

    // Reset header state
    const header = document.querySelector('.pageheader');
    if (header) {
        header.classList.remove('scrolled');
    }

    // Reset the form
    HTMLFormElement.prototype.reset.call(document.Formular);
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

    // Show final timer screen
    showFinalTimer();

    return false; // Prevent actual form submission
}

function showFinalTimer() {
    // Get final time
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const milliseconds = Math.floor((elapsed % 1000) / 10);

    const finalTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;

    // Hide main content and timer
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('timerContainer').style.display = 'none';

    // Hide header on final screen
    const header = document.querySelector('.pageheader');
    if (header) {
        header.style.display = 'none';
    }

    // Show final timer screen
    document.getElementById('finalTimerScreen').style.display = 'flex';
    document.getElementById('finalTimerDisplay').textContent = finalTime;
}
