//VITRINE
   function separateItens(products) {
   
    for(let i = 0; i < products.length; i++) {
        if (products[i].tag === "Biquínis") {
        listBiquinis.push(products[i]) 
        } else if (products[i].tag === "Maiôs") {
          listMaios.push(products[i])
        } else {
            listPlus.push(products[i])
        }
    }
}  
separateItens(products)
console.log(listMaios)

const mainA = document.querySelector("#container-a")
const section = document.querySelector("section")
const ulBiquinis = document.querySelector(".products-bqn")
const ulMaios = document.querySelector(".products-maios")
const ulSaidas = document.querySelector(".products-saidas")
const ulPlus = document.querySelector(".products-plus")
const tagH2 = document.querySelector("h2")
const divImage = document.querySelector("imagem")
console.log(ulBiquinis)
console.log(ulMaios)
console.log(ulSaidas)
console.log(ulPlus)

function createCard(itens) {
    let tagLi = document.createElement("li")
    tagLi.classList.add("produto")
    let tagImage = document.createElement("img")
    tagImage.classList.add("img-product")
    let tagCategory = document.createElement("p")
    tagCategory.classList.add("category")
    let tagH3 = document.createElement("h3")
    let tagDescricao = document.createElement("p")
    tagDescricao.classList.add("dscript")
    let tagPreco = document.createElement("p")
    tagPreco.classList.add("price")
    let tagButton = document.createElement("button")
    tagButton.classList.add("btnAdd")

    ulBiquinis.appendChild(tagLi)
    ulMaios.appendChild(tagLi)
    ulSaidas.appendChild(tagLi)
    ulPlus.appendChild(tagLi)
    tagLi.append(tagImage, tagCategory, tagH3, tagPreco, tagDescricao, tagButton)
    

    tagImage.src = itens.img
    tagCategory.innerText = itens.tag
    tagH3.innerText = itens.nameItem
    tagDescricao.innerText = itens.description
    tagPreco.innerText = `R$ ${itens.value}`
    tagButton.innerText = itens.addCart

    
    return tagLi
} 

function listaProdutos (produtos, lista) {
    
    for(i = 0; i < produtos.length; i++) {
        
        let liCard = createCard(produtos[i])

        lista.appendChild(liCard)
       
    }
}

listaProdutos(listBiquinis, ulBiquinis)
listaProdutos(listMaios,ulMaios)
listaProdutos(listSaidas, ulSaidas)
listaProdutos(listPlus,ulPlus)


//ELEMENTOS CARRINHO

let tagContainer = document.querySelector('#container-b')
let divCar = document.querySelector('.title-car')
let ul = document.createElement('ul')
let liCar = document.createElement('li')
let pName = document.createElement('p')
let pPreco = document.createElement('p')
let divQuant = document.querySelector('.quantidade')
let pQuant = document.querySelector('.quant') // --> quant add
let pQTotal = document.querySelector('.quantTotal')  // --> aqui entra o valor de itens total
let divFinal = document.querySelector('.value')
let pTotal = document.querySelector('.total')
let totalValue = querySelector('.totalValue') //--> aqui que entra o valor total do carrinho
let button = document.querySelector('.checkout')

pName.classList.add('dscript-name')
pValor.classList.add('preco')
valorTotal.classList.add('valorTotal')
ul.classList.add("listCar")
liCar.classList.add("product-car")

tagContainer.appendChild(ul)
ul.appendChild(liCar)
liCar.append(pName, pValor)


let removeQuant = document.createElement("button")
liCar.appendChild(removeQuant)
removeQuant.classList.add("btn-")
removeQuant.innerText = "-"


removeQuant.addEventListener("click", function (event) {
    pQTotal.innerText = ""
    pQuant--
    pQuant -= products.value
    pQTotal.innerText =  `${pQuant}`
    contador--
    valorTotal -= products.value

    if(pQuant < 1) {
        event.composedPath()[3].remove()
    }
    carVazio()
    carTotal()
  })    

    
    let addQuant = document.createElement('button')
    liCar.appendChild(addQuant)
    addQuant.classList.add("btn+")
    addQuant.innerText ="+"
    
    addQuant.addEventListener("click", function () {
    pQTotal.innerText = ""
    pQuant++
    pQuant += products.value
    pQTotal.innerText =  `${pQuant}`
    contador++
    valorTotal += products.value

    carTotal()
    })


    let remover = document.createElement("button")
    remover.classList.add("btn-remover")
    remover.setAttribute("id", `remove_${products.id}`)

    remover.innerText = "Remover"

remover.addEventListener("click", function(event){
    contador -= pQuant
    valorTotal -= pQTotal
    event.composedPath()[2].remove()
    
    carVazio()
    carTotal()
})

tagButton.innerText = `${products.id}`

tagButton.addEventListener("click", function(){
    if(contador == 0){
        liCar.innerText= ""
    }    
    let productAdd = document.querySelector(`#carrinho_${products.id}`)  
    if(productAdd) {
        return alert ("O item foi adicionado ao carrinho")
    }  
    contador++
    
})




