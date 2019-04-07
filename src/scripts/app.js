/*
  Project: Prowly Landing Page
  Author: pan-cod
 */

import showDataFromLocalStorage from './modules/showData';
import inputFilter from './modules/inputFilter';

const data = [
  {
    id: 1,
    name: 'Joanna Wiśniewska',
    jobtitle: 'Journalist',
    avatar: 'http://i.pravatar.cc/300',
  },
  {
    id: 2,
    name: 'Paulina Wiśniowska',
    jobtitle: 'Reporter',
    avatar: 'http://i.pravatar.cc/302',
  },
  {
    id: 3,
    name: 'Rafał Wiśniowski',
    jobtitle: 'Journalist',
    avatar: 'http://i.pravatar.cc/303',
  },
  {
    id: 4,
    name: 'Katarzyna Wiśniewska',
    jobtitle: 'Journalist',
    avatar: 'http://i.pravatar.cc/304',
  },
  {
    id: 5,
    name: 'Jan Wiśniewski',
    jobtitle: 'Reporter',
    avatar: 'http://i.pravatar.cc/305',
  },
];

localStorage.setItem('data', JSON.stringify(data));

const dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));

showDataFromLocalStorage(dataFromLocalStorage);
inputFilter();
