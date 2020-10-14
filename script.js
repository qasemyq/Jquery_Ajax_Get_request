// Ajax request to Get 10 richest person from Forbes 
$(document).ready(function(){
    $(document).on('click','#get', function(){
        $('#list').html('Loading ...')
        $.ajax({
            'type': 'Get',
            'url': 'https://forbes400.herokuapp.com/api/forbes400?limit=10'
        }).done(function (data){
            $('#list').html('')
            for(let i =0; i <data.length; i++){
                $('#list').append(data[i].uri + "<br>")
            }
        })
    })
})