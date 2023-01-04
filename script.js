let divs = document.querySelectorAll('div')
for( item of divs){
    item.style.textAlign = 'center'
    item.style.margin = 'auto'
}

// função callback

let numPrimo = num => {
    if (num == 1 || num == 0) return false
    if (num == 2 || num == 3) return true

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0) return false
    }
    return true
}


let container = document.createElement('div')

let tabela = document.createElement('table')

let numbers = 0

while(numbers <= 101){

    let linha = document.createElement('tr')

    for (let y = 1; y <= 6; y++){
        let dados = document.createElement('td')
        dados.textContent = numbers
        
        dados.style.margin = '1%'
        dados.style.padding = '2.5%'

        if(numPrimo(numbers))
            dados.style.backgroundColor = '#DC143C'
        else if (numbers % 2 == 0)
            dados.style.backgroundColor = '#228b22'
        else dados.style.backgroundColor = '#FFFF00'

        linha.appendChild(dados)
        numbers++
    }
    tabela.appendChild(linha)
}

tabela.style.width = '60%';
tabela.style.marginRight = '20%';
tabela.style.marginLeft = '20%';
tabela.style.marginTop = '1px';
tabela.style.textAlign = 'center';
tabela.style.fontFamily = 'ariel';
tabela.style.fontSize = '15px';
tabela.style.fontWeight = 'bold';
tabela.style.color = 'white';

container.appendChild(tabela);
document.body.appendChild(container);