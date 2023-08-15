"use client";

import { Divider } from "@/components/Divider";
import { SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import AnimatedLink from "../AnimatedLink";
import { Icon } from "../Icon";

export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const polymarketCode = `pragma solidity ^0.8.14;

contract OO_GettingStarted {
  bytes32 identifier = bytes32 ("YES_OR_NO_QUERY");
  bytes ancillaryData =

    bytes("Q: Did the Chiefs beat the Eagles in the 2022-2023 NFL Superbowl? A:1 for yes. 0 for no.");

  uint256 requestTime = 0;
  function requestPrice() public {
    requestTime = block.timestamp;
    IERC20 bondCurrency = IERC20(0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6);
    uint256 reward = 0;
`;

  const governanceCode = `pragma solidity ^0.8.14;
/**
 * @title Optimistic Governor
 * @notice A contract that allows optimistic governance of a set of transactions. The contract can be used to propose
 * transactions that can be challenged by anyone. If the challenge is not resolved within a certain liveness period, the
 * transactions can be executed.
 */
contract OptimisticGovernor {
    function proposeTransactions(Transaction[] memory _transactions, bytes memory _explanation) external nonReentrant {
        // note: Optional explanation explains the intent of the transactions to make comprehension easier.
        uint256 time = getCurrentTime();
        address proposer = msg.sender;

        // Create proposal in memory to emit in an event.
        Proposal memory proposal;
        proposal.requestTime = time;

        // Add transactions to proposal in memory.
        for (uint256 i = 0; i < _transactions.length; i++) {
            // If the transaction has any data with it the recipient must be a contract, not an EOA.
            if (_transactions[i].data.length > 0) {
                require(_isContract(_transactions[i].to), "EOA can't accept tx with data");
            }
        }
        proposal.transactions = _transactions;

        // Create the proposal hash.
        bytes32 proposalHash = keccak256(abi.encode(_transactions));

        // Add the proposal hash, explanation and rules to ancillary data.
        bytes memory claim = _constructClaim(proposalHash, _explanation);

        // Check that the proposal is not already mapped to an assertionId, i.e., is not a duplicate.
        require(proposalHashes[proposalHash] == bytes32(0), "Duplicate proposals not allowed");

        // Get the bond from the proposer and approve the required bond to be used by the Optimistic Oracle V3.
        // This will fail if the proposer has not granted the Optimistic Governor contract an allowance
        // of the collateral token equal to or greater than the totalBond.
        uint256 totalBond = getProposalBond();
        collateral.safeTransferFrom(msg.sender, address(this), totalBond);
        collateral.safeIncreaseAllowance(address(optimisticOracleV3), totalBond);

        // Assert that the proposal is correct at the Optimistic Oracle V3.
        bytes32 assertionId =
            optimisticOracleV3.assertTruth(
                claim, // claim containing proposalHash, explanation and rules.
                proposer, // asserter will receive back bond if the assertion is correct.
                address(this), // callbackRecipient is set to this contract for automated proposal deletion on disputes.
                escalationManager, // escalationManager (if set) used for whitelisting proposers / disputers.
                liveness, // liveness in seconds.
                collateral, // currency in which the bond is denominated.
                totalBond, // bond amount used to assert proposal.
                identifier, // identifier used to determine if the claim is correct at DVM.
                bytes32(0) // domainId is not set.
            );

        // Maps the proposal hash to the returned assertionId and vice versa.
        proposalHashes[proposalHash] = assertionId;
        assertionIds[assertionId] = proposalHash;

        emit TransactionsProposed(
            proposer,
            time,
            assertionId,
            proposal,
            proposalHash,
            _explanation,
            rules,
            time + liveness
        );
`;

  const insuranceCode = `pragma solidity ^0.8.14;

/**
 * @title Insurance Arbitrator Contract
 * @notice This example implementation allows insurer to issue insurance policy by depositing insured amount,
 * designating the insured beneficiary and describing insured event.
 */
contract InsuranceArbitrator is Testable {

    function submitClaim(bytes32 policyId) external {
        InsurancePolicy storage claimedPolicy = insurancePolicies[policyId];
        require(claimedPolicy.insuredAddress != address(0), "Insurance not issued");
        require(!claimedPolicy.claimInitiated, "Claim already initiated");

        claimedPolicy.claimInitiated = true;
        uint256 timestamp = getCurrentTime();
        bytes memory ancillaryData = abi.encodePacked(ancillaryDataHead, claimedPolicy.insuredEvent, ancillaryDataTail);
        bytes32 claimId = _getClaimId(timestamp, ancillaryData);
        insuranceClaims[claimId] = policyId;

        // Initiate price request at Optimistic Oracle.
        oo.requestPrice(priceIdentifier, timestamp, ancillaryData, currency, 0);

        // Configure price request parameters.
        uint256 proposerBond = (claimedPolicy.insuredAmount * oracleBondPercentage) / 1e18;
        uint256 totalBond = oo.setBond(priceIdentifier, timestamp, ancillaryData, proposerBond);
        oo.setCustomLiveness(priceIdentifier, timestamp, ancillaryData, optimisticOracleLivenessTime);
        oo.setCallbacks(priceIdentifier, timestamp, ancillaryData, false, false, true);

        // Propose canonical value representing "True"; i.e. the insurance claim is valid.
        currency.safeTransferFrom(msg.sender, address(this), totalBond);
        currency.safeApprove(address(oo), totalBond);
        oo.proposePriceFor(msg.sender, address(this), priceIdentifier, timestamp, ancillaryData, int256(1e18));

        emit ClaimSubmitted(timestamp, claimId, policyId);
    }
  }
`;

  const bridgeExampleCode = `pragma solidity ^0.8.14;

/**
 * @notice Contract deployed on Ethereum that houses L1 token liquidity for all SpokePools. A dataworker can interact
 * with merkle roots stored in this contract via inclusion proofs to instruct this contract to send tokens to L2
 * SpokePools via "pool rebalances" that can be used to pay out relayers on those networks.
 */
contract HubPool {

  function disputeRootBundle() public nonReentrant zeroOptimisticOracleApproval {
      uint32 currentTime = uint32(getCurrentTime());
      require(currentTime <= rootBundleProposal.challengePeriodEndTimestamp, "Request passed liveness");

      // Request price from OO and dispute it.
      uint256 finalFee = _getBondTokenFinalFee();

    if (finalFee >= bondAmount) {
        _cancelBundle();
        return;
    }

    SkinnyOptimisticOracleInterface optimisticOracle = _getOptimisticOracle();
}
`;

  const rwaCode = `pragma solidity ^0.8.14;

/**
 * @title Long Short Pair.
 * @notice Uses a combination of long and short tokens to tokenize the bounded price exposure to a given identifier.
 */
contract LongShortPair {
  function settle(uint256 longTokensToRedeem, uint256 shortTokensToRedeem)
  public
  nonReentrant()
  returns (uint256 collateralReturned)
{
  // Either early expiration is enabled and it's before the expiration time or it's after the expiration time.
  require(
      (enableEarlyExpiration && getCurrentTime() < expirationTimestamp) ||
          getCurrentTime() >= expirationTimestamp,
      "Cannot settle"
  );

  // Get the settlement price and store it. Also sets expiryPercentLong to inform settlement. Reverts if either:
  // a) the price request has not resolved (either a normal expiration call or early expiration call) or b) If the
  // the contract was attempted to be settled early but the price returned is the ignore oracle price.
  // Note that we use the bool receivedSettlementPrice over checking for price != 0 as 0 is a valid price.
  if (!receivedSettlementPrice) getExpirationPrice();

  require(longToken.burnFrom(msg.sender, longTokensToRedeem));
  require(shortToken.burnFrom(msg.sender, shortTokensToRedeem));

  // expiryPercentLong is a number between 0 and 1e18. 0 means all collateral goes to short tokens and 1e18 means
  // all collateral goes to the long token. Total collateral returned is the sum of payouts.
  uint256 longCollateralRedeemed =
      FixedPoint
          .Unsigned(longTokensToRedeem)
          .mul(FixedPoint.Unsigned(collateralPerPair))
          .mul(FixedPoint.Unsigned(expiryPercentLong))
          .rawValue;
  uint256 shortCollateralRedeemed =
      FixedPoint
          .Unsigned(shortTokensToRedeem)
          .mul(FixedPoint.Unsigned(collateralPerPair))
          .mul(FixedPoint.fromUnscaledUint(1).sub(FixedPoint.Unsigned(expiryPercentLong)))
          .rawValue;

  collateralReturned = longCollateralRedeemed + shortCollateralRedeemed;
  collateralToken.safeTransfer(msg.sender, collateralReturned);

  emit PositionSettled(msg.sender, collateralReturned, longTokensToRedeem, shortTokensToRedeem);
}
}
`;

  const tabs = [
    {
      title: "Governance",
      shortTitle: "Govern",
      content: `The OO can be used to enable more trustless forms of DAO governance. The first product using this is oSnap, which is a trustless method to execute the results of a Snapshot vote on chain.`,
      usedBy: "oSnap",
      example: "Does this on-chain transaction match an approved Snapshot vote?",
      code: governanceCode,
      icon: (
        <Icon
          name="scale"
          className="w-8 h-8 transition-transform group-data-[state=active]:-translate-y-3 [&_path]:group-data-[state=active]:stroke-red"
        />
      ),
      docHref: "https://docs.uma.xyz/developers/optimistic-oracle",
      docText: "Build your first smart contract with UMA",
    },
    {
      title: "Prediction Markets",
      shortTitle: "Predict",
      content: `The OO can validate natural-language statements and answer questions about real-world events.
      This includes arbitrary questions about weather, sports, elections, markets or anything universally verifiable.`,
      usedBy: "Polymarket",
      example: "“Did the Chiefs beat the Eagles in the 2022-2023 NFL Superbowl?”",
      code: polymarketCode,
      icon: (
        <Icon
          name="wand"
          className="w-8 h-8 transition text-grey-400 group-data-[state=active]:-translate-y-3 group-data-[state=active]:text-red"
        />
      ),
      docHref: "https://docs.uma.xyz/developers/optimistic-oracle",
      docText: "Build your first smart contract with UMA",
    },
    {
      title: "Insurance",
      shortTitle: "Insure",
      content: `The OO is uniquely positioned to help decide if insurance claims should be paid out. It be used as a trustless keeper service to trigger insurance payment once an insured event has occurred.`,
      usedBy: "Sherlock",
      example: "Is this insurance claim about a smart contract hack valid?",
      code: insuranceCode,
      icon: (
        <Icon
          name="tube"
          className="w-8 h-8 transition text-grey-400 group-data-[state=active]:-translate-y-3 group-data-[state=active]:text-red"
        />
      ),
      docHref: "https://docs.uma.xyz/developers/optimistic-oracle",
      docText: "Build your first smart contract with UMA",
    },
    {
      title: "Cross-Chain Communication",
      shortTitle: "Bridge",
      content: `The OO can verify any statement, including statements about data on other networks.
      The OO can be used in this way for cross chain messaging. It is used by the bridge Across Protocol today to enable cross-chain asset bridging.`,
      usedBy: "Across",
      example: "Did this deposit event on a different chain happen?",
      code: bridgeExampleCode,
      icon: (
        <Icon
          name="telescope"
          className="w-8 h-8 transition text-grey-400 group-data-[state=active]:-translate-y-3 group-data-[state=active]:text-red"
        />
      ),
      docHref: "https://docs.uma.xyz/developers/optimistic-oracle",
      docText: "Build your first smart contract with UMA",
    },
    {
      title: "Real World Assets",
      shortTitle: "RWA",
      content: `UMA's OO can be used to bring any piece of widely verifiable real world data on chain. This can include data about real world assets, allowing for the creation of many things such as as synthetic assets.`,
      usedBy: "Jarvis",
      example: "What is the EUR/USD exchange rate?",
      code: rwaCode,
      icon: (
        <Icon
          name="globe"
          className="w-8 h-8 transition text-grey-400 group-data-[state=active]:-translate-y-3 group-data-[state=active]:text-red"
        />
      ),
      docHref: "https://docs.uma.xyz/developers/optimistic-oracle",
      docText: "Build your first smart contract with UMA",
    },
  ];

  const codeExamples = tabs.map(({ code }) => code);
  const docLink = tabs.map(({ docHref, docText }) => ({ href: docHref, text: docText }));

  return (
    <Root
      className="grid grid-cols-[100%] grid-rows-[auto,auto,auto] gap-y-11 lg:grid-cols-[1fr,1fr] lg:grid-rows-[auto,auto] lg:gap-x-14 lg:gap-y-0"
      defaultValue="0"
      onValueChange={(value: string) => {
        setActiveTabIndex(Number(value));
      }}
    >
      <List className="relative row-start-1 grid grid-cols-5 items-center gap-3 border-b border-grey-400 lg:col-span-2 lg:col-start-1 lg:mb-14">
        {tabs.map(({ title, shortTitle, icon }, tabIndex) => (
          <Trigger
            className="group text-grey-400 transition duration-300 hover:opacity-80 data-[state=active]:-translate-y-3 data-[state=active]:text-red"
            key={title}
            value={tabIndex.toString()}
          >
            <div className="grid justify-items-center gap-3 pb-5 transition-[padding] group-data-[state=active]:pb-0">
              {icon}
              <h3 className="text-xs text-grey-400 transition group-data-[state=active]:-translate-y-3 group-data-[state=active]:text-red lg:text-lg">
                <>
                  <span className="hidden lg:inline">{title}</span>
                  <span className="lg:hidden">{shortTitle}</span>
                </>
              </h3>
            </div>
          </Trigger>
        ))}
        <div
          className="absolute -bottom-[1px] h-[3px] bg-red transition-[left] duration-300"
          style={{
            width: "calc(100% / 5)",
            left: `calc(100% / 5 * ${activeTabIndex})`,
          }}
        />
      </List>
      {tabs.map(({ content, title, usedBy, example }, tabIndex) => (
        <Content
          className="row-start-3 transition data-[state=active]:animate-fade-in data-[state=inactive]:animate-fade-out lg:col-span-1 lg:col-start-1 lg:row-start-2"
          value={tabIndex.toString()}
          key={title}
        >
          <div>
            <h2 className="mb-3 text-3xl sm:text-6xl">{title}</h2>
            {content.split("\n").map((text, index) => (
              <p className="mb-3 text-xl" key={index}>
                {text}
              </p>
            ))}
            <div className="mb-6 mt-12">
              <Divider />
            </div>
            <p className="mb-2 text-lg text-grey-500">Real question used by {usedBy}</p>
            <p className="text-lg text-red">{example}</p>
          </div>
        </Content>
      ))}
      <div className="row-start-2 lg:col-start-2">
        <SandpackProvider
          options={{
            classes: {
              "sp-layout": "custom-layout",
            },
          }}
          theme={githubLight}
        >
          <SandpackLayout>
            <SandpackCodeViewer
              code={codeExamples[activeTabIndex]}
              showLineNumbers
              wrapContent
              initMode="user-visible"
            />
          </SandpackLayout>
        </SandpackProvider>
        <div className="mt-6 flex w-full items-center justify-start lg:justify-center">
          <AnimatedLink href={docLink[activeTabIndex].href}>{docLink[activeTabIndex].text}</AnimatedLink>
        </div>
      </div>
    </Root>
  );
}
