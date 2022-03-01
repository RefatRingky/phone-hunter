const searchPhone = () => {
    document.getElementById('phone-detail').textContent = ''
    document.getElementById('container').textContent = ''
    spinner('block')
    const searchText = document.getElementById('search-field').value;
    if (searchText == 0 || searchText < 0) {
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