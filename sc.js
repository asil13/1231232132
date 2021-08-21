let int1 = +prompt('Введите любое число'),
    int2 = +prompt('Введите степень в которую хотите возвести число '+int1);
let result = 1;
for (let i = 0; i < int2; i++) {
    result = result * int1;
}
alert(`Число ${int1} в ${int2} степени равна ${result}`)