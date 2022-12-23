/*
2 - Crie uma lógica que receba o número de lados de um polígono regular e a medida do lado (em cm). Deve-se calcular e
consolar o seguinte:

Se o número de lados for igual a 3 escrever "triângulo" e o valor da área
Se o número de lados for igual a 4 escrever "quadrado" e o valor da área.
Se o número de lados for igual a 5 escrever "pentágono" e o valor da área.
Caso  o  número  de  lados  seja  inferior  a  3  escrever  "não é polígono".

 */

function calcula_area_poligono(num_lados, medida_lado) {
    if (num_lados < 3) {
        console.log("Não é um polígono!");
    } else {
        let area;
        switch (num_lados) {
            case 3:
                area = ((medida_lado ** 2) * Math.sqrt(3)) / 4
                console.log("Triângulo. Área: " + area);
                break;

            case 4:
                area = medida_lado ** 2
                console.log("Quadrado. Área: " + area);
                break;
            case 5:
                let apotema = medida_lado / 2
                area = 5 * medida_lado * apotema
                console.log("Pentágono. Área: " + area);
                break;

            default:
                console.log("Não é possível calcular polígonos de " + num_lados + " lados!")
                break;
        }
    }
}

/*
3 - Crie uma lógica que recebe um número inteiro e determina se ele e par ou ímpar.
 */
function is_par(num) {
    let sePar = ''
    if (num % 2 == 0) {
        sePar = ' é PAR'

    } else {
        sePar = ' é ÍMPAR'
    }

    console.log(num, sePar)
}

/*
1 - Crie um algoritmo que imprima na tela o fatorial de 10. https://brasilescola.uol.com.br/matematica/fatorial.htm
*/

function calcula_fatorial(numero_inicial) {
    if (numero_inicial >= 0) {
        let numero = numero_inicial
        let fatorial = 1
        let demonstracao_calculo = ''
        while (numero >= 1) {
            if (numero == 1) {
                demonstracao_calculo += String(numero) + " = "
            } else {
                demonstracao_calculo += String(numero) + " * "
            }
            fatorial = fatorial * numero
            numero = numero - 1
        }
        console.log(demonstracao_calculo + String(fatorial))
        console.log("Fatorial de " + numero_inicial + " é " + fatorial)


    } else {
        console.log("O número deve ser positivo!")
    }
}


/*
2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque
por outras para verificar se seu algoritmo está funcionando corretamente.

*/

function inverte_palavra(palavra) {
    let palavra_invertida = ''
    for (i = palavra.length - 1; i >= 0; i--) {
        palavra_invertida += palavra[i]
    }
    console.log(palavra_invertida)
}

/*
3 - Considere o array:   let array = ['java', 'javascript', 'python', 'html', 'css'];
Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse
 array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
*/

function verifica_se_primo(num) {
    //números    inferiores    a    2    não    possuem    primos
    if (num < 2) {
        print("Número inválido!")
    } else {
        lista_divisores = [1]
        for i in range(2, int(num / 2)):
        if num % i == 0:
        lista_divisores.append(i)
    else:
        lista_divisores.append(num)

        primo = ''
        if (len(lista_divisores) > 2) {
            primo += 'NÃO É PRIMO'

        } else {
            primo += 'É PRIMO'
        }
        console.log(
            "O número {num} possui como divisores {lista_divisores}. Logo, {num} {primo}"
        )

    }
}


/*
4 - Escreva um algoritmo que imprima no console o maior número primo entre 2 e 100.
https://www.todamateria.com.br/o-que-sao-numeros-primos/#:~:text=Os%20n%C3%BAmeros%20primos%20s%C3%A3o%20aqueles,por%20um%20e%20ele%20mesmo.
 */