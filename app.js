
document.getElementById('searchButton').addEventListener('click',function(){
    const inputValue = document.getElementById('input').value 
    inputGet(inputValue) 
    document.getElementById('input').value=''
})


//  first role 

// const inputGet = inputValue=>{
//     if (inputValue === ''){
//         errorFuncton('Dont Enter Empty')
//     }
//     else{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
//     .then(rel => rel.json())
//     .then(data => meals(data.meals))
//     .catch(() => errorFuncton('This data are not available now..Please try again after somethimes') )   
// }
// }


// second role 

const inputGet = async inputValue=>{
    if (inputValue === ''){
        errorFuncton('Dont Enter Empty')
        
    }
    else{
        try{
            document.getElementById('error').innerText =''
            const rel = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            const data = await rel.json()
            meals(data.meals);
        }

        catch(error ){
            errorFuncton('This data are not available now..Please try again after somethimes')}
    // .catch(() => errorFuncton('This data are not available now..Please try again after somethimes') )   
}
}





const errorFuncton =errors=>{
    const error = document.getElementById('error')
    error.innerText = errors
}

const meals = meal =>{
    const mealAndPicture = document.getElementById('mealAndPicture')
    document.getElementById('mealAndPicture').innerText =''
    
    meal.forEach(element => {
        
        const createDiv = document.createElement('div')
        createDiv.className="createDiv"
        createDiv.innerHTML =`
        <img onclick ='ingredients("${element.strMeal}")' src="${element.strMealThumb}">
        <h3>${element.strMeal}<h3>
        `
        mealAndPicture.appendChild(createDiv)

    });
}
// first role 

// const ingredients = ingredientsList =>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientsList}`)
//     .then(rel => rel.json())
//     .then(data=> ingredientsDetalis(data.meals))   
//     .catch(() => errorFuncton('This data are not available now..Please try again after somethimes'))
// }

// second role 

const ingredients =async ingredientsList =>{
    try{
        const rel = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientsList}`)
        const data = await rel.json()
         ingredientsDetalis(data.meals)
    }
    catch(error){
        errorFuncton('This details are not available')
    }
}

const ingredientsDetalis = details =>{
    const ul = document.getElementById('ingredients')
    document.getElementById('ingredients').innerText =''
    details.forEach(element => {
        ul.innerHTML = `
        <img src="${element.strMealThumb}">
        <li>${element.strMeasure1}</li>
        <li>${element.strMeasure2}</li>
        <li>${element.strMeasure3}</li>
        <li>${element.strMeasure4}</li>
        <li>${element.strMeasure5}</li>
        <li>${element.strMeasure6}</li>
        <li>${element.strIngredient1}</li>
        <li>${element.strIngredient2}</li>
        <li>${element.strIngredient3}</li>
        <li>${element.strIngredient4}</li>
        <li>${element.strIngredient5}</li>
        <li>${element.strIngredient6}</li>
        `
    });
}
