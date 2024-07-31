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


    // 取得顯示資料的位置
    let getDiv = document.getElementById('showData');



    // 被勾選 (if有被更選才做)
    let str1 = '';
    if (arrResult.length > 0) {
        str1 = '<div id="sel"><ul>被勾選項目';
        // 被選取的li
        for (let i = 0; i < arrResult.length; i++) {
            str1 = str1 + `<li>${arrResult[i]}</li>`
        }
        str1 = str1 + '</ul></div>';
    }

    // 沒有被勾選
    let str2 = '';
    if (arrResultNot.length > 0) {
        str2 = '<div id="notsel"><ul>沒有被勾選項目';
        // 被選取的li
        for (let i = 0; i < arrResultNot.length; i++) {
            str2 = str2 + `<li>${arrResultNot[i]}</li>`
        }
        str2 = str2 + '</ul></div>';
    }

    getDiv.innerHTML = str1 + str2;

    // // 含html標籤 使用innerHTML
    // getDiv.innerHTML = '<h1>test</h1>';
    // // 為了保存上一個h1不被覆蓋 要加上去
    // getDiv.innerHTML = getDiv.innerHTML + 'test2';
});