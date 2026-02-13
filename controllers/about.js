'use strict';

import logger from "../utils/logger.js";
import card from "../models/card.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About the playlist app",
      info: card.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('about', viewData);   
    //response.send('About the Playlist app');   
  },
};

export default about;