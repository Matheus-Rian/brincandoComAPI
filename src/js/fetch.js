
window.addEventListener('load', function() {

    fetch("https://api.github.com/users/Matheus-Rian")
    .then((res) => {
       res.json()
        .then(data => showData(data))
    });
    
})

const showData = data => {
    const user = document.querySelector('.user')
    user.textContent = `${data.login} ${data.name}`
}
