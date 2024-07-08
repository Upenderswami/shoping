fetch('https://dummyjson.com/products')
.then((response) => {
    return response.json();
  })
  .then((result) =>{
    show(result.products)
    console.log(result);
  })


  const main = document.querySelector('#main') 

  function show( data)
{
   for (let i = 0; i<data.length; i++)
   {
    const div = document.createElement("div")

    const image = document.createElement("img")
    image.src= data[i].thumbnail;

    const heading = document.createElement("h2")
    heading.innerHTML = data[i].title

    const pare = document.createElement("p")
    pare.innerHTML = data[i].description

    const price = document.createElement('h1')
    price.innerHTML = data[i].price


    div.append(image , heading , pare , price)
    main.append(div)
}
}
