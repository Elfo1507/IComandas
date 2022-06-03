const textarea = document.querySelector('textarea')
const nome = document.querySelector(".nome")
const price = document.querySelector(".price")
const mandar = document.querySelector('button')
const pag = document.querySelector('.produtos')
mandar.addEventListener('click', pegarItem)
function uparItem(item){
    const {nome, desc, preco, imagem} = item
    let li = document.createElement("li")
    li.classList.add("produtoConteiner")
    let section = document.createElement("section")
    section.classList.add("produto")
    let h5 = document.createElement("h5")
    h5.classList.add("nomeProduto")
    h5.innerText = nome
    let p = document.createElement("p")
    p.classList.add("descProduto")
    p.innerText = desc
    let p2 = document.createElement("p")
    p2.classList.add("prcProduto")
    p2.innerText = preco
    li.appendChild(section)
    section.appendChild(h5)
    section.appendChild(p)
    section.appendChild(p2)

    pag.appendChild(li)

}
function criarItem(textarea, name, price){
    const item = {
        nome: name,
        desc: textarea,
        preco: `R$${price}`,
    }
    uparItem(item)
}
function pegarItem(event){
    event.preventDefault();
    const itemname = nome.value
    const itemdesc = textarea.value
    const itemprc = price.value
    criarItem(itemdesc, itemname, itemprc)
}
