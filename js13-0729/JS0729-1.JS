// // 取得元素節點
// // 根據id屬性
// // 不設定變數也可以
// let myjs = document.getElementById('js');
// console.log(typeof myjs);
// console.log(myjs.textContent);

// // 根據html標籤
// let myLi = document.getElementsByTagName('li');
// console.log(myLi);
// // 取出
// console.log(myLi.item(1).textContent);
// console.log(myLi[1].textContent);

// // 顯示所有li
// for (let i = 0; i < myLi.length; i++) {
//     console.log(myLi.item(i).textContent);
//     console.log(myLi[i].textContent);
// }

// console.log('---querySelector---');
// console.log(document.querySelector('h1').textContent);
// console.log('---getElementByTagName---');
// console.log(document.getElementsByTagName('h1').item(0).textContent);
// console.log(document.getElementsByTagName('h1')[0].textContent);



// // 使用類別名稱
// let mySubject = document.getElementsByClassName('subject');
// console.log(mySubject);
// for (i = 0; i < mySubject.length; i++) {
//     console.log(mySubject.item(i).textContent);
//     console.log(mySubject[i].textContent);
// }

// // 顯示指定內容(必須有id)=>html
// console.log(mySubject['css'].textContent);



// 取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li中子元素的p(不包含孫元素div>p)
let myP = document.querySelectorAll('li>p');
console.log(myP);
console.log(myP[0].textContent);

// 取得li子元素底下的div下的p
let myDivP = document.querySelectorAll('li>div>p');
console.log(myDivP[0].textContent);