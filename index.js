function add(a,b){
    let soma = a+b
    return soma
}
console.log(add(2,4))

function multiply(c,d){
    let multiplica = 0
    for (i = 0; i < d; i++){
    multiplica = add(c,multiplica)
    }
    return multiplica
}
console.log(multiply(6,8))

function power(x,n){
    let exponenciacao = 1
    for(let i = 0; i < n; i++){
        exponenciacao = multiply(x,exponenciacao)
    }
    return exponenciacao
}
console.log(power(2,8))

function factorial(y){
    let fator = 1
    for(let i = 1; i <= y; i++){
        fator = multiply(fator,y)
    }
    return fator
}
console.log(factorial(4))

function fibonacci(z){
    let var1 = 0
    let var2 = 1
    let operacao
    let result
    for(let i=0;i<z;i++){
        operacao = add(var1,var2)
        var1 = var2
        var2 = operacao
        result = var1
    }
    return result
}
console.log(fibonacci(7));

