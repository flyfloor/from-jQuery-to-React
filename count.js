let $button = $('#button')
let $count = $('#count')

$button.on('click', function(e){
    $count.val(parseInt(($count.val(), 10) + 1)
})
