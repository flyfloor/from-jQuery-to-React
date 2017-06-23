let countState = 1

const render = (count) => {
    let dom = `<div>
                    <input type="number" id="count" value="${count}" />
                    <button id="button">+ add</button>
                </div>`

    $('#root').html(dom)
}

const addCount = () => {
    countState += 1
    return countState
}

render(1)

$(document).on('click', '#button', function (e) {
    render(addCount())
})

