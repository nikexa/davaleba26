let number = 1;

document.getElementById('btn').addEventListener('click', () => {
  fetch(`https://fakestoreapi.com/products/${number}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      let pName=document.createElement("p")
      let pPrice=document.createElement("p")
      pName.textContent = data.title;
      pPrice.textContent = `ფასი: ${data.price}`;
      document.body.appendChild(pName)
      document.body.appendChild(pPrice)
      number++
    })
    .catch(error => {
      console.error('შეცდომა:', error);
    });
});