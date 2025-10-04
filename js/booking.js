/**
 * Booking Table filter Script
 */

//get all "tables"
let filterContainers = document.querySelectorAll('.bookingtablefilters');

//testing
if(filterContainers.length > 0){
  for(let i = 0; i < filterContainers.length; i++){
    createFiltersByTable(filterContainers[i].dataset.semtype);
  }
}else{
  console.log('no tables');
}






function createFiltersByTable(table){
  //get the target table
  let targettable = document.querySelector('#'+table);
  let targetFilter = document.querySelector('#filterwrapper-'+table);
  let tablePureVacationsCurses = document.querySelectorAll('#'+targettable.id+' .semtype_1');
  let tableMixedVacationsCurses = document.querySelectorAll('#'+targettable.id+' .semtype_2');
  let tableSemesters = document.querySelectorAll('#'+targettable.id+' .table-row')
  let tableObsolete = document.querySelectorAll('#'+targettable.id+' .obsolete');

  //filters vacation ore regular courses
  if (tablePureVacationsCurses.length > 0 || tableMixedVacationsCurses.length > 0) {

    let part01 = document.createElement('DIV')
    let part02 = document.createElement('DIV')
    let part03 = document.createElement('DIV')

    let a = document.createElement('DIV')
    a.setAttribute('class', 'form-check form-check-inline')

    let a_input_01 = document.createElement('INPUT')
    a_input_01.setAttribute('type', 'radio')
    a_input_01.setAttribute('id', 'showsemester-'+table)
    a_input_01.setAttribute('name', 'filter-'+table)
    a_input_01.setAttribute('class', 'form-check-input')
    a_input_01.setAttribute('value', '1')
    a_input_01.addEventListener('change', function (e) {
      filterOffers(table,tableSemesters)
    })
    let a_label_01 = document.createElement('LABEL')
    a_label_01.setAttribute('class', 'form-check-label')
    a_label_01.setAttribute('for', 'showsemester-'+table)
    a_label_01.innerText = 'Semesterangebote'

    let a_input_02 = document.createElement('INPUT')
    a_input_02.setAttribute('type', 'radio')
    a_input_02.setAttribute('id', 'showvacations-'+table)
    a_input_02.setAttribute('name', 'filter-'+table)
    a_input_02.setAttribute('class', 'form-check-input')
    a_input_02.setAttribute('value', '2')
    a_input_02.addEventListener('change', function (e) {
      filterOffers(table,tableSemesters)
    })

    let a_label_02 = document.createElement('LABEL')
    a_label_02.setAttribute('class', 'form-check-label')
    a_label_02.setAttribute('for', 'showvacations-'+table)
    a_label_02.innerText = 'Ferienangebote'

    part01.appendChild(a_input_01)
    part01.appendChild(a_label_01)
    part02.appendChild(a_input_02)
    part02.appendChild(a_label_02)

    a.appendChild(part01)
    a.appendChild(part02)

    //filter obsolete items
    if (tableObsolete.length > 0) {
      let b = document.createElement('DIV')
      b.setAttribute('class', 'form-check')
      let b_input_01 = document.createElement('INPUT')
      b_input_01.setAttribute('type', 'checkbox')
      b_input_01.setAttribute('id', 'showobsolete-'+table)
      b_input_01.setAttribute('class', 'form-check-input')
      b_input_01.addEventListener('change', function (e) {
        showHideObsoleteOffers(table,tableObsolete)
      })
      let b_label_01 = document.createElement('LABEL')
      b_label_01.setAttribute('class', 'form-check-label')
      b_label_01.setAttribute('for', 'showobsolete-'+table)
      b_label_01.setAttribute('value', '1')
      b_label_01.innerText = 'Abgelaufene Kurse anzeigen'

      part03.appendChild(b_input_01)
      part03.appendChild(b_label_01)

      a.appendChild(part03)
    }
    targetFilter.insertAdjacentElement('afterbegin', a)
  }
}






function showHideObsoleteOffers (table,tableObsolete) {
  let checkboxChecked = document.querySelector('#showobsolete-'+table).checked;

  if (checkboxChecked === true) {
    let i = 0
    while (i < tableObsolete.length) {
      tableObsolete[i].classList.remove('hide')
      i++
    }
  } else {
    let i = 0
    while (i < tableObsolete.length) {
      tableObsolete[i].classList.add('hide')
      i++
    }
  }
  //filterOffers();
}
function filterOffers (table,tableSemesters) {

  let checkedSemester = document.querySelector('#showsemester-'+table)
  let checkedVacation = document.querySelector('#showvacations-'+table)
  let checkedValue = false;

  if(document.querySelector('#showobsolete-'+table)){
    checkedValue = document.querySelector('#showobsolete-'+table).checked;
  }
  if (checkedVacation.checked) {
    let i = 0
    while (i < tableSemesters.length) {
      if (tableSemesters[i].classList.contains('semtype_0')) {
        tableSemesters[i].classList.add('hide')
      } else {
        if (checkedValue === true) {
          tableSemesters[i].classList.remove('hide')
        } else {
          if (!tableSemesters[i].classList.contains('obsolete')) {
            tableSemesters[i].classList.remove('hide')
          }
        }
      }
      i++
    }
  }
  if (checkedSemester.checked) {
    let i = 0
    while (i < tableSemesters.length) {
      if (tableSemesters[i].classList.contains('semtype_2')) {
        tableSemesters[i].classList.add('hide')
      } else {
        if (checkedValue === true) {
          tableSemesters[i].classList.remove('hide')
        } else {
          if (!tableSemesters[i].classList.contains('obsolete')) {
            tableSemesters[i].classList.remove('hide')
          }
        }
      }
      i++
    }
  }
}

function manipulateBookingTableAddresses(){
    if(window.innerWidth <= 992){
      let rows = document.querySelectorAll('.dwzeh_bookingtable .table-body-group .table-row');
      let i = 0
      while (i < rows.length) {
        let collectedstrings = '';
        let cols = rows[i].querySelectorAll('.ident');
        //collecting another adresses
        let x = 0;
        while (x < cols.length) {
          if(cols[x].innerHTML !== ''){
            collectedstrings +='<br> '+cols[x].innerHTML
            cols[x].innerHTML = '';
          }
          x++;
        }
        let target = rows[i].querySelector('.column-6.nonident');
        target.innerHTML = target.innerHTML+collectedstrings;
        i++;
      }
    }
}

document.addEventListener('DOMContentLoaded', function(){
  manipulateBookingTableAddresses();
});
window.addEventListener("resize",manipulateBookingTableAddresses);



//Preselect preview
if(filterContainers.length > 0){
  for(let i = 0; i < filterContainers.length; i++){
    let table = filterContainers[i].dataset.semtype;
    let targetFilter = document.getElementById('filterwrapper-'+table);
    let targetCheckSemester = document.getElementById( 'showsemester-'+table);
    let targetCheckVacation = document.getElementById( 'showvacations-'+table);
    if(parseInt(targetFilter.dataset.vacation) === 1){
      targetCheckVacation.checked = true;
    }else{
      targetCheckSemester.checked = true;
    }
  }
}

