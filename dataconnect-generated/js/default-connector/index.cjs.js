const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'azania-teen-coaching',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

