window.addEventListener("load", function () {
    doFetch()
    doFetchAsync()
    executeDivisionPromise()
    executeDivisionPromiseAsyncAwait()
});

//Fetch
const doFetch = () => {
    fetch("https://api.github.com/users/Matheus-Rian")
    .then((res) => {
      res.json().then((data) => showData(data));
    })
    .catch((error) => console.log("Erro"));
}

//AsyncAwait
async function doFetchAsync() {
    const res = await fetch("https://api.github.com/users/Matheus-Rian")
    const json = await res.json()
    console.log(json)
}

const showData = (data) => {
  const user = document.querySelector(".user");
  user.textContent = `${data.login} ${data.name}`;
};

const divisionPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Não é possível fazer a divisão por zero");
    }
    resolve(a / b);
  });
};

const executeDivisionPromise = () => {
    divisionPromise(2, 2).then((result) => console.log(result));
    divisionPromise(2, 0)
      .then((result) => console.log(result))
      .catch((errorMessage) => console.log(`Erro na divisão: ${errorMessage}`));
}

async function executeDivisionPromiseAsyncAwait() {
    const division = await divisionPromise(12,2)
    console.log(division)
}