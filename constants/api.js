const randomTrue = [
"Какое качество вы хотели бы изменить в себе?","О какой покупке вы жалеете больше всего?","Какой момент был самым неловким в вашей жизни?",
"Опишите свой самый странный сон.","С кем из игроков вы бы хотели поменяться жизнями на неделю?","За что вы получаете больше всего комплиментов?",
"Что вы никогда не сделаете, даже если кто-то предложит вам все деньги мира?","С кем из людей, присутствующих в этой комнате, вы бы могли встречаться?",
"Чего больше всего вам не хватает в жизни?","Какую профессию вы бы ни за что не стали осваивать?","Что самое безумное случалось с вами?",
" Как вы думаете, что окружающие думают о вас, увидев впервые?","Чему вы научились у литературных героев?","Какую самую большую глупость вы совершили на глазах у всех?",
"Что бы вы сделали в первую очередь, если бы были невидимкой?","Если бы вы попали на необитаемый остров с одним человеком, то кто бы из присутствующих это был?",
"Что было последним, что вы искали в браузере в своем телефоне?","Что бы вы сделали в первую очередь, если бы однажды проснулись в теле человека противоположного пола?",
"Какая ваша худшая и лучшая привычка?","Что самое романтичное делали для вас?",
]

const randomFalse = [
    "Выкрикните первое слово, которое придет вам в голову прямо сейчас.","Пропевайте все, что говорите, в течение следующих 10 минут.","Сделайте массаж кому-нибудь из присутствующих.",
    "Спойте любую песню от начала до конца.","Разместите в интернете свою неудачную фотографию. Пусть ее выберут другие участники.","Говорите «банан» в конце каждой своей и чужой реплики, пока не придет ваша очередь.",
    "Ведите себя как обезьяна, пока не придет ваша очередь отвечать.","Откройте любую соцсеть, зайдите в аккаунт первого человека, которого увидите, и поставьте лайк на каждый его пост.",
    "Вспомните популярный рекламный ролик из прошлого. Разыграйте миниатюру по его мотивам, повторите слоган или пропойте песню оттуда.",
    "Прыгайте до вашего следующего хода.","Закройте глаза и позвольте другим участникам положить вам в рот любую еду из холодильника, какую они выберут.","Придумайте название фильма для каждого игрока о его жизни.",
    "Пусть каждый игрок выберет одно слово, а затем вы составите из них текст и опубликуете его в соцсетях.","Позвольте человеку справа пощекотать вас","Передайте свой телефон человеку, сидящему напротив вас, и пусть он разместит все, что захочет, в ваших аккаунтах в социальных сетях.",
    "Спародируйте человека слева от вас.","До конца игры вы должны кудахтать в начале и в конце каждой своей реплики.","Произносите вслух все знаки препинания, которые встречаются, если записывать чужую речь.",
]
let trueBtn = document.getElementById('trueBtn')
let FalseBtn = document.getElementById('FalseBtn')
let task = document.getElementById('task')


let randomT = Math.floor(Math.random() * randomTrue.length)
console.log(randomTrue[randomT]);

const randomF = Math.floor(Math.random() * randomFalse.length)
console.log(randomFalse[randomF]);

// let newTrue = randomT.map()
// let numCallbackRuns = 0


// randomTrue.forEach((element) => {
    //     // console.log(element)
    //     numCallbackRuns++
    //   })
    
    //   console.log("numCallbackRuns: ", numCallbackRuns)
    

    
    // let trueBtn = document.getElementById('trueBtn')
        // trueBtn.addEventListener("click", function() {
        //     console.log("Кнопка нажата.");
        //   });
    

// let buttonT = document.querySelector("trueBtn");





