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

}


const modalInfo =(id)=>{
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then(res => res.json())
    .then(info => {
            const myModal = document.getElementById('my_modal')
    const SingleDetails= document.getElementById('detailsOf')
    SingleDetails.innerHTML = `
    
        <h1 class="font-bold text-2xl">${info.data.title}</h1>
        <div class="flex flex-row gap-10">
            <button class="btn btn-success btn-xs rounded-full">${info.data.status}</button>
            <div class="flex flex-row gap-10 text-gray-500">
                <li>Open by ${info.data.assignee}</li>
                <li>${new Date(info.data.createdAt).toISOString().split('T')[0]}</li>
            </div>
            
        </div>
            ${info.data.labels[1] ? `<button class="btn btn-error text-[#EF4444] bg-[#ef444450] rounded-full">${info.data.labels[0]}</button>
                <button class="btn btn-warning bg-[#d9770650]">${info.data.labels[1]}</button>`:`<button class="btn btn-success">${info.data.labels[0]}</button>`}
        <div>

        <p class="text-slate-400">${info.data.description}</p>
        
        <div class="grid grid-cols-2">
            <div>
                <h1>Assignee:</h1>
                <p>${info.data.assignee}</p>
            </div>

            <div>
                <h2>Priority:</h2>
                <button class="btn btn-error btn-sm rounded-full">${info.data.priority}</button>
            </div>
        </div>

        </div> `

    myModal.showModal()
    })





}


const loadAllCard = ()=>{
    // console.log('ALLLAH AKBER ')

    

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(d => infoInHtml(d))

    const infoInHtml = (d)=>{
        // console.log(d.data)

        const allTheCard = document.getElementById('AllCardContain')
        const issueCounter = document.getElementById('issues')
        issueCounter.innerText = d.data.length
        allTheCard.innerHTML = " "
        

        d.data.forEach( (ob) =>{
            
            // console.log(ob)
            const cardHolderDiv = document.createElement('div')
            cardHolderDiv.innerHTML = `${ob.status ==='open'? ` <div id="${ob.id}" class="open space-y-5 bg-slate-100 container h-full border-t-4 border-[#00A96E]" onclick="modalInfo(${ob.id})">`:` <div id="${ob.id}" class="close space-y-5 bg-slate-100 container h-full border-t-4 border-[#A855F7]" onclick="modalInfo(${ob.id})">`}
           
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


