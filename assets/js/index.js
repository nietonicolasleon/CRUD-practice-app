
$("#add_vino").submit(function(event){
    alert("Data insertada exitosamente");
})

$("#update_vino").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/vinos/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Actualizada Exitosamente")
    })
})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/vinos/${id}`,
            "method": "DELETE"
        }

        if(confirm("¿De verdad querés eliminar este vino?")){
            $.ajax(request).done(function(response){
                alert("Data Eliminada Exitosamente")
                location.reload()
            })
        }
    })
}