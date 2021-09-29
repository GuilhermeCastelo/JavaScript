function fatorial(num) {

    fat = 1;
    cont = num;

    while (cont > 1) {
        fat *= cont;
        cont--;
    }

    return fat;
}

result = fatorial(5);

console.log(result);