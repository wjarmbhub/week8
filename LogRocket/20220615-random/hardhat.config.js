require("@nomiclabs/hardhat-waffle");

require('dotenv').config()



// This is a sample Hardhat task. To learn how to create your own go to

// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {

const accounts = await hre.ethers.getSigners();



for (const account of accounts) {

console.log(account.address);

}

});

module.exports = {

solidity: "0.8.4",

networks: {

"goerli": {

url: "https://eth-goerli.g.alchemy.com/v2/stdJ5gkRbZJjHV8j3GJCUbbSXYwaTD3n",

accounts: ["prk"]
}

}


};