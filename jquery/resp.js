$("#icon-container").click(function(){
  $('#icon').toggleClass('rotate')
  $('nav').toggleClass('display')
  $('.wrapper').toggleClass('bg')
});

$('button').click(function(){
  $('.one').toggleClass('animations')
  $('.two').toggleClass('animations')
  $('.three').toggleClass('animations')
  $('.four').toggleClass('animations')
});
$(document).ready(function(){
 timing();
})
function timing(){
  setTimeout(function(){
    $('.group').fadeIn('slow')
  },1000);
  setTimeout(function(){
    $('.btn').fadeIn('slow')
  },2000);
  setTimeout(function(){
    $('#icon-container').fadeIn('slow','linear',function(){
  $('#icon').animate({
    width:'40px',
    fontSize:'30px',
    },'slow')
    })
  },3000);
  
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
