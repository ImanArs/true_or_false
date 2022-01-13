class ModalF {
    // closeShoppingPage() { 
    //     ROOT_SHOPPING.innerHTML = '' 
    // } 
    render() { 
        
        const html = ` 
        <div class="container"> 
            <div class="text_container">
            <h1> Действие </h1>
            <p>${randomFalse[randomF]}</p>
            </div>
            <div>
                <a href="">
                <button onClick="contentPage.render()">следующий ход</button>
                </a>
            </div>
            </div 
        ` 
        ROOT_CONTENT.innerHTML = html 
        
    } 
}
const modalFPage = new ModalF()