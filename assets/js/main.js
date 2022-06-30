// import {confetti} from "./confetti.js"

(function() {
  "use strict";

  const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            // document.querySelector('.search-zip').disabled = true;
        }
          form.classList.add('was-validated')
        }, false)
      })

  //easter egg

      let buffer = [];
  document.addEventListener('keydown', evt => {
    const triggerWords = ['mateo','viraj','ana-maria','davis','anan','samantha','linnea','annie','hayley','daniel','lauren','burak','diana','tanya','ammy','pete','wei','rachel','nohelia','dana']
    const key = evt.key.toLowerCase();
    const currentTime = Date.now();
    let lastKeyTime = Date.now();
    console.log('easeter')
    
    // if (triggerWord.indexOf(key) === -1) return;
    if (currentTime - lastKeyTime > 1000) {
        buffer = [];
      }
      buffer.push(key);
      lastKeyTime = currentTime;
      let typedWord = buffer.join("")
      if (triggerWords.includes(typedWord)) {
        // console.log("easter triggered", buffer, key)
        animateConfetti()
        if (document.getElementById('credits')) {
        document.getElementById('credits').classList.add('loaded');
        }
          else return false;  
        }
  })


  // confettii 
  var confettiShower = [];
  var numConfettis = 400;
  var confettiContainer = document.getElementById('confetti-div');
  var colors = [
    "#00FF73  ",
    "#6C4AE2",
    "#FDDA00 ",
    "#DB27DB ",
    "#FA405A ",
    "#51EFFC ",
    "#EB640A "
  ];
  
  class Confetti {
    constructor(x, y, w, h, c) {
      this.w = Math.floor(Math.random() * 15 + 5);
      this.h = this.w*1.2;
      this.x = Math.floor(Math.random() * 100);
      this.y = Math.floor(Math.random() * 100);
      this.c = colors[Math.floor(Math.random() * colors.length)];
    }
    create() {
        var newConfetti = '<div class="confetti" style="bottom:' + this.y +'%; left:' + this.x +'%;width:' +
          this.w +'px; height:' + this.h +'px;"><div class="rotate"><div class="askew" style="background-color:' + this.c + '"></div></div></div>';
        confettiContainer.innerHTML+= newConfetti; 
        }
    };
  
  function animateConfetti() {
    console.log('confetti triggered')
    for (var i = 1; i <= numConfettis; i++) {
      var confetti = new Confetti();
      confetti.create();
    }
    var confettis = document.querySelectorAll('.confetti');
    for (var i = 0; i < confettis.length; i++) {
      var opacity = Math.random() + 0.1;
      var animated = confettis[i].animate([
        { transform: 'translate3d(0,0,0)', opacity: opacity },
        { transform: 'translate3d(20vw,100vh,0)', opacity: 1 }
      ], {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000)
      });
     confettiShower.push(animated);
    }
  }


  document.querySelector('.search-form-control').addEventListener('input',function(e){
    // console.log(e.target.value.length)
    if (e.target.value.length < 5 ){
      document.queryselector(".invalid-feedback").display = 'none'
    }
    if (e.target.value.length > 4 ){
      document.querySelector('.search-zip').disabled = false;
    }
    let num = e.target.value
    if (num > 10475) {
      document.querySelector('.search-zip').disabled = true;
      document.querySelector(".invalid-feedback").style.display = "block"
      // document.querySelector('.search-zip').style.opacity = .25;
    } else if (num < 10451){
      document.querySelector(".invalid-feedback").style.display = "block"
      document.querySelector('.search-zip').disabled = true;
    } else {
      document.querySelector('.search-zip').disabled = false;
      document.querySelector(".invalid-feedback").style.display = "none"
    }
    document.querySelector('.zip-code-stored').innerHTML = e.target.value
    const threatLevel = [["Mild","green"], ["Moderate", "gold"], ["High", "red"]]
    const threatLevelSpan = [["Templado","green"], ["Moderado", "gold"], ["Aldo", "red"]]
    const airQualityIndex = [['Good',"green"],['Moderate','yellow'], ['Unhealthy for Sensitive Groups',"orange"],['Unhealthy','red'],['Very Unhealthy','maroon']]
    const airQualityIndexSpan = [['Bueno',"green"],['Moderado','yellow'], ['Malsano para grupos sensibles',"orange"],['Malsano','red'],['Muy Insalubre','maroon']]
    const randomthreatLevel = threatLevel[Math.floor(Math.random() * threatLevel.length)];
    const randomAirLevel = airQualityIndex[Math.floor(Math.random() * airQualityIndex.length)];
    if (languagetoggleIsOn === false){
      const randomthreatLevel = threatLevel[Math.floor(Math.random() * threatLevel.length)];
      document.querySelector('.threat-level').innerHTML = randomthreatLevel[0]
      document.querySelector('.threat-level').style.backgroundColor = randomthreatLevel[1]
      // console.log(randomthreatLevel[0], randomthreatLevel[1])
      const randomAirLevel = airQualityIndex[Math.floor(Math.random() * airQualityIndex.length)];
    document.querySelector('.air-quality-index').innerHTML = randomAirLevel[0]
    document.querySelector('.air-quality-index').style.backgroundColor = randomAirLevel[1]
    }
    else {
      const randomthreatLevelSpan = threatLevelSpan[Math.floor(Math.random() * threatLevelSpan.length)];
      document.querySelector('.threat-level').innerHTML = randomthreatLevelSpan[0]
      document.querySelector('.threat-level').style.backgroundColor = randomthreatLevelSpan[1]
      const randomAirLevelSpan = airQualityIndexSpan[Math.floor(Math.random() * airQualityIndexSpan.length)];
    document.querySelector('.air-quality-index').innerHTML = randomAirLevelSpan[0]
    document.querySelector('.air-quality-index').style.backgroundColor = randomAirLevelSpan[1]
    }
    // document.querySelector('.threat-level').innerHTML = randomthreatLevel[0]
    // document.querySelector('.threat-level').style.backgroundColor = randomthreatLevel[1]
    // document.querySelector('.air-quality-index').innerHTML = randomAirLevel[0]
    // document.querySelector('.air-quality-index').style.backgroundColor = randomAirLevel[1]
    document.querySelector('.population').innerHTML = Math.floor(Math.random() * (94000 - 50000) + 50000);
    
  })

  document.querySelector(".fill-out-form-btn").addEventListener("click", () => {
    window.location.href = "/#amaf-form"
  })

  document.querySelector(".search-zip").addEventListener("click", () => {
    window.location.href = "/#hero"
  })

  let toggle = document.getElementById('lang-toggle');
  var languagetoggleIsOn = false;
  toggle.addEventListener('click', e => {
    // currentLanguage.innerHTML = languages[+!toggle.checked ? 0 : 1];
    // console.log("lang toggle", toggle.checked)
    
    if (languagetoggleIsOn === false) {
      // languageSwitch.classList.add('toggle-is-active');
      languagetoggleIsOn = true;

      document.getElementById("hero-png").src = "./assets/img/breathe-easy-icon-es.png"
      document.querySelector(".btn-get-started").textContent = "Empezar"
      document.querySelector(".btn-projects").textContent = "Socios"
      document.querySelector("#search-form h2").textContent = "¿Cuál es su código postal del Bronx (10451-10475)?"
      document.querySelector("#check-1").textContent = "Niño con asma en Escuela Pública"
      document.querySelector("#check-2").textContent = "AMAF en el registro"
      document.querySelector("#name").placeholder = "código postal";
      document.querySelector(".search-zip").textContent = "Buscar";
      document.querySelector(".invalid-feedback").textContent = "Proporcione un código postal válido del Bronx (10451-10475)."
      document.querySelector("#zipcode-title").textContent = "Código postal";
      document.querySelector("#population-title").textContent = "Población";
      document.querySelector("#asthma-risk").textContent = "Riesgo de asma";
      document.querySelector("#air-quality").textContent = "Índice de calidad del aire";
      document.querySelector(".mock-data").textContent = "datos simulados";
      document.querySelector(".fill-out-form-btn").textContent = "Rellenar formulario AMAF";
      document.querySelector("#modal-close").textContent = "Cerrar";
      document.querySelector("#what-is").innerHTML = "¿Qué es&nbsp;";
      document.querySelector("#amaf-h3").textContent = "Formulario de administración de medicamentos para el asma";
      document.querySelector("#list-1").textContent = "Formulario de administración de medicamentos para el asma";
      document.querySelector("#list-2").textContent = "Las escuelas de la Ciudad de Nueva York (NYC) requieren que el cuidador presente un Formulario de Administración de Medicamentos para el Asma (AMAF; un formulario de pedido completado por un médico que debe renovarse cada año escolar) para confirmar los diagnósticos de asma y permitir que las enfermeras escolares administren medicamentos para las exacerbaciones del asma.";
      document.querySelector("#list-3").textContent = "Sin un AMAF, debido a las regulaciones basadas en sistemas, la enfermera no puede administrar medicamentos, incluso si un estudiante tiene un ataque de asma.";
      document.querySelector("#download-form").textContent = "Descargar formulario aquí"
      document.querySelector("#contact h2").textContent = "Boletín y recordatorios"
      document.querySelector("#contact p").textContent = "Regístrese para recibir información actualizada sobre la salud respiratoria en el Bronx. Configure recordatorios para el registro y las renovaciones anuales de AMAF. Los recordatorios se enviarán 1 mes antes de la fecha de vencimiento del formulario."
      document.querySelector("#newletter-label").textContent = "Boletin informativo"
      document.querySelector("#reminder-label").textContent = "Recordatorio AMAF"
      document.querySelector("#sign-up-btn").textContent = "Inscribirse"
      document.querySelector("#clients h2").textContent = "Socios"
      document.querySelector("#sign-up-disclaimer").textContent = "Característica próximamente."
      document.querySelector("#social-media").textContent = "Contacta con nosotros"
      
    } 
  else  {
      // languageSwitch.classList.remove('toggle-is-active');
      languagetoggleIsOn = false;

      document.getElementById("hero-png").src = "./assets/img/breathe-easy-icon.png"
      document.querySelector(".btn-get-started").textContent = "Get Started"
      document.querySelector(".btn-projects").textContent = "Partners"
      document.querySelector("#search-form h2").textContent = "What is your Bronx zip code (10451-10475)?"
      document.querySelector("#check-1").textContent = "Child with asthma in Public School"
      document.querySelector("#check-2").textContent = "AMAF on record"
      document.querySelector("#name").placeholder = "Zip code";
      document.querySelector(".search-zip").textContent = "Search";
      document.querySelector(".invalid-feedback").textContent = "Please provide a valid Bronx zip code (10451-10475)."
      document.querySelector("#zipcode-title").textContent = "Zip Code";
      document.querySelector("#population-title").textContent = "Population";
      document.querySelector("#asthma-risk").textContent = "Asthma Risk";
      document.querySelector("#air-quality").textContent = "Air Quality Index";
      document.querySelector(".mock-data").textContent = "* mock data";
      document.querySelector(".fill-out-form-btn").textContent = "Fill out AMAF form";
      document.querySelector("#modal-close").textContent = "Close";
      document.querySelector("#what-is").innerHTML = "What is&nbsp;";
      document.querySelector("#amaf-h3").textContent = "Asthma Medication Administration Form";
      document.querySelector("#list-1").textContent = "Successful school asthma management involves individual case identification and provision of medications to students when needed.";
      document.querySelector("#list-2").textContent = "New York City (NYC) schools require caregiver submission of an Asthma Medication Administration Form (AMAF; a physician-completed order form that must be renewed every school year) to confirm asthma diagnoses and allow school nurses to administer medication for asthma exacerbations.";
      document.querySelector("#list-3").textContent = "Without an AMAF, due to systems-based regulations, the nurse cannot administer medication, even if a student is having an asthma attack.";
      document.querySelector("#download-form").textContent = "Download Form here "
      document.querySelector("#contact h2").textContent = "Newsletter & Reminders"
      document.querySelector("#contact p").textContent = "Sign up for up to date information about respiratory health in Bronx. Set up reminders for annual AMAF registration and renewals. Reminders will be sent 1 month before the form is due."
      document.querySelector("#newletter-label").textContent = "Newsletter"
      document.querySelector("#reminder-label").textContent = "AMAF reminder"
      document.querySelector("#sign-up-btn").textContent = "Sign Up"
      document.querySelector("#clients h2").textContent = "Partners"
      document.querySelector("#sign-up-disclaimer").textContent = "Feature coming soon."
      document.querySelector("#social-media").textContent = "Contact Us"
      
    }
    
    return languagetoggleIsOn;
   
  });

  // const checkFormValid = () => {
  //   console.log('onkeychange')
  // }

// adding three js section 


    // scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xdddddd);

    // camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    // camera.rotation.y = 45/180*Math.PI;
    // camera.position.x = 800;
    // camera.position.y = 100;
    // camera.position.z = 1000;

    // controls = new THREE.OrbitControls(camera);
    // controls.addEventListener('change', renderer);

    // hlight = new THREE.AmbientLight (0x404040,100);
    // scene.add(hlight);

    // directionalLight = new THREE.DirectionalLight(0xffffff,100);
    // directionalLight.position.set(0,1,0);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);
    // light = new THREE.PointLight(0xc4c4c4,10);
    // light.position.set(0,300,500);
    // scene.add(light);
    // light2 = new THREE.PointLight(0xc4c4c4,10);
    // light2.position.set(500,100,0);
    // scene.add(light2);
    // light3 = new THREE.PointLight(0xc4c4c4,10);
    // light3.position.set(0,100,-500);
    // scene.add(light3);
    // light4 = new THREE.PointLight(0xc4c4c4,10);
    // light4.position.set(-500,300,500);
    // scene.add(light4);

    // renderer = new THREE.WebGLRenderer({antialias:true});
    // renderer.setSize(window.innerWidth,window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    // let loader = new THREE.GLTFLoader();
    // loader.load('scene.gltf', function(gltf){
    //   car = gltf.scene.children[0];
    //   car.scale.set(0.5,0.5,0.5);
    //   scene.add(gltf.scene);
    //   animate();
    // });

    // function animate() {
    //   renderer.render(scene,camera);
    //   requestAnimationFrame(animate);
    // }


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }



  // search function 

  // document.querySelector('.search.zip')onClick=

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.hero-slider', {
    speed: 2000,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 70
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()