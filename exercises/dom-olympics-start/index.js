var h1 = document.createElement('h1');

    h1.className = 'header';

    h1.textContent = 'JavaScript Made This!!';

console.log(h1);

    document.body.prepend(h1);


var div = document.createElement('div');

    div.className = 'name';

    div.textContent = 'wrote the JavaScript'

console.log(div);

    document.body.prepend(div);


var h4 = document.createElement('h4')

    h4.className = 'name header';

    h4.textContent = 'Brighton'

console.log(h4);

    document.body.prepend(h4);

    var messages = document.getEmlemtesByClassName("message");

    console.log(messages)
    
    messages[0].textContent = "first"
    messages[1].textContent = "second"
    messages[2].textContent = "third"
    messages[3].textContent = "fourth"