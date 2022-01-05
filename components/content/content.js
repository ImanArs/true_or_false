
class Content {



    render () {
        
            
        const html = `
            
        <div class="left" >
        <button class="trueBtn" id="trueBtn" onclick="modalTPage.render()">правда</button>
        </div>
        <div class="right">
        <button class="FalseBtn" id="FalseBtn" onclick="modalFPage.render()">действие</button>
        </div>
        
            
        `
        
        ROOT_CONTENT.innerHTML = html
        
        // onClick="modalFPage.render()"
        
        }
        
        
    }
    
    // onClick=alert(randomFalse[randomF])

const contentPage = new Content()
contentPage.render()