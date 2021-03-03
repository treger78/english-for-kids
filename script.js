import cards from './assets/cards.js';
let intElemScrollHeight = document.getElementById("root").scrollHeight;
document.getElementsByClassName('main-menu')[0].style.height = `${intElemScrollHeight}px`;
document.getElementsByClassName('backdrop')[0].style.height = `${intElemScrollHeight}px`;

window.onresize = function(event) {
    intElemScrollHeight = document.getElementById("root").scrollHeight;
	document.getElementsByClassName('main-menu')[0].style.height = `${intElemScrollHeight}px`;
	document.getElementsByClassName('backdrop')[0].style.height = `${intElemScrollHeight}px`;
};

let thisCategory;

function navListener() {
	let navCategory = document.querySelectorAll(".header-menu-item");
	let chosenNav;
	for (let i = 1; i < navCategory.length; i++) {	//начанием с 1, т.к. 0 элемент - Main Page
		navCategory[i].addEventListener('click', chosenNav = function(e) {
	    	let thisCategoryTextContent = navCategory[i].textContent;
	    	thisCategory = cards[0].indexOf(thisCategoryTextContent);
	    	contentGeneration();
	    	document.getElementsByClassName('header-menu-item')[thisCategory + 1].classList.add('active');
		});
	}
}

function contentGeneration() {

    	document.body.removeChild(document.body.children[0]);

    	document.body.innerHTML = `

<div id="root">
	<div class="app-container">
		<div class="header-container">
			<input id="main-menu-checkbox" type="checkbox" autocomplete="off">
			<header>
				<label for="main-menu-checkbox" class="menu-btn">
					<span></span>
				</label>
				<nav id="main-menu" role="navigation" class="main-menu" aria-expanded="false" aria-label="Main menu">
					<label for="main-menu-checkbox"class="menu-close menu-btn">
						<span></span>
					</label>
					<ul>
						<li><a class="header-menu-item" href="index.html">Main Page</a></li>
						<li><a class="header-menu-item" href="#">Action (set A)</a></li>
						<li><a class="header-menu-item" href="#">Action (set B)</a></li>
						<li><a class="header-menu-item" href="#">Action (set C)</a></li>
						<li><a class="header-menu-item" href="#">Adjective</a></li>
						<li><a class="header-menu-item" href="#">Animal (set A)</a></li>
						<li><a class="header-menu-item" href="#">Animal (set B)</a></li>
						<li><a class="header-menu-item" href="#">Clothes</a></li>
						<li><a class="header-menu-item" href="#">Emotions</a></li>
					</ul>
				</nav>
				<label for="main-menu-checkbox" class="backdrop" tabindex="-1" aria-hidden="true" hidden></label>
			</header>
			<div class="switch-container">
				<label class="switch">
					<input type="checkbox" class="switch-input" checked="checked" autocomplete="off">
					<span class="switch-label" data-on="Train" data-off="Play"></span>
					<span class="switch-handle"></span>
				</label>
			</div>				
		</div>
		<div class="container main-container">
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>				
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>						
			</div>
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>
			<div class="main-card-green-cards">
				<div class="main-cards green">

				</div>					
			</div>					
		</div>
	</div>
	<footer>
		<a href="https://rs.school/js/"><img class="rs_school_logo" src="assets/img/rs_school_js.svg"></a>
		<p>
		&copy; <a href="https://github.com/treger78">treger78</a>, 2020	
		</p>
	</footer>
<link rel="stylesheet" type="text/css" href="cards_style.css">			
</div>    		

    	`

		let cardsContent = document.querySelectorAll(".main-cards");
		for (let i = 0; i < cardsContent.length; i++) {
		    cardsContent[i].innerHTML = `

		        <img src="assets/${cards[thisCategory + 1][i].image}">
		        <p class="front">${cards[thisCategory + 1][i].word}</p>
		        <p class="back">${cards[thisCategory + 1][i].translation}</p>        

		    `;
		}

		let switcherState = document.querySelector('.switch-input');

		switcherState.addEventListener('click', e => {

		    if (!switcherState.checked) {
		        let elem = document.querySelectorAll('.back').forEach(elem => {
		            elem.remove();
		        });
		        elem = document.querySelectorAll('.front').forEach(elem => {
		            elem.remove();
		        });
		        let blockCards = document.getElementsByClassName('main-card-green-cards');
		        for (let i = 0; i < blockCards.length; i++) {
		            blockCards[i].children[0].children[0].style = 'min-height: 248px; max-height: 248px';
		        }        
		    } else {
		        location.reload();
		    }

		});

		let blockCards = document.querySelectorAll(".main-card-green-cards");
		let addSound;
		for (let i = 0; i < blockCards.length; i++) {
		    blockCards[i].addEventListener('click', addSound = function(e) {
		        if (switcherState.checked) {
		            new Audio(`assets/${cards[thisCategory + 1][i].audioSrc}`).play();
		        } else {
		            blockCards[i].removeEventListener('click', addSound);
		        }
		    });
		}

		let intElemScrollHeight = document.getElementById("root").scrollHeight;
		document.getElementsByClassName('main-menu')[0].style.height = `${intElemScrollHeight}px`;
		document.getElementsByClassName('backdrop')[0].style.height = `${intElemScrollHeight}px`;

		window.onresize = function(event) {
		    intElemScrollHeight = document.getElementById("root").scrollHeight;
			document.getElementsByClassName('main-menu')[0].style.height = `${intElemScrollHeight}px`;
			document.getElementsByClassName('backdrop')[0].style.height = `${intElemScrollHeight}px`;
		};

		navListener();

}

let categoryBlocks = document.querySelectorAll(".main-card-green");
let chosenCategory;
for (let i = 0; i < categoryBlocks.length; i++) {
    categoryBlocks[i].addEventListener('click', chosenCategory = function(e) {
    	let thisCategoryTextContent = categoryBlocks[i].children[0].children[1].textContent;
    	thisCategory = cards[0].indexOf(thisCategoryTextContent);
    	contentGeneration();
    	document.getElementsByClassName('header-menu-item')[thisCategory + 1].classList.add('active');
    });
}

navListener();

/*
Для запуска http://localhost:8000
Перейти в каталог с проектом и выполнить кодманы:
npm install -g http-server
http-server -p 8000
*/
