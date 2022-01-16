
class Content {

    a


    render () {

        const html = `
        <div>
            <div class="main" >    
                <div class="main_title">
                    <div class="text">
                        <h2>правда или действие</h2>
                        <p>выбирайте</p>
                    </div>
                </div>
                <div>
                    <div class="main_content" >
                        <div class="left" >
                            <button class="trueBtn" id="trueBtn" onclick="modalTPage.render()">правда</button>
                        </div>
                        <div class="right">
                            <button class="FalseBtn" id="FalseBtn" onclick="modalFPage.render()">действие</button>
                        </div>
                    </div>
                <button class="randomBtn" id="randomBtn" onclick="randomB()" > случайно </button>
                </div>
            </div>
        </div>   
        `
        ROOT_CONTENT.innerHTML = html
        }
        // <div class="bottom"></div>
        // ${randomB}
        // "alert('скоро')"
    }

const contentPage = new Content()
contentPage.render()