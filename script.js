"use strict";

const imgs = ["./imgs/greg_and_company.png", "./imgs/greg_sad.png", "./imgs/rowley_gaming.png",
    "./imgs/rodrick_1.png", "./imgs/manny_crawling.png", "./imgs/frank_and_susan_yelling.png"];
const characterDescriptions = [
    "Meet one of the many characters of the book! Select a character from the drop-down list to the left.",
    "Greg is the main character of the book, and all events we see are given from his perspective, expressed to us through his journal.",
    "Rowley is Greg's best friend. Rowley is a quiet, awkward middle schooler who has trouble sticking up for himself. Throughout the book, you can usually find Greg and Rowley together.",
    "Rodrick is Greg's older brother. Rodrick's bullying of Greg has manifested in Greg bullying others. Mabye Greg shares the same feelings with his own little brother that Rodrick has with him?",
    "Manny is Greg's little brother. Greg holds negative feelings for Manny becuase, from Greg's perspective, his parents are less strict with Manny than himself.",
    "Frank and Susan are Greg's parents. Although they're usually at odds, Greg's parents always try to lookout for Greg's best interests, which Greg never seems to understand",
];
const characterImgAltText = [
    "A group of characters from the book.",
    "A picture of Greg Heffley crying.",
    "A picture of Rowley Jefferson playing a game on his tablet.",
    "A picture of Rodrick Heffley fighting with Greg.",
    "A picture of Manny Heffley crawling.",
    "A picture of Frank and Susan Heffley yelling at Greg.",
];

const $ = selector => document.querySelector(selector);

const selectImg = () => {
    // grab the new value of the changed selection; store as an index
    const selection = $("#character-selection");
    const index = parseInt(selection.value);

    // change h3, change image, change span text

    // change the h3 text based on selection
    let h3Element = $("#character-info-container-outer h3");
    h3Element.innerText = "";
    h3Element.textContent = selection.options[index].text;

    // change the image element
    const img = $("#character-info-container-inner img");
    img.src = imgs[index];
    img.width = "200";
    img.height = "200";
    img.alt = characterImgAltText[index];

    // Add the character description
    const imgText = characterDescriptions[index];
    $("#character-description").textContent = imgText;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#character-selection").addEventListener("change", selectImg);
});