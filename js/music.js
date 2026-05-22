
'use strict';
$(document).ready(function(){
setTimeout(function(){
    $("#preloader").delay(650).removeClass("animation").addClass("over");
    $(".pre-overlay").css({"height" : "0%"});
}, 2000);
});


// Smooth Scroll Animation

const allLink = document.querySelectorAll('a:link');
allLink.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href= link.getAttribute('href');
        // console.log(href);

        if( href=== '#') 
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        if(href !== "#" && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'})
        }
    });
});


const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if (ent.isIntersecting === false){
        document.body. classList.add('sticky')
    }
    if (ent.isIntersecting === true){
        document.body. classList.remove('sticky')
    }
}, 
{
    root: null,
    threshold: 0,
    rootMargin: '-55px',
})
obs.observe(heroSectionEl);


// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();    
//     if (scroll <= 400) {
//         $(".header").removeClass("sticky-header")
//     }else{
//         $(".header").addClass("sticky-header");
//     }
// });


// Audio Player Js Code
function loadPlayer() {
    var audioPlayer = new Audio();
    audioPlayer.controls="controls";
    audioPlayer.addEventListener('ended',nextSong,false);
    audioPlayer.addEventListener('error',errorFallback,true);
    document.getElementById("player").appendChild(audioPlayer);
    nextSong();
}
function nextSong() {
    if(urls[next]!=undefined) {
        var audioPlayer = document.getElementsByTagName('audio')[0];
        if(audioPlayer!=undefined) {
            audioPlayer.src=urls[next];
            audioPlayer.load();
            audioPlayer.play();
            next++;
        } else {
            loadPlayer();
        }
    } else {
        alert('the end!');
    }
}
function errorFallback() {
        nextSong();
}
function playPause() {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    if(audioPlayer!=undefined) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    } else {
        loadPlayer();
    }
}
function pickSong(num) {
    next = num;
    nextSong();
}

var urls = new Array();
    urls[0] = 'music-list/Discrepencies.mp3';
    urls[1] = 'music-list/Follow Me.mp3';
    urls[2] = 'music-list/Foot Prints.mp3';
    urls[3] = 'music-list/I Remember.mp3';
    urls[4] = 'music-list/In My Soul.mp3';
    urls[5] = 'music-list/Reconcile.mp3';
    urls[6] = 'music-list/Rich Fool.mp3';
    urls[7] = 'music-list/Thoughts Of You.mp3';
    urls[8] = 'music-list/Walk With Me.mp3';
    urls[9] = 'music-list/Where Were You.mp3';
var next = 0;



$(".music-list").on("click", function() {
    $(".music-list").removeClass("active");
    $(this).addClass("active");
})

// Video Off Scroll 

$(function() {
  
    var $video = $('.video');
    var $window = $(window);
  
    $window.scroll(function() {
  
      var $topOfVideo = $video.offset().top;
      var $bottomOfVideo = $video.offset().top + $video.outerHeight();
  
      var $topOfScreen = $window.scrollTop();
      var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
      
      if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
        $video[0].pause();
      }
      
    });
    
  });