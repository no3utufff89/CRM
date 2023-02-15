{
   //Урок 4 Задание 2

    const random = 0 +Math.random() * (1 -0 );
    const rain = Math.round(random);
    console.log(`У константы rain выпало значение ${rain}`)
    if (rain === 1) {
        console.log("Никаких больше вечеринок! Пошел дождь.Возьмите зонт")
    } else {
        console.log("Дождя нет!")
    };
}

{
    //Урок 4 задание 3

    
    const math = Number(prompt('Сколько набрал по математике?'))
    const russian = Number(prompt('Сколько набрал по русскому?'))
    const it = Number(prompt('Сколько набрал по информатике?'))
        
    const sum = (math + russian + it)
        
    if (sum >= 265) {
            console.log('Родина подождет сынок! Ты поступил на бюджет.УРА!')
    } else {
        console.log("Там в дверь стучат иди посмотри...")
    }
        
}

{
    //Урок 4 задание 4

    const sum = +(prompt('Сколько желаете снять бабосиков?'))
    
    if (sum < 100) {
        console.log('Минимальная сумма - 100');
    } else if (sum % 100 !== 0) {
        console.log('Выдвем только кратно 100');
    } else {
        console.log('Вот ваша сумма')
    }
    
}