// console.log($('task-name').text)
function getCategoryId(category){
    if(category === 'School'){
        return 3
    } else if(category === 'Home'){
        return 1
    }else if(category === 'Work'){
        return 4
    }else if(category === 'Personal'){
        return 2
    }

}
const submit = $("#submit-button")
$(submit).click(function(){
    const date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(typeof $('#task-name').val())
    console.log(typeof $('#date-due').val())
    console.log(typeof Number($('#category-choice').val()))
    console.log(`${month}-${day}-${year}`)
    $.get('https://mvp-server-h3od.onrender.com/tasks', (data)=>{
        console.log(data)
    })

})

