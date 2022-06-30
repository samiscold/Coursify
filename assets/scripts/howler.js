

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

    //  var startButton = document.getElementById('start');
     var svganim = document.getElementById("wave");

    svganim.addEventListener('click', function() {
    if(sound.playing()) {
      sound.pause();
      


    } else {
      sound.play();
      this.classList.toggle('stop');
    }

  })
  })
 

  
    // svganim.addEventListener('click', function() {
    // svganim.classList.toggle('stop')
    // })