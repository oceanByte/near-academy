import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Header } from '../Header/Header.controller'

import {
  ChapterStyled,
  ChapterContentWrapp,
  Progress,
  Chapter,
  Title,
  MainContent,
  SubTitle,
  Text,
  FactWrapp,
  ImgBox,
  Fact,
  ExcersiseWrapp,
  ExcersiceTitle,
  Code,
  SubTitleMobile
} from './ChapterContent.style'

interface IChapterView {
  chapter: string;
  title: string;
}

export const ChapterView: any = ({ chapter, title }: IChapterView) => (
  <ChapterStyled>
    <Header inChapter />
    <Progress />
    <ChapterContentWrapp>
      <Chapter><div>{chapter}</div> <div className={'imgCheckedBox'} /></Chapter>
      <Title>{title}</Title>
      <MainContent>
        <SubTitle>New way to exhange value</SubTitle>
        <Text>
          The rise of the first blockchain application started in 2009 with Bitcoin, an independent network powering a global digital currency.
          Since then, blockchain technology has been used across many new applications forming a new open internet called Web3.
          In 2021, over 7,000 companies are building the internet infrastructure of Web3.
        </Text>
        <Text>
          The boom of blockchain and Web3 projects has fueled tremendous demand for web developers, software engineers, testers,
          UX and web designers, project and community managers.
          Opportunities are everywhere.
        </Text>
        <FactWrapp>
          <ImgBox />
          <Fact>
            Unlike Bitcoin, the “value” managed by blockchain networks is not necessarily “money”;
            in fact most Web3 projects provide a more human-centric definition of “value” called “utility.”
          </Fact>
        </FactWrapp>
        <Text>
          Blockchain isn’t just about financial transactions.
          Social and community tokens power new types of blockchain applications centered around human networks and the growth of these networks.
          They can be designed to create shared value for communities with their own rules around adoption, viral marketing, and ownership.
        </Text>
        <Text>
          Creators and influencers can launch their own <span>social tokens</span>.
          These tokens may or may not carry monetary value; they are simply used within the creator’s community.
          Fans can get, transfer, donate, transact or hold these tokens.
          In this emerging space, we see tokens being used to drive various forms of engagement with fans, from personal reputation to active governance of the community.
        </Text>

        <SubTitle>New way to store changes</SubTitle>
        <Text>
          These social tokens are just one of the multiple new primitives from Web3, shifting the internet away from an attention economy to engagement and shared value one.
        </Text>
        <Text>
          Before Web3, the internet was a native mechanism to transfer what computer science refers to as <span>state – the status of who is who, who owns what, and who has the right to do what</span>.
        </Text>
        <Text>
          State is a key property for enabling human ecosystems. The ability to quickly and efficiently transfer value independently
          has been at the heart of exchanges between humans for centuries.
          When Alice gives 1 shell to Bob, their states change.
        </Text>
        <Text>
          Without a native mechanism to save states on the internet, exchanges could be recorded only through institutions acting as
          clearing entities that require our unconditional trust.
        </Text>
        <Text>
          <span>Blockchain technology has introduced a decentralized method to store changes to the state of the network in an irrefutable way</span>, without the need for intermediaries.
          Each participant in these networks is able to keep track, hold and transfer value independently.
          The network stores the history of all preceding events or user interactions, its successive states.
        </Text>
        <SubTitle>New way to control your data</SubTitle>
        <Text>
          While cloud services enable businesses to focus more on their business logic and care less about infrastructure,
          it did not solve another fundamental problem of web2: siloed data controlled by platforms.
          It is not in platforms’ interest to give unrestricted access to their network to anyone; rather they focus on increasing adoption and loyalty,
          even if that means creating a dependency for users. User identity, created value, and history are only available in the platforms’ walled-gardens.
        </Text>
        <FactWrapp>
          <ImgBox />
          <Fact>
            In Web3, middlemen are removed from the equation. Users are no longer tied to a specific platform,
            but can change platforms while maintaining their identity and history.
            Web developers can compose new applications by using existing code or creating their own.
            There is no gatekeeper to prevent someone from creating a new application on top of another.
          </Fact>
        </FactWrapp>
        <Text>
          In contrast, Web3 networking protocols treat Identity and Monetary Assets as native primitives that can be transferred over the network. 
        </Text>
        <Text>
          There are many advantages that a typical centralized architecture cannot provide: 
        </Text>
        <Text>
          <span>Trust</span><br />
          Value transfers are operated in a peer-to-peer fashion, without trusted third-parties.
          That way, users are not dependent on a central entity or platform.
        </Text>
        <Text>
          <span>Censorship resistance</span><br />
          Because a central entity does not operate the network, it cannot be shut down by one particular entity.
          Reaching a Consensus is required to change the state of the network.
        </Text>
        <Text>
          <span>Availability</span><br />
          A decentralized system is more robust as there is no central point of failure.
        </Text>
        <Text>
          <span>Transparency</span><br />
          All interactions and states are stored immutably on the blockchain and publicly available for anyone to review.
        </Text>
        <ExcersiseWrapp>
          <ExcersiceTitle>Excersice</ExcersiceTitle>
          <Text>
            Here is your easy win to get started: integrate the payment gateway in line 20 of the app code in the exercise code box.
          </Text>
          <Text>
            Adding a payment gateway with NEAR is seamless:
          </Text>
          <Code>
            <div>
              <span>await</span> sender.sendMoney(receiver, amount);
            </div>
          </Code>
        </ExcersiseWrapp>
        <SubTitleMobile>Time to practice:</SubTitleMobile>
      </MainContent>
    </ChapterContentWrapp>
  </ChapterStyled>
)

ChapterView.propTypes = {
  chapter: PropTypes.string,
  title: PropTypes.string,
}

ChapterView.defaultProps = {}
