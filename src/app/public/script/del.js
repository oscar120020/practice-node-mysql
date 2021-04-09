var file = document.getElementsByClassName('.cont').value

for(var i = 0; i < file; i++){
    $(document).on('click', '.borrar'+i, e => {
        e.preventDefault()
        $(this).closest('tr').remove()
    })
}