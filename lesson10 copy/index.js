// let fruits =[
//    {
//       name: 'Apple',
//       color: 'Red-Green',
//       img: 'http://static.xabar.uz/crop/1/7/720_460_95_1747089670.jpg',
//       taste: true
//    },
//    {
//       name: 'Orange',
//       color: 'Orange',
//       img: 'https://www.collinsdictionary.com/images/full/orange_342874121.jpg',
//       taste: false
//    },
//    {
//       name: 'Banana',
//       color: 'Yellow',
//       img: 'https://images.heb.com/is/image/HEBGrocery/000377497',
//       taste: true
//    },
//    {
//       name: 'Strawberry',
//       color: 'Red',
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIYbwvNMJ95YVghU25QaQPoaLr6jrJiaU-g&usqp=CAU',
//       taste: false
//    },
   
// ];


// fruits.forEach((e)=>{
//    let card=createElement('div', 'card m-5 p-3 shadow', 
//    `
  
//    <img src="${e.img}" alt="">
//    <h3>${e.name}</h3>
//    <p>color: <strong>${e.color}</strong> </p>
//    <button class='${e.taste ? 'btn btn-danger' : 'btn btn-success'}'>${e.taste ? "Shirin" : "Nordon"}</button>

  
   
//    ` 
//    )
//    $('.wrapper').appendChild(card)
// })



//////////////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// const great = ()=> 'Hello'

// const result =great()

// console.log(result)



// const ism = 'Miralixan'

// const result = ism.toLowerCase()
// console.log(result)


// function calcAge (birthYear, firstName, lastName){
//    const age =2022 - birthYear
//    console.log(`${firstName} ${lastName} siz ${age} yoshga kirdingiz.`)
//    return age
// } 

// const age =calcAge(1989, 'Miraziz','Gulomov')




// const tree = (callBack)=>{
//    let daraxt = 'cacos'
//    callBack(daraxt)
// }

// tree((value)=>{
//    console.log(value)
// })



///////////////////////////////////// object \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// const user = {
//    name: 'Miraziz',
//    age: 33,
//    email: 'miraziz.gulomov@gmail.com',
//    location: 'Kashkadaryo',
//    lang: ['uzbek', 'russian', 'english']
// }

// console.log(user['lang'])

// user.age =34
// user.name ='MiraliXan'

// console.log(user['name'])
// console.log(typeof user)


///////////////////////////////////// objectga methods \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const user = {
//    name: 'Miraziz',
//    age: 33,
//    email: 'miraziz.gulomov@gmail.com',
//    location: 'Kashkadaryo',
//    lang: ['uzbek', 'russian', 'english'],
//    login: function(){
//       console.log('Siz bu saytdagi sahifangizga kirdingiz')
//    },
//    logout: function(){
//       console.log('Siz bu saytdagi sahifangizdan chiqdingiz')
//    }
// }

// user.login()
// user.logout()


///////////////////////////////////// objectga this key \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// const user = {
//    name: 'Miraziz',
//    age: 33,
//    email: 'miraziz.gulomov@gmail.com',
//    location: 'Kashkadaryo',
//    langs: ['uzbek', 'russian', 'english'],
//    movies: [
//             {name: 'Avatar', likes: 458},
//             {name: 'Titanic', likes: 1011},
//             {name: 'Oscar', likes: 1552},
//             {name: 'Ecscalibur', likes: 433}
// ],
//    login: function(){
//       console.log('Siz bu saytdagi sahifangizga kirdingiz')
//    },
//    logout: function(){
//       console.log('Siz bu saytdagi sahifangizdan chiqdingiz')
//    }, 
//    speak: function (){
//       // console.log(this)
//       console.log('I can speak:')
//       this.langs.forEach((lang)=>{
//          console.log(lang)
//       })
//    },
//    moviesAdd: function(){
//       this.movies.forEach((movie)=>{
//          console.log(movie)
//       })
//    }
// }

// // user.login()
// // user.logout()

// user.speak()
// // user.movies()
// user.moviesAdd()

// // console.log(user.movies)



///////////////////////////////////// arrayda  objectlar \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// const movies =[

//    {name: 'Avatar', likes: 458},
//    {name: 'Titanic', likes: 1011},
//    {name: 'Oscar', likes: 1552},
//    {name: 'Ecscalibur', likes: 433}
// ]

// movies.forEach((movie)=>{
//     const result = `Kino nomi: ${movie.name}, ${movie.likes}`
//     console.log(result)
// })


///////////////////////////////////// Math object \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const area = 7.9


// // sonning eng yaqin butun qismiga yaxlitlaydi
// // Math.round()
// // console.log(Math.round(area))

// // sonning eng kichik butun qismiga qarab yaxlitlaydi
// // Math.floor()
// // console.log(Math.floor(area))

// // sonning eng yaqin kattasiga butun qismiga qarab yaxlitlaydi
// // Math.ceil()
// // console.log(Math.ceil(area))

// // sonning faqat bir qismini qaytaradi
// // Math.trunc()
// // console.log(Math.trunc(area))

// // 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi
// // Math.random()
// // console.log(Math.random(area))

// const randomNumber =Math.trunc(Math.random()*10)

// console.log(randomNumber)


// const tree = [[1,3,4], 'Miraziz', true, [6,1,4], false, 'Miralixan'];
// const newTree =[]

// tree.forEach((e)=>{
//  const res=Array.isArray(e)
//    if(res){
//       e.forEach((num)=>{
//          newTree.push(num)
//       })
//    }
// })

// console.log(newTree)




/////////////////////////// Amaliyot \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// const words = 'Qalesiz yaxshimisiz ?  Yaxshimi ishlar ?';

// let splitWord = words.split('');
// let counter = 0

// splitWord.forEach((word)=>{
//    if(word == 'i' || word == 'I'){
//       counter++
//    }
// })

// console.log(`So'ralayotgan harf: ${counter} marta ishtirok etgan`)

///////////////////////\\\\\\\\\\\\\\\\\\\\////////////////////\\\\\\\\\\\\\\\\

// const types =[21.1, 'Mirsaid', 'array', ['I am array'], null, true, 214];
// const newTypes =[];

// types.forEach((type)=>{
//    newTypes.push(typeof type)
// })

// console.log(newTypes)


///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\


// const numbers = [1,2,3,4,5];
// let result =[];

// numbers.forEach((num, i)=>{
//    result.push(num + i)
// })

// console.log(result)

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\

// let counter = 0;

// for(let i=0; i<=10; i++){
//   counter+=i
// }

// console.log(counter)


///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\

// const number = [1, 2, 3, 4, 5];
// let result = [];

// const reserveFunc =(arr)=>{
//    arr.forEach((num)=>{
//    result.push(num ** 1)
//    })
// }
// reserveFunc(number)
// console.log(result)

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\


// const link = document.querySelector('a')
// // console.log(link.getAttribute('href'))

// link.setAttribute('href', 'htpps:www.mail.ru')
// link.textContent = 'This is Mail Page'

// console.log(link)

// const river = document.querySelector('p')
// console.log(river.getAttribute('class'))

// river.setAttribute('class', 'sea')
// river.textContent = 'Lorem ipsum';

// console.log(river)

// const card = document.querySelector('div')
// console.log(card.getAttribute('id'))

// card.setAttribute('id', 'box')

// card.textContent = 'Loremnsccsncjknsjcnsj cjcncjncsjcnjs'
// card.setAttribute('style', 'background-color: yellow')



// console.log(card)


///////////////////////\\\\\\\\\ Style \\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\

// const styleIp = document.querySelector('h2')
// console.log(styleIp)

// styleIp.style.color = 'black';
// styleIp.style.backgroundColor = '#ccf';
// styleIp.style.fontSize = '15px';
// styleIp.style.padding = '15px';
// styleIp.style.textAlign = 'center';
// styleIp.style.border = '2px solid green';
// styleIp.style.borderRadius = '28px';


///////////////////////\\\\\\\\\ Add & Remove \\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\

// const content =document.querySelector('p')
// console.log(content.classList);
// content.classList.add('success');
// content.classList.remove('success');
// content.classList.add('error');


// const style = document.querySelectorAll('p');


// style.forEach((e)=>{
//     if (e.textContent.includes('success')){
//         e.classList.add('success')
//         e.style.borderRadius = '25px'
//         e.style.border = '2px solid green';
//         e.style.backgroundColor ='yellow'

//     }

//     if (e.textContent.includes('error')){
//         e.classList.add('error')
//         e.style.borderRadius = '25px'
//         e.style.border = '2px solid crimson';
//         e.style.backgroundColor ='yellow'


//     }
// })


// const h1 = document.querySelector('h1')

// h1.classList.toggle('success')
// h1.classList.toggle('success')
// h1.classList.toggle('success')


///////////////////////\\\\\\\\\ Eventlar \\\\\\\\\\\\\\\/////////////////////\\\\\\\\\\\\

// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     console.log('You are clicked me !')
// })

const items = document.querySelectorAll('li');
items.forEach((item)=>{
   (item.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = 'lime'
    }))

   

})










