vart form = document.travelForm

form.submit.addEventListener("click"), function(e){
    e.preventDefault()
    var dietArray = []
    if (form.vegetarian.checked){
            dietArray.push('Vegetarian')
    }
    if (form.lactose.checked){
        dietArray.push('Lactose')
    if (form.peanutAllergy.checked){
        dietArray.push('Peanut Allergy')
    }
    }

}

form.submit.addEventListener("click", function(e){
    e.preventDefault()
    console.dir(form.gender)
    alert(`
    First Name: ${form.firstName.value}
    Last Name: ${form.lastName.value}
    Age: ${form.age.value}
    Gender: ${form.gender.value}
    Location: ${form.location.value}
    Dietary Restrictions: ${}
    `)
})