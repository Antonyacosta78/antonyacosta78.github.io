
$(document).ready(() => {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          500,
          'linear'
        )
      })
    
});