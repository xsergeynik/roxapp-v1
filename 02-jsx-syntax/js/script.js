/*
// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');

// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(<h1>Синтаксис JSX</h1>);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Як працює JSX?

// Отримуємо в константу елемент для виводу
// const rootElement = document.getElementById('root');

/*
// JavaScript
// Зберігаємо розмітку в змінну або константу
let someLayout = `<h1>Синтаксис JSX</h1>`;
// Виводимо (відмальовуємо) нашу розмітку
rootElement.insertAdjacentHTML("beforeend", someLayout);
*/

/*
// JSX + REACT
// Зберігаємо розмітку в змінну або константу
let someLayout = (<h1>Синтаксис JSX</h1>);
// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);
*/

// При обробці JSX перетворюється на JS код
// console.log(someLayout);
// Подивитись можна за посиланням https://babeljs.io/repl/





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Правила синтаксису JSX
// або відмінності від HTML:
/*
	1. Повертаємо лише один основний елемент
	2. Усі теги мають бути закриті
	3. Деякі HTML-атрибути мають інші назви (camelCase)
*/



const someArr = [
	'Number 1',
	'Number 2',
	'Number 3',
],
textTitle = 'Title',
description = 'Lorem input Lorem inputLorem inputLorem inputLorem input',
imgSrc = '../img/01.jpg';


function returnSum(a,b) {
	return a + b;
}


function removeElement(element) {
  const menu = element.parentNode.parentNode.querySelector('ol');
  const menuEl = [...menu.querySelectorAll('li')];
  const indexToRemove = menuEl.indexOf(element);

  if (indexToRemove !== -1) {
    menuEl.splice(indexToRemove, 1);
    menu.textContent = '';

    menuEl.forEach((item) => {
      menu.appendChild(item);
    });
  }
}

function plusElist(element) {
  const menu = element.parentNode.parentNode.querySelector('ol');
  const menuEl = [...menu.querySelectorAll('li')];
  const newElement = document.createElement('li');
  newElement.textContent = 'Number';
  const newItemIndex = menuEl.length + 1;
  const newItemText = `${newItemIndex}. ${newElement.textContent} ${newItemIndex}`;
  const btnMinus = document.querySelector('.btn-minus');

  newElement.textContent = newItemText;

  const updatedMenuEl = [...menuEl, newElement];

  menu.textContent = '';

  updatedMenuEl.forEach((item, index) => {
    menu.appendChild(item);
    if (index >= menuEl.length) {
      item.classList.add('active');
      setTimeout(() => {
        item.classList.add('visible');
      }, 100); // Задержка в миллисекундах перед добавлением класса "visible"
    }
  });

  newElement.scrollIntoView({ behavior: 'smooth' });

 // Добавление нового элемента в массив newElements
 const newElements = [...updatedMenuEl.slice(menuEl.length)];

  // Привязка функции удаления последнего элемента к кнопке "btn-minus"
  btnMinus.addEventListener('click', () => {
    if (updatedMenuEl.length > menuEl.length) {
      const lastElementIndex = updatedMenuEl.length - 1;
      updatedMenuEl.splice(lastElementIndex, 1);
      menu.removeChild(menu.lastChild);
    }
  });
	
}

const rootElement = document.getElementById('root');

let someLayout = (
	<div className="main">
	<h1 style={{marginBottom: "15px"}}>{textTitle}</h1>
	<p style={{marginBottom: "15px"}}>{description}</p>


	{
	Boolean(someArr.length) && <ol>
		{someArr.map((item,index) => (
			<li key={index}>{index + 1}. {item}</li>
		))}
	</ol>

	}
	<button style={{border: "1px solid white",padding: "10px 15px",fontSize:"36px"}} onClick={(e) => plusElist(e.target)}>+</button>
	<button className="btn-minus" style={{border: "1px solid white",padding: "10px 15px",fontSize:"36px"}}>-</button>
	<img src={imgSrc} alt={textTitle} />
	</div>
)

ReactDOM.createRoot(rootElement).render(someLayout);






















// --------------------------


/*
// Фрагменти розмітки
//	При побудові конструкцій ми не можемо
// виводити кілька елементів першого рівня вкладеності

// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');


// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1>Синтаксис JSX</h1>
		<div>JSX чи JavaScript XML – це розширення синтаксису мови програмування JavaScript.</div>
	</>
);

// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);

*/




















// --------------------------



// Усі теги мають бути закриті
/*
// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1>Синтаксис JSX</h1>
		<div>JSX чи JavaScript XML – це розширення <br /> синтаксису мови програмування JavaScript.</div>
		<img src="" alt="" />
	</>
);

// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);

*/


// --------------------------


// Атрибути
/*
Через те що деякі, звичні нам, HTML-атрибути є зарезервованими
словами у JS, ми маємо використовувати дещо інші назви.

class = className
for = htmlFor
onclick = onClick
*/
/*
// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1 className="title">Синтаксис JSX</h1>
		<div>JSX чи JavaScript XML – це розширення синтаксису мови програмування JavaScript.</div>
	</>
);

// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);
*/

////////////////////////////////////////////////////////////////////////




// Інтеграція та взаємодія з JavaScript кодом
// Для виводу JavaScript коду використовуємо {}
/*
// Вивід

// Змінна/константа
let someSum = 2 * 1000;
// Функція
function returnSum(a, b) {
	return a + b;
}

// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1 className="title">Синтаксис JSX</h1>
		<div className="text">
			Зарплатня React розробника(ці): {returnSum(1000, 500)}$
		</div>
	</>
);
// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);
*/


//----------------------------

// Інтеграція та взаємодія з JavaScript кодом
// Для виводу JavaScript коду використовуємо {}

// Методи масивів (об'єктів), цикли тощо
// Використовуються ті що повертають значення
/*
// Дані
const someArr = [
	"Привітність",
	"Комунікабельність",
	"Англійська"
];

// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1 className="title">Синтаксис JSX</h1>
		<div className="text">
			Зарплатня React розробника(ці): 2000$
		</div>
		<h2>Вимоги:</h2>
		<ul>
			{someArr.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</>
);
// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);

*/







//----------------------------

// Інтеграція та взаємодія з JavaScript кодом
// Для виводу JavaScript коду використовуємо {}

// Умови
// {true or false && data}
/*
// Дані
const someArr = [
	"Привітність",
	"Комунікабельність",
	"Англійська"
];
// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1 className="title">Синтаксис JSX</h1>
		<div onClick={divAction} className="text">
			Зарплатня React розробника(ці): 2000$
		</div>
		{Boolean(someArr.length) &&
			<>
				<h2>Вимоги:</h2>
				<ul>
					{someArr.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</>
		}
	</>
);

// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);
*/
/*

		{Boolean(someArr.length) &&
			<>
				<h2>Вимоги:</h2>
				<ul>
					{someArr.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</>
		}

// Дані
const isTitle = true;

// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		{isTitle && <h1 className="title">Синтаксис JSX</h1>}
		<div onClick={divAction} className="text">
			Зарплатня React розробника(ці): 2000$
		</div>
	</>
);
*/

//----------------------------


// Інтеграція та взаємодія з JavaScript кодом
// Для виводу JavaScript коду використовуємо {}

// Події
/*
function divAction() {
	console.log('Click!');
}

// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1 className="title">Синтаксис JSX</h1>
		<div onClick={divAction} className="text">
			Зарплатня React розробника(ці): 2000$
		</div>
	</>
);
// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);

*/





// ----------------------------------------



// Стилі
// Для виводу стилів варто використовувати об'єкт з данними
/*
// Отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');
// Зберігаємо розмітку в змінну або константу
let someLayout = (
	<>
		<h1 style={{ color: "red", fontSize: "20px" }}>Синтаксис JSX</h1>
		<div>JSX чи JavaScript XML – це розширення синтаксису мови програмування JavaScript.</div>
	</>
);

// Виводимо (відмальовуємо) нашу розмітку
ReactDOM.createRoot(rootElement).render(someLayout);
*/


/*
Для полегшення переходу з HTML у JSX
раджу інструмент https://transform.tools/html-to-jsx
*/














// Домашка ===============================================

/*
Написати за допомогою JSX вивід конструкції де є:
заголовок, 
текст, 
зображення, 
нумерований список в якому виводяться данні з масиву (якщо вони є),
кнопка, при кліку на яку з'являється повідомлення (alert)
*/