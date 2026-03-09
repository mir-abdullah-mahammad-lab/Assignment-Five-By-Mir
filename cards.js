// console.log('SA:')
const issues=0;
const act = (id)=>{
        const qselctor = document.querySelectorAll('.act')
        // console.log(qselctor)
        qselctor.forEach(n => n.classList.remove('act') )
        const btnAll = document.getElementById(id)
        btnAll.classList.add('act')
}

const displayOpenClose =(st)=>{
    const allHidden = document.querySelectorAll('.hidden')
    allHidden.forEach( hcards => hcards.classList.remove('hidden'))

    const openCard = document.querySelectorAll('.open')
    const closedCard = document.querySelectorAll('.close')
    const issueCounter = document.getElementById('issues')
    if(st ==='open'){
        issueCounter.innerText = openCard.length
        closedCard.forEach( c => c.classList.add('hidden'))
    }else {
        issueCounter.innerText = closedCard.length
        openCard.forEach(o => o.classList.add('hidden'))
    }

    // console.log(opens)
    // console.log(closed)
}

const loadAllCard = ()=>{
    console.log('ALLLAH AKBER ')

    

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(d => infoInHtml(d))

    const infoInHtml = (d)=>{
        // console.log(d.data)

        const allTheCard = document.getElementById('AllCardContain')
        const issueCounter = document.getElementById('issues')
        issueCounter.innerText = d.data.length
        allTheCard.infoInHtml = " "
        

        d.data.forEach( (ob) =>{
            
            // console.log(ob)
            const cardHolderDiv = document.createElement('div')
            cardHolderDiv.innerHTML = `${ob.status ==='open'? ` <div id="${ob.id}" class="open space-y-5 bg-red-100 container h-full border-t-4 border-[#00A96E]">`:` <div id="${ob.id}" class="close space-y-5 bg-red-100 container h-full border-t-4 border-[#A855F7]">`}
           
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
            <p>${new Date(ob.createdAt).toISOString().split('T')[0]}</p>

        </div>`
        allTheCard.appendChild(cardHolderDiv)
        })
     }
}

loadAllCard()


