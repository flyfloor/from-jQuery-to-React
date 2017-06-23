let $button = $('#button')
let $count = $('#count')

let countState = 1

const render = count => {
    $count.val(count)
}

const addCount = () => {
    countState += 1
    return countState
}

$button.on('click', function (e) {
    render(addCount())
})

