"use client";

import { Divider } from "@/components/Divider";
import { mobileAndUnder, tabletAndUnder } from "@/constant";
import { SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import Globe from "public/assets/globe.svg";
import Scale from "public/assets/scale.svg";
import Telescope from "public/assets/telescope.svg";
import Tube from "public/assets/tube.svg";
import Wand from "public/assets/wand.svg";
import { CSSProperties, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import AnimatedLink from "./AnimatedLink";

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
      Icon: ScaleIcon,
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
      Icon: WandIcon,
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
      Icon: TubeIcon,
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
      Icon: TelescopeIcon,
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
      Icon: GlobeIcon,
      docHref: "https://docs.uma.xyz/developers/optimistic-oracle",
      docText: "Build your first smart contract with UMA",
    },
  ];

  const codeExamples = tabs.map(({ code }) => code);
  const docLink = tabs.map(({ docHref, docText }) => ({ href: docHref, text: docText }));

  return (
    <TabsRoot defaultValue="0" onValueChange={(value: string) => setActiveTabIndex(Number(value))}>
      <TabsList>
        {tabs.map(({ title, shortTitle, Icon }, tabIndex) => (
          <TabsTrigger key={title} value={tabIndex.toString()}>
            <TabsTriggerWrapper>
              <Icon />
              <DesktopTabsTriggerTitle>{title}</DesktopTabsTriggerTitle>
              <MobileTabsTriggerTitle>{shortTitle}</MobileTabsTriggerTitle>
            </TabsTriggerWrapper>
          </TabsTrigger>
        ))}
        <ActiveIndicator
          style={
            {
              "--active-tab-index": activeTabIndex,
            } as CSSProperties
          }
        />
      </TabsList>
      {tabs.map(({ content, title, usedBy, example }, tabIndex) => (
        <TabsContent value={tabIndex.toString()} key={title}>
          <TabsContentWrapper>
            <TabsContentTitle>{title}</TabsContentTitle>
            {content.split("\n").map((text, index) => (
              <TabsContentText key={index}>{text}</TabsContentText>
            ))}
            <DividerWrapper>
              <Divider />
            </DividerWrapper>
            <UsedBy>Real question used by {usedBy}</UsedBy>
            <Example>{example}</Example>
          </TabsContentWrapper>
        </TabsContent>
      ))}
      <SandpackWrapper>
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
        <RemixLinkWrapper>
          <AnimatedLink href={docLink[activeTabIndex].href}>{docLink[activeTabIndex].text}</AnimatedLink>
        </RemixLinkWrapper>
      </SandpackWrapper>
    </TabsRoot>
  );
}

const SandpackWrapper = styled.div`
  grid-area: code;
`;

const RemixLinkWrapper = styled.div`
  margin-top: 26px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${tabletAndUnder} {
    justify-content: start;
  }
`;

const TabsRoot = styled(Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 56px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "list list"
    "content code";

  @media ${tabletAndUnder} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "list"
      "code"
      "content";
    grid-row-gap: 42px;
  }
`;

const TabsList = styled(List)`
  grid-area: list;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  align-items: center;
  margin-bottom: 56px;
  border-bottom: 1px solid var(--grey-400);
  @media ${tabletAndUnder} {
    margin-bottom: 0;
  }
`;

const ActiveIndicator = styled.div`
  --width: calc(100% / 5);
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 3px;
  width: var(--width);
  background: var(--red);
  left: calc(var(--active-tab-index) * var(--width));
  transition: left var(--animation-duration);
`;

const TabsTriggerWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-bottom: 22px;
  gap: 12px;
`;

const DesktopTabsTriggerTitle = styled.h3`
  font: var(--body-md);
  color: var(--color);
  transform: translateY(var(--translate-y));
  transition: color var(--animation-duration), transform var(--animation-duration);
  @media ${tabletAndUnder} {
    display: none;
  }
`;

const MobileTabsTriggerTitle = styled(DesktopTabsTriggerTitle)`
  display: none;
  font: var(--body-md);
  @media ${tabletAndUnder} {
    display: block;
  }
  @media ${mobileAndUnder} {
    font: var(--body-xs);
  }
`;

const TabsTrigger = styled(Trigger)`
  background: transparent;
  transition: opacity var(--animation-duration);
  --color: var(--grey-400);
  --gap: 12px;
  --translate-y: 0;
  &[data-state="active"] {
    --color: var(--red);
    --translate-y: -12px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const TabsContent = styled(Content)`
  grid-area: content;
  background: transparent;
  cursor: unset;
  &[data-state="active"] {
    animation: ${fadeIn} var(--animation-duration);
  }
  &[data-state="inactive"] {
    animation: ${fadeOut} var(--animation-duration);
  }
  transition: opacity var(--animation-duration);
`;

const TabsContentWrapper = styled.div``;

const TabsContentTitle = styled.h2`
  font: var(--header-sm);
  @media ${mobileAndUnder} {
    font: var(--header-xs);
  }
`;

const TabsContentText = styled.p`
  font: var(--body-lg);
  margin-bottom: 12px;
`;

const UsedBy = styled.p`
  font: var(--body-md);
  color: var(--grey-500);
  margin-bottom: 8px;
`;

const Example = styled.p`
  font: var(--body-md);
  color: var(--red);
`;

const iconStyle = css`
  transform: translateY(var(--translate-y));
  path {
    fill: var(--color);
  }
  transition: fill var(--animation-duration), transform var(--animation-duration);
`;

const GlobeIcon = styled(Globe)`
  ${iconStyle}
`;

const TelescopeIcon = styled(Telescope)`
  ${iconStyle}
`;

const TubeIcon = styled(Tube)`
  ${iconStyle}
`;

const WandIcon = styled(Wand)`
  ${iconStyle}
`;

// this one uses stroke instead of fill
const ScaleIcon = styled(Scale)`
  transform: translateY(var(--translate-y));
  path {
    stroke: var(--color);
  }
  transition: stroke var(--animation-duration), transform var(--animation-duration);
`;

const DividerWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`;
