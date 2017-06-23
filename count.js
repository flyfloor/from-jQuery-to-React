let $button = $('#button')
let $count = $('#count')

let countState = 1

$button.on('click', function(e){
    countState += 1
    $count.val(countState)
})
