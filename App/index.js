let scrapButton = document.getElementById('scrapButton')


scrapButton.addEventListener('click', async () =>{
    const [tab] = await chrome.tabs.query({active: true, currentWindow:true})
    console.log("🚀 ~ file: index.js ~ line 6 ~ scrapButton.addEventListener ~ tab", tab)
    
    if(tab !== null){
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: profilesScrapers
        })
    }
})


const profilesScrapers = () => {

    const contactInfoQueries = {
        nombre: document.querySelector('div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1')
    }

    const githubProfile =  {
        nombre: contactInfoQueries.nombre?.innerText
    }
    console.log(githubProfile)

}
