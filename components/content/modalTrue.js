class ModalT {
    // closeShoppingPage() { 
    //     ROOT_SHOPPING.innerHTML = '' 
    // } 
    render() { 
        
        const html = ` 
        <div class="container"> 
            <div class="text_container">
            <h1> Правда </h1>
            <p>${randomTrue[randomT]}</p>
            </div>
            <div>
                <button onClick="contentPage.render()">следующий ход</button>
            </div>
            </div 
        ` 
        ROOT_CONTENT.innerHTML = html 
        
    } 
}
const modalTPage = new ModalT()
            // <tr> 
            // <td class="shopping__element--name">Сумма: </td> 
            // <td class="shopping__element--price">${sumCatalog.toLocaleString()} сом</td> 
            // </tr> 