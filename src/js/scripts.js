const refs = {
  main: document.querySelector('.main'),
  burger: document.querySelector('.drop__burger'),
  list: document.querySelector('.drop__list'),
  sectionSelect: document.querySelector('.section_select'),
  sectionForm: document.querySelector('.section_form'),
  select: document.querySelector('.main__select'),
  selectTitle1: document.querySelector('.main__select_title1'),
  selectTitle2: document.querySelector('.main__select_title2'),
  selectTitle3: document.querySelector('.main__select_title3'),
  userChoice: document.querySelector('.userChoice'),
};

// burger open/close
function visible() {
  refs.list.classList.toggle('visible');
}
refs.burger.addEventListener('click', visible);

// create templete for enter <select>

/*
 *  createSelect_1
 */

const createSelect_1 = obj1 => {
  let container = document.createElement('ul');
  container.classList.add('select_list_1');

  for (let i = 0; i < obj1.length; i++) {
    let selectСhoice1 = document.createElement('li');
    selectСhoice1.classList.add('select_list_1__choice');
    selectСhoice1.textContent = `${obj1[i].name}`;

    container.append(selectСhoice1);
  }
  return container;
};

const insertList1 = createSelect_1(obj1);

refs.select.addEventListener('click', () => {
  refs.selectTitle1.after(insertList1);
});

const insertList1Handler1 = e => {
  refs.selectTitle1.textContent = e.target.innerText;
  refs.selectTitle1.classList.add('choice');
  insertList1.classList.add('hidden');
  refs.selectTitle2.classList.remove('hidden');
  localStorage.setItem('tmpStr2', e.target.innerText);
};

insertList1.addEventListener('click', insertList1Handler1);

/*
 *  createSelect_2
 */

const dropTmpHandler_2 = e => {
  const findByStr = localStorage.getItem('tmpStr2');

  const cutObject = obj1.find(el => el.name === findByStr).children;

  const createSelect_2 = obj2 => {
    let container = document.createElement('ul');
    container.classList.add('select_list_2');

    for (let i = 0; i < obj2.length; i++) {
      let selectСhoice2 = document.createElement('li');
      selectСhoice2.classList.add('select_list_2__choice');
      selectСhoice2.textContent = `${obj2[i].name}`;

      container.append(selectСhoice2);
    }
    return container;
  };

  const insertList2 = createSelect_2(cutObject);

  refs.select.addEventListener('click', () => {
    refs.selectTitle2.after(insertList2);
  });

  const insertList1Handler2 = e => {

    refs.selectTitle2.textContent = e.target.innerText;
    refs.selectTitle2.classList.add('choice');
    insertList2.classList.add('hidden');
    refs.selectTitle3.classList.remove('hidden');
    localStorage.setItem('tmpStr3', e.target.innerText);
  };

  insertList2.addEventListener('click', insertList1Handler2);
};

refs.selectTitle2.addEventListener('click', dropTmpHandler_2);

/*
 *  createSelect_3
 */
const dropTmpHandler_3 = e => {
  const findByStr2 = localStorage.getItem('tmpStr2');
  const findByStr3 = localStorage.getItem('tmpStr3');

  const cutObject = obj1
    .find(el => el.name === findByStr2)
    .children.find(el => el => el.name === findByStr3).nephews;

  const createSelect_3 = obj3 => {
    let container = document.createElement('ul');
    container.classList.add('select_list_3');

    for (let i = 0; i < obj3.length; i++) {
      let selectСhoice3 = document.createElement('li');
      selectСhoice3.classList.add('select_list_3__choice');
      selectСhoice3.textContent = `${obj3[i].name}`;

      container.append(selectСhoice3);
    }
    return container;
  };

  const insertList3 = createSelect_3(cutObject);

  refs.select.addEventListener('click', () => {
    refs.selectTitle3.after(insertList3);
  });

  const insertList1Handler3 = e => {
    refs.selectTitle3.textContent = e.target.innerText;
    refs.selectTitle3.classList.add('choice');
    refs.sectionSelect.classList.add('hidden');
    refs.sectionForm.classList.remove('hidden');
    refs.main.style.backgroundImage = 'none';
    localStorage.setItem('tmpStr3', e.target.innerText);
    refs.userChoice.textContent = e.target.innerText;
  };

  insertList3.addEventListener('click', insertList1Handler3);
};

refs.selectTitle3.addEventListener('click', dropTmpHandler_3);
