let btn_enviar = document.querySelector('#btn_enviar')
let btn_calcular = document.querySelector('#btn_calcular')
let res = document.querySelector('#res')
let res2 = document.querySelector('#res2')
let prod_array = []
let qtde_array = []
let preco_laranja = 5.49, preco_limao = 3.49, preco_pera = 1.49
console.log(prod_array)
console.log(qtde_array)

btn_enviar.addEventListener('click', ()=>{
    res.innerHTML = '' // para atualizar o ultimo elemento selecionado e para escrever o ultimo objeto selecionado
    let produto = document.querySelector('#produto').value
    let qtde = Number(document.querySelector('#qtde').value)
    prod_array.push(produto)
    qtde_array.push(qtde)
    res.innerHTML = '<br>' + 'Produto = ' + produto + ' e quantidade =' + qtde + 'kg'

})

btn_calcular.addEventListener('click', ()=>{
    let total = 0.0
    for(i=0;i<prod_array.length;i++){
        if(prod_array[i]== 'laranja'){
            total = total + preco_laranja*qtde_array[i]
        }
        if(prod_array[i]== 'limao'){
            total = total + preco_limao*qtde_array[i]
        }
        if(prod_array[i]== 'pera'){
            total = total + preco_pera*qtde_array[i]
        }
    }
    console.log(total)
    res2.innerHTML += '<br>' + 'Valor total R$' + total.toFixed(2)
})