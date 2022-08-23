# Full stack dapp

## Tooling

- [Next.js](https://github.com/vercel/next.js/): frontend
- [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Waffle](https://github.com/EthWorks/Waffle): tooling for writing comprehensive smart contract tests
- [Solhint](https://github.com/protofire/solhint): linter
- [Solcover](https://github.com/sc-forks/solidity-coverage) code coverage
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter

## Setup

```sh
$ npm install
```

Create a `.env` following the `.env.example`:

```
INFURA_API_KEY=zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
MNEMONIC=here is where your twelve words mnemonic should be put my friend
```

### Local Deployment & Frontend

```sh
$ npx hardhat node
$ npm run compile
$ npm run deploy:localhost
$ npm run dev
```

Change greeterAddress with your contract address.  
Manually add a local private key to your Metamask wallet and change to localhost:8545.

### Compile

Compile the smart contracts with Hardhat:

```sh
$ npm run compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ npm run typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
$ npm run lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ npm run lint:ts
```

### Format files

```sh
$ npm run prettier
```

### Test

Run unit tests:

```sh
$ npm run test
```

Run a single test:

```sh
$ npm run test test/MyContract.test.ts
```

### Coverage

Generate a test coverage report:

```sh
$ npm run coverage
```

### Deploy

Deploy to Ropsten network:

```sh
$ npm run deploy:ropsten
```

Deploy to development network:

```sh
$ npx hardhat node
```

```sh
$ npm run deploy:localhost
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ npm run clean
```
