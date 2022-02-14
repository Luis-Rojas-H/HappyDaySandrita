

const boton = document.querySelectorAll('button');

var example = document.getElementsByClassName("main")[0].getBoundingClientRect();

var example1 = document.getElementsByClassName("boton2")[0].getBoundingClientRect();



boton[1].addEventListener('mouseenter', function position(){
  var x = (Math.random() * (82 - (0))) + (0);
  var yd = 100-((example1.height)/example.height)*100;
  var y = (Math.random() * (yd - (0))) + (0);

  boton[1].style.left= (x)+"%";
  boton[1].style.bottom = (y)+"%";

  let audioEtiqueta = document.querySelector("audio")
  audioEtiqueta.play();
})

boton[1].addEventListener('click', function postionPhone (){
  var x = (Math.random() * (82 - (0))) + (0);
  var yd = 100-((example1.height)/example.height)*100;
  var y = (Math.random() * (yd - (0))) + (0);

  boton[1].style.left= (x)+"%";
  boton[1].style.bottom = (y)+"%";

  let audioEtiqueta = document.querySelector("audio")
  audioEtiqueta.play();
})

boton[0].addEventListener('click', function(){
  Swal.fire({
    background: '#f8efed',
    imageUrl: "https://i.gifer.com/4jxD.gif",
    title: 'Señorita, está segura? :V',
    text: "No vale quejarse! *.*",
    showCancelButton: true,
    confirmButtonColor: '#FF0000',
    cancelButtonColor: '#2c3161',
    confirmButtonText: 'Sí, estoy segura! :3',
    cancelButtonText: 'No! :P'
  }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          background: '#f8efed',
          title: 'You are so golden :3',
          confirmButtonColor: '#FF0000',
          confirmButtonText: 'GOLDEN'
        })
      }
    })

  let audioEtiqueta = document.querySelector("audio")
  audioEtiqueta.play();
})

var reproductor = document.getElementById("audioFondo");
reproductor.volume = 0.5;