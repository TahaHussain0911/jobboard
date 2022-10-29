const job = document.querySelector('.jobs')
const jobs = document.querySelector('.jobs .job-card')
// const job1 = jobs.cloneNode(true)
// const job2 = jobs.cloneNode(true)
// const job3 = jobs.cloneNode(true)
// job.insertAdjacentElement('beforeend', job1)
// job.insertAdjacentElement('beforeend', job2)
// job.insertAdjacentElement('beforeend', job3)
// job1.querySelector('h3').innerText = "Python Developer";
// job2.querySelector('h3').innerText = "Java Developer";
// job3.querySelector('h3').innerText = "C++ Developer";

const length = Array.from(document.querySelectorAll(".jobs .job-card")).length
document.querySelector('span').innerText = length

const search = document.querySelector("#search")
function jobsearch(event) {
    const input = event.target.value;
    Array.from(document.querySelectorAll('.jobs .job-card')).forEach(jobname => {
        const jobtitle = jobname.querySelector('h3').innerText;
        if (jobtitle.toLowerCase().includes(input.toLowerCase())) {
            jobname.style.display = 'block'
        }
        else {
            jobname.style.display = 'none'
        }
    })
}
search.addEventListener('keyup', jobsearch)


const joblist = document.querySelector('#show-all')
function alljobs(event) {
    Array.from(document.querySelectorAll('.jobs .job-card')).forEach(jobname => jobname.style.display = "block")
    search.value = "";
}
joblist.addEventListener('click', alljobs)
