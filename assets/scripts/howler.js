

var sound = new Howl({
    src: ['assets/audios/music.mp3'],
    preload: true,
    volume: 0.1,
    autoplay: false,
    onplay:function() {
      console.log("works");
    }

  });


  sound.on('load', function() {
    document.getElementById("wave").style.display ="inline-block";
    //  var startButton = document.getElementById('start');
    var svganim = document.getElementById("wave");

    svganim.addEventListener('click', function() {
    if(sound.playing()) {
      sound.pause();
      this.classList.remove("run");

      this.classList.toggle('stop');
      
    } else {

      sound.play();
      this.classList.remove("stop");

      this.classList.toggle('run');

      
    }

  })
  })

  // const mIcon = document.querrySelectorAll('.music-icon ')
  // mIcon.forEach
 
  
    // svganim.addEventListener('click', function() {
    // svganim.classList.toggle('stop')
    // })