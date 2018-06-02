$(document).ready(function(){
    // make sure we do not change 'href' in <pre> tags
    var pattern = /a href=/g;
    var el = document.querySelector('.markdownText');
    var converter = new Showdown.converter();
    var rawMarkdown = converter.makeHtml(el.innerHTML);
    var htmlText = rawMarkdown.replace(pattern,"a target='_blank' href=");

    el.innerHTML = htmlText;
});
