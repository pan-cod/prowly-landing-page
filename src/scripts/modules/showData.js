const showDataFromLocalStorage = dataFromLocalStorage => {
  const list = document.querySelector('.c-result');

  if (list) {
    const storedData = dataFromLocalStorage;
    let listItem;
    for (let i = 0; i < storedData.length; i += 1) {
      listItem = `<li id="${
        storedData[i].id
      }" class="c-result__item js-input-result">
      <img src="${storedData[i].avatar}" alt="avatar" class="c-result__img">
      <div class="c-result__details">
      <h5>${storedData[i].name}</h5>
      <p>${storedData[i].jobtitle}</p>
      </div>
      </li>`;
      list.insertAdjacentHTML('beforeend', listItem);
    }
  }
};

export default showDataFromLocalStorage;
