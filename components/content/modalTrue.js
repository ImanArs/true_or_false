class ModalT {

    render() { 
        
        const html = ` 
        <div class="container"> 
            <div class="text_container">
            <h1> Правда </h1>
            <p>${randomTrue[randomT]}</p>
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
const modalTPage = new ModalT()
