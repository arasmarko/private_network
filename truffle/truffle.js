module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    QA: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "3", // ROPSTEN
      from: "0x3f30054c731f52972310df00b4da02625f37000e"
    }
  }
};
