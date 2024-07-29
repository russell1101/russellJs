// let myDrinks = document.getElementsByName('drinks');
// console.log(myDrinks);

// for (let i = 0; i < myDrinks.length; i++){
//     console.log(myDrinks.item(i).value);
//     console.log(myDrinks[i].value);
// }

// 取得勾選的項目
// 1.找到按鈕
let MyBtn = document.querySelector('#btn');
// 2.監聽按鈕是否被按了(click=>左鍵一下的事件)
MyBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');
    // 3.逐一檢查是否被勾選=>checked
    for (let i = 0; i < myDrinks.length; i++) {
        // 有被勾選的項目
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value);
        }

        // 沒有被勾選的項目=>使用not反向
        if (!myDrinks[i].checked) {
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('被勾選的項目' + arrResult);
    console.log('沒被勾選的項目' + arrResultNot);
});