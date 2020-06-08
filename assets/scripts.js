$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  var pages = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/search.json'
  });

  $('#search-input').typeahead({
        hint: true,
        highlight: true,
        minLength: 2
      },
      {
        name: 'pages',
        source: pages
      });

})

