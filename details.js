const params= new URLSearchParams(window.location.search)
const id =params.get("id")
console.log(id)


const GetMeal=async()=>{
    const FetchData=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data=await FetchData.json()
    
    console.log(data.meals)
    data.meals.map((item)=>{
        console.log(typeof item.idMeal)
        

            const product_image=document.querySelector(".image")
            product_image.src = item.strMealThumb

            const product_name=document.querySelector(".product_name")
            product_name.innerHTML=item.strMeal

            const product_Category=document.querySelector(".cat")
            product_Category.innerHTML=item.strCategory

            const product_Area=document.querySelector(".area")
            product_Area.innerHTML=item.strArea

            const product_Instructions=document.querySelector(".instructions")
            product_Instructions.innerHTML=item.strInstructions

            const product_Link=document.querySelector(".link")
            product_Link.href = item.strYoutube
    })
}

GetMeal()