const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '211.85.182.218',
  port: '3306',
  user: 'root',
  password: '1010',
  dateStrings: true
};
