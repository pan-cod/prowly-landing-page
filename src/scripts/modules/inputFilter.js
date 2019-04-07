import utils from '../utils/utils';

const inputFilter = () => {
  const input = document.querySelector('.js-input');

  if (input) {
    input.onkeyup = utils.debounce(() => {
      const filter = input.value.toLowerCase();
      const items = document.querySelectorAll('.js-input-result');
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].innerText.toLowerCase().indexOf(filter) > -1) {
          utils.removeClass(items[i], 'u-hidden');
        } else {
          utils.addClass(items[i], 'u-hidden');
        }
      }
    }, 500);
  }
};

export default inputFilter;
