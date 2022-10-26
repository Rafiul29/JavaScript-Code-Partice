// AJAX - Asynchronous javaScript and XML

const wrapper =document.querySelector('.country-wrapper')

const btn= document.querySelector('.btn');


btn.addEventListener('click',function(){
    const input=document.querySelector('.inputcountry')
const inputVale = input.value;
    const resquest= new XMLHttpRequest()
    resquest.open('GET',`https://restcountries.com/v2/name/${inputVale}`)
    resquest.send()
    
    resquest.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText)
        renderData(data)
    })
    
})

function renderData(country){
    console.log(country)

    const html=`
    <div class="country">
                <h1>${country.name}</h1>
                <p>${country.population}</p>
                <p>${country.capital}</p>
                <p></p>
            </div>
    `;
    wrapper.insertAdjacentHTML('afterbegin',html);
}