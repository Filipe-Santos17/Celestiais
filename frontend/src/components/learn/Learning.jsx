import React from "react";
import { ItemsLearn, Page } from "./Learning.style";

export default function Learning() {
  return (
    <Page>
      <h3>Learning benefits of the game</h3>
      <hr/>
        <ItemsLearn>
            <li>
                <i className="fa-solid fa-book"></i>
                <h4>Learning Improvement</h4>
                <p>Games are a fun way to teach about astronomy, space travel and astrobiology, thus attracting people of different ages to learn about these subjects in a playful way.</p>
            </li>
            <li>
                <i className="fa-solid fa-hippo"></i>
                <h4>Meet new species</h4>
                <p>The game consists of creating combinations of organisms to survive the challenges, in which each organism will have its individuality and the challenges, with the practice of the game the Player will meet new creatures and planetary conditions.</p>
            </li>
            <li>
                <i className="fa-solid fa-flask"></i>
                <h4>Explore science</h4>
                <p>The purpose of this is to demonstrate how much fun science and studies can be for young people and encourage scientific studies and the future profession.</p>
            </li>
        </ItemsLearn>
    </Page>
  );
}
