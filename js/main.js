"use strict";
// {
//     //Модуль 4 задание 1

//     const product = "Кофемолка";
//     const quantity = 2;
//     const category = "Кухонная техника";
//     const price = 1300;
//     const sum = quantity * price;

//     console.log(`Наименование товара: ${product}`)
//     console.log(`Общая сумма товара: ${sum} любых денег`)
// }

{
    //Модуль 4 задание 2

    const product = prompt("Введите название товара");
    const category = prompt("Введите категорию товара");
    let price;
    while (isNaN(price)){
        price = +prompt("Введите цену товара");
        if(isNaN(price)){
            alert("Сейчас цифры не каждый можжет вводить, то есть вводить может каждый , не каждый может это делать!")
        }
        else if (price == ''){
            alert("Нажали отмена")
            break
        }
    };
    let quantity;
    while (isNaN(quantity)){
        quantity = +prompt("Введите кол-во товара");
        if(isNaN(quantity)){
            alert("Сейчас цифры не каждый можжет вводить, то есть вводить может каждый , не каждый может это делать!")
        }
        else if (quantity == ''){
            alert("Нажали отмена")
            break
        }
    };

    console.log(`Тип данных для product = ${typeof product}`)
    console.log(`Тип данных для category = ${typeof category}`)
    console.log(`Тип данных для price = ${typeof price}`)
    console.log(`Тип данных для quantity = ${typeof quantity}`)
    console.log(`На складе ${quantity} единицы товара "${product}" на сумму ${quantity*price} деревянных`)

}

// {
//     const  myWeight = 320;
//     const speedLight = 3e8;

//     console.log(myWeight * Math.pow(speedLight, 2))

// }






