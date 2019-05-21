# ETHNewYorkSubmission
EthNewYork Hackathon 2019 - New Lab, Brooklyn Navy Yard

# Project: SmartPiggies

An open source standard for a free peer-to-peer global derivatives market.
-
Telegram: SmartPiggies
-

SmartPiggies are non-fungible digital contracts that provide their owners with protection against undesirable changes in the price of any asset, product, or service. They also have a native self-auctioning mechanism that allows them to globally market themselves, eliminating the need for exchanges.

Historically, centralized authorities and rent-collecting intermediaries have been necessary due the trust and guarantees they inject into modern financial commitments. Today, with the guarantees provided by the Ethereum network and recent innovations provided by the global developer community, it is now possible to create robust programmable digital assets linked to real-world prices that have no dependencies on centralized authorities or intermediaries.

SmartPiggies are an example of simple, useful, globally accessible, peer-to-peer financial agreements that can exist on the Ethereum network today. 

For more information on the project and to read the pinkpaper please visit the [website](https://smartpiggies.com).


## What we built for EthNewYork


### ChainLink Custom Adapter Implementation

Problem 1: SmartPiggies, along with most contracts in general, are contingent on future events. Basic oracle functionality responds to current requests with current data. This results in a poor user experience as a contract lifecycle workflow in certain circumstances may fail to execute properly due to user timing or denial of service.

Solution 1: We use the "sleep" scheduler functionality of Chainlink Adapters to ask a Chainlink node to deliver a response in the future, eliminating issues related to user timing and denial of service.

Problem 2: If an attacker knows a SmartPiggy is referencing a specific data source at a specific time in the future, a coordinated manipulation of the data and/or denial of service attack could potentially be organized. Also, the service could have a temporary failure or disruption, preventing proper settlement of the SmartPiggy contract.

Solution 2: We created a custom Chainlink Adapter for use with SmartPiggies to poll the data source at periodic intervals and return an average, thereby potentially mitigating data source service failures and/or malicious attacks.

### The Graph SmartPiggies Explorer

Problem: Users need a convenient way to view and explore the SmartPiggies ecosystem.

Solution: We built a dapp that uses The Graph's GraphQL interface to quickly and conveniently retrieve and filter SmartPiggy contracts.

### Wyre Widget: Facilitate Creation and Purchase of SmartPiggies

Problem: Users of the SmartPiggy ecosystem should be able to acquire DAI with minimal effort to create and purchase SmartPiggies. Acquiring DAI through traditional means would hamper user adoption.

Solution: We use the Wyre Widget to allow users to acquire DAI directly via debit card or ACH.


## Tech stack

- Ethereum

- Chainlink

- The Graph

- Wyre

- Redux

- Metamask

- Solidity

- OpenZeppelin

- Truffle

- Drizzle

- Ganache

- ReactJS

- NodeJS


