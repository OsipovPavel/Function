// Функция проверки веса кота
// let catName, weight, colorFlur;

// function checkWeight (catWeight, nameCat, catColor) {
//     if (catWeight <= 4) {
//         alert(catColor + ' ' + nameCat + ' cпортивный кошак');
//     } else if (catWeight <= 8) {
//         alert(catColor + ' ' + nameCat + ' упитанный');
//     } else alert(catColor + ' ' + nameCat + ' пора на диету');
// }

// catName = 'Мурка';
// weight = 3;
// colorFlur = 'Белая';
// checkWeight(weight, catName, colorFlur);

// catName = 'Вася';
// weight = 4;
// colorFlur = 'Серый';
// checkWeight(weight, catName, colorFlur);

// catName = 'Луна';
// weight = 7;
// colorFlur = 'Черная';
// checkWeight(weight, catName, colorFlur);

// catName = 'Гав';
// weight = 10;
// colorFlur = 'Черно-белый';
// checkWeight(weight, catName, colorFlur);

// Function задание 1 вызов наименьшего числа
// function checkLow(firstNumber, secondNumber) {
//     let minNumber;
//     // let firstNumber = +prompt('Введите первое число');
//     // let secondNumber = +prompt('Введите второе число');
//     if (firstNumber < secondNumber) {
//         minNumber = firstNumber
//     } else if (firstNumber > secondNumber) {
//         minNumber = secondNumber
//     } else minNumber = 'Числа равны между собой';
//     return minNumber;
// }
// alert(checkLow(5,8));

// Function задание 2 возводит число в указанную степень

// function elevate(userNumber, degree) {
//     return userNumber**degree;
// }
// alert (elevate (16,5));

// Function задание 3 калькулятор
// function calculator (firstNumber, secondNumber, sign) {
//     let resultNumber;
//     switch (sign) {
//         case '+': resultNumber = firstNumber + secondNumber;
//             break;
//         case '-': resultNumber = firstNumber - secondNumber;
//             break;
//         case '*': resultNumber = firstNumber * secondNumber;
//             break;
//         case '/': resultNumber = firstNumber / secondNumber;
//             break;
//     }
//     return resultNumber;
// }
// alert (calculator(25,8,'*'));

// Function задание 4 Простое число, не сработало

// function checkSimple(num) {
//     let i=0;
//     let str;
//     do {
//         i++;
//     } while (num % i != 0 || i == 1);
//     str = (num == i) ? `число ${num} простое` : `число ${num} сложное`;
//     return str;
// }
// alert(checkSimple(113));

// Function задание 5 таблица умножения
function tableMultiplication (X) {
    document.write('<table>');
    document.write(`<caption>Таблица Умножения на ${X}</caption>`);
    for(let i = 2; i < 10; i++) {
        document.write(`<tr><td>${X} x ${i}</td><td class="sign">=</td><td>${X*i}</td></tr>`);
    }
    document.write('</table>');
}
for (let i = 2; i<10; i++)
tableMultiplication (i);