'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const card = {

  store: new JsonStore('./models/card.json', { employees: [] }),
  collection: 'employees',
  //array: 'creators',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default card;
