const Fetchdata=async()=>{
    const input123=document.querySelector(".input1")
    console.log(input123.value)
    const letter=input123.value
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter===""?"a":letter}`)
    const data=await res.json()
    console.log(data);
    const Recipes=data.meals

    Recipes.map((item)=>{
        console.log(typeof item.idMeal)
        const carddiv=document.querySelector(".cardparent")
        const div=document.createElement("div")
         div.onclick=()=>{
            const a=document.createElement("a")
            a.href=`C:/Users/ADMIN/Desktop/Figma/details.html?id=${item.idMeal}`
            a.click()
        }
        div.style.width="300px"
        div.style.height="400px"
        div.style.border="1px solid black"
        div.style.backgroundImage=`url(${item.strMealThumb})`
        div.style.display="flex"
        div.style.backgroundSize="center"
        div.style.backgroundPosition="center"
        carddiv.insertAdjacentElement("afterbegin",div)
     })

    }
Fetchdata()

