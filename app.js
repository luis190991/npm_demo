const log4js = require('log4js');
//npm install --save log4js

const logger = log4js.getLogger();
logger.level = "error";

logger.debug("Mi primera app con npm.");
logger.info("Se ejecuto correctamente mi proceso.");
logger.warn("No se encontro el archivo esperado.");
logger.error("La aplicación no se pudo conectar a la bd.");
logger.fatal("La aplicación no se pudo conectar a la bd.");
