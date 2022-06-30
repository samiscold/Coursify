

var sound = new Howl({
    src: ['assets/audios/music.mp3'],
    preload: true,
    volume: 0.05,
    autoplay: false,
    onplay:function() {
      console.log("test");
    }

  });


  sound.on('load', function() {

     var startButton = document.getElementById('start');
  startButton.addEventListener('click', function() {
    this.classList.toggle('active');
    if(sound.playing()) {
      
      sound.pause();

    } else {
      sound.play();
    }

  })
  })
 

  var vawe = document.getElementsById('#Line_1');

  vawe.addEventListener('click',function() {
    this.classList.toggle('red');
     })