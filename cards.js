// console.log('SA:')

const loadAllCard = ()=>{
    // console.log('ALLLAH AKBER ')

    

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(d => infoInHtml(d))

    const infoInHtml = (d)=>{
        console.log(d.data)

        const allTheCard = document.getElementById('AllCardContain')
        const issueCounter = document.getElementById('issues')
        issueCounter.innerText = d.data.length
        

        d.data.forEach( (ob) =>{
            
            console.log(ob)
            const cardHolderDiv = document.createElement('div')
            cardHolderDiv.innerHTML = `<div id="${ob.id}" class="space-y-5 bg-red-100 container h-full">
            <div id="highLow" class="flex justify-between">
                
                ${ob.status === 'open'? `<img src="./assets/Open-Status.png" class="w-10 h-10">`:`<img src="./assets/Closed-Status.png" class="w-10 h-10">`}
                <button class="btn btn-error text-[#EF4444] bg-[#ef444450] rounded-full">${ob.priority}</button>
            </div>
            <p class="font-bold">${ob.title}</p>
            <p class="text-[#64748b]">${ob.description}</p>

            <div class="flex justify-start gap-5">
            ${ob.labels[1] ? `<button class="btn btn-error text-[#EF4444] bg-[#ef444450] rounded-full">${ob.labels[0]}</button>
                <button class="btn btn-warning bg-[#d9770650]">${ob.labels[1]}</button>`:`<button class="btn btn-success">${ob.labels[0]}</button>`}
                
            </div>
            <hr class="text-[#64748b]">

            <p>${ob.author}</p>
            <p>${ob.createdAt}</p>

        </div>`
        allTheCard.appendChild(cardHolderDiv)
        })
            
            
        
 
    }

    
}
