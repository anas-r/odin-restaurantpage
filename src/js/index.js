import * as homepage from './homepage';
import * as story from './story';
import * as themenu from './themenu';
import * as reservation from './reservation';
import * as contact from './contact';

import bgimg from '../img/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';


import '../styles.css';

const website = (() => {
    const content = document.querySelector("#content");
    const clearMenu = (menuOptions) => {
        menuOptions.forEach((btn) => btn.classList.remove("option-selected"));
    }
    const render = () => {
        const menu = document.createElement("div");
        menu.classList.add("menu");
        const menuLogo = document.createElement("div");
        menuLogo.classList.add("menu-logo");
        const menuOptions = [menuLogo];

        for (let i = 0; i < 5; i++) {
            let menuOptionDiv = document.createElement("div");
            menuOptionDiv.classList.add("menu-option");
            menuOptions.push(menuOptionDiv);
        }

        menuOptions[1].id = "home";
        menuOptions[2].id = "story";
        menuOptions[3].id = "home-menu";
        menuOptions[4].id = "reservations";
        menuOptions[5].id = "contact-us";

        menuOptions.forEach((option) => {
            menu.appendChild(option)
        });

        content.appendChild(menu);

        /* TEXT CONTENT */

        menuOptions[0].innerHTML = "<span>Fresh</span>"
        menuOptions[1].innerHTML = "<span>Home</span>";
        menuOptions[2].innerHTML = "<span>Our story</span>";
        menuOptions[3].innerHTML = "<span>Menu</span>";
        menuOptions[4].innerHTML = "<span>Reservations</span>";
        menuOptions[5].innerHTML = "<span>Contact us</span>"

        /* CREATING PAGE BLOCK */

        const page = document.createElement("div");
        page.classList.add("page");
        content.appendChild(page);


        /* ADDING EVENT LISTENERS */

        menuOptions[1].addEventListener("click",(e) => {
            homepage.render();
            let btn = document.querySelector('#home');
            clearMenu(menuOptions);
            btn.classList.add("option-selected");
        });

        menuOptions[2].addEventListener("click",(e) => {
            story.render();
            let btn = document.querySelector('#story');
            clearMenu(menuOptions);
            btn.classList.add("option-selected");
        });

        menuOptions[3].addEventListener("click",(e) => {
            themenu.render();
            let btn = document.querySelector('#home-menu');
            clearMenu(menuOptions);
            btn.classList.add("option-selected");
        });

        menuOptions[4].addEventListener("click",(e) => {
            reservation.render();
            let btn = document.querySelector('#reservations');
            clearMenu(menuOptions);
            btn.classList.add("option-selected");
        });

        menuOptions[5].addEventListener("click",(e) => {
            contact.render();
            let btn = document.querySelector('#contact-us');
            clearMenu(menuOptions);
            btn.classList.add("option-selected");
        });

        page.addEventListener("mouseover",(e)=>{
            const blurImg = document.querySelector('#blurred-img');
            blurImg.setAttribute("style",`height: 100%;
    width: 100%;
    background-image: url("${bgimg}");
    content: "";
    position: fixed;
    left: 0;
    right: 0;

    display: block;
    background-size:cover;
    filter: blur(15px);
   `)
        })

    page.addEventListener("mouseleave",(e)=>{
        const blurImg = document.querySelector('#blurred-img');
        blurImg.setAttribute("style",`   height: 100%;
         width: 100%;
    background-image: url("${bgimg}");
    content: "";
    position: fixed;
    left: 0;
    right: 0;

    display: block;
    background-size:cover;

    
`)
    })
}

    return {render};
})();


website.render();
