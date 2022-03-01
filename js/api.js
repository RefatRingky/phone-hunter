// for loading spinner 
const spinner = (spinnerStyle) => {
    document.querySelector('.spinner-border').style.display = spinnerStyle
}
spinner('none')
const searchPhone = () => {
    document.getElementById('phone-detail').textContent = ''
    document.getElementById('container').textContent = ''
    spinner('block')
    const searchText = document.getElementById('search-field').value;
    if (searchText == 0 || searchText < 0 || searchText == '') {
        alert('Please Type Something For search Phone')
    }
    else{
   // load phone data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data.slice(0,20)))


    document.getElementById('search-field').value = '';
    }

}
// show the loading data
const displayPhone = (data) => {
   
    if (data.length == 0) {
        alert('No Result  found')
        spinner('none')

    }
    // console.log(data);
    const container = document.getElementById('container')
    // container.innerHTML = ''
    data.forEach(datas => {
        console.log(datas);
        if (data.length == 0) {
            alert('Phone not found')

        }
        

        const div = document.createElement('div')
        div.classList.add('myStyle')
        div.innerHTML = `
            <img class='w-50'  src="${datas.image}" alt="">
            <h2>Brand-Name: ${datas.brand} </h2>
            <p>Phone-Name:${datas.phone_name}</p>
            <button onclick="showDetail('${datas.slug}')" class='text-white bg-success border rounded')">Explor Detail</button> 
             
             `
        container.appendChild(div)


        spinner('none')


    })
}
// show the Phone detail information
const showDetail = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))

}
// show the phone details and release date condition
const displayDetails = (details) => {
    console.log(details);
    document.getElementById('phone-detail').innerHTML = ''
    const phoneDetails = document.getElementById('phone-detail');
    const div = document.createElement('div');
    div.classList.add('details-style');
    div.classList.add('myStyle');
    div.innerHTML = `
   
         <img class='w-50'  src="${details.image}" alt="">
         <h2>Brand-Name:${details.brand}</h2>
         <p>Phone-Name:${details.name}</p>
         <p>Chipset:${details.mainFeatures.chipSet}</p>
         <p>Display Size:${details.mainFeatures.displaySize}</p>
         <p>Memory:${details.mainFeatures.memory}</p>
         <p>ReleaseDate:${details.releaseDate?details.releaseDate:'Realease Date is Not Found'}</p>
         <p>Sensor:${details.mainFeatures.sensors?details.mainFeatures.sensors:'Not Available'}</p>

         <p>Others:Bluetooth:${details?.others?.Bluetooth?details.others.Bluetooth:'Not Available'},${details?.others?.WLAN?details.others.WLAN:'Not Available '},${details?.others?.NFC?details.others.NFC:'Not Available'},${details?.others?.GPS?details.others.GPS:'Not Available'},${details?.others?.Radio?details.others.Radio:'Not Available'},
        ${details?.others?.USB?details.others.USB:'Not Available'}
        
         
  
    `
    phoneDetails.appendChild(div);
}
