const jobs = document.querySelector('.jobs');
const jobcard = document.querySelector('.jobs .job-card');
const jobsarray = Array.from(document.querySelectorAll('.jobs .jobcard'));
const searchbar = document.querySelector('#search');
const locationbar = document.querySelector('#Location');
const alljobs = document.querySelector('#show-all');
searchbar.addEventListener('input', (event) => {
    const titlevalue = event.target.value;
    const locationvalue = locationbar.value;
    jobsarray.forEach(element => {
        const jobtitle = element.querySelector('.content h2').innerText;
        const joblocation = element.querySelector('.content .span2 p').innerText;
        if (jobtitle.toLowerCase().includes(titlevalue.toLowerCase()) && joblocation.toLowerCase().includes(locationvalue.toLowerCase())) {
            element.style.display = 'flex';
        }
        else {
            element.style.display = 'none'
        }
    })
})
locationbar.addEventListener('input', (event) => {
    const locationvalue = event.target.value;
    const titlevalue = searchbar.value;
    jobsarray.forEach(element => {
        const jobtitle = element.querySelector('.content h2').innerText;
        const joblocation = element.querySelector('.content .span2 p').innerText;
        if (jobtitle.toLowerCase().includes(titlevalue.toLowerCase()) && joblocation.toLowerCase().includes(locationvalue.toLowerCase())) {
            element.style.display = 'flex';
        }
        else {
            element.style.display = 'none'
        }
    })

})
alljobs.addEventListener('click', () => {
    jobsarray.forEach(element => {
        element.style.display = 'flex';
    })
    searchbar.value = "";
    locationbar.value = "";
})