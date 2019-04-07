import utils from '../utils/utils';

const inputFilter = () => {
  const input = document.querySelector('.js-input');

  if (input) {
    input.onkeyup = () => {
      const filter = input.value.toLowerCase();
      const lis = document.querySelectorAll('.js-input-result');
      for (let i = 0; i < lis.length; i += 1) {
        if (lis[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
          utils.removeClass(lis[i], 'u-hidden');
        } else {
          utils.addClass(lis[i], 'u-hidden');
        }
      }
    };
  }
};

export default inputFilter;
