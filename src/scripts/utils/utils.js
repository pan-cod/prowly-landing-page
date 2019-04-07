const utils = {
  /* eslint-disable  no-param-reassign */
  addClass: function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      const classes = el.className.split(' ');
      const existingIndex = classes.indexOf(className);

      if (existingIndex === -1) {
        classes.push(className);
      }

      el.className = classes.join(' ');
    }
  },

  removeClass: function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(
        new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
        ' ',
      );
    }
  },
  /* eslint-enable  no-param-reassign */
};

export default utils;
