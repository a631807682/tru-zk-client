const ZKClient = require('../index'),
    path = require('path');

let zkLogDir = path.join(__dirname, "zklog");
let port = 9990;

let config = {
    zookeeperAddress: '192.168.1.204:2181',
    zkNodeName: 'truZkClient',
    port: port
};

let zkClient = ZKClient(config, zkLogDir);
zkClient.connect();
