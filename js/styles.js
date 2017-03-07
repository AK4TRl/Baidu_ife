function show() {
    var content = document.getElementsByClassName('container');
    for (var i = 0; i<content.length; ++i) {
        if (content[i].classList.contains('hello_word'))
            content[i].classList.remove('hello_word');
        if(content[i].classList.contains('content'))
            content[i].classList.add('active');
    }
    content[0].classList.add('hidden');

}