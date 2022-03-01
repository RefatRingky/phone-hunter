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