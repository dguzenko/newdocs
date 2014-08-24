(function ($, window, document, undefined) {
  "use strict";

  $(document).ready(function(){
    var urlParts = document.URL.split('?', 2),
      state = {},
      here = urlParts[0],
      view;

    var currentDoc = urlParts[1] ? urlParts[1].match(/^(\w)*/) : '';
    if (urlParts.length > 1) {
      currentDoc = currentDoc[0];
      view = 'docs/' + currentDoc + '.md';

    } else {
      currentDoc = 'GettingStarted';
      view = "README.md";
    }

    Yoodocs.run({
      fetcher: Flatdoc.file(view)
    });

  });

  // on href click
  $(document).on('click', 'a', function(e){
    var target = $(this);

    // external links
    if (target.attr('href').substring(0, 4) == 'http'){
      e.preventDefault();
      e.stopPropagation();
      window.open(target.attr('href'), '_blank');

    // internal links
    } else if (target.attr('href').substring(0, 4) != 'http' && target.attr('href').substring(0, 1) != '#') {

      e.preventDefault();

      Yoodocs.run({
        fetcher: Flatdoc.file('docs/'+target.attr('href')+'.md')
      });

      window.history.pushState({}, '', '?'+target.attr('href'));

      // close menu
      target.closest('.uk-open').removeClass('uk-open');
    }
  });

})(jQuery, window, document);