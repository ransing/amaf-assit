/**
* Template Name: Reveal - v4.7.0
* Template URL: https://bootstrapmade.com/reveal-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
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

  document.querySelector('.search-form-control').addEventListener('input',function(e){
    console.log(e.target.value.length)
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
    const threatLevel = ["Mild", "Moderate", "High"]
    const airQualityIndex = ['Good','Moderate', 'Unhealthy for Sensitive Groups','Unhealthy','Very Unhealthy']
    const randomthreatLevel = threatLevel[Math.floor(Math.random() * threatLevel.length)];
    const randomAirLevel = airQualityIndex[Math.floor(Math.random() * airQualityIndex.length)];
    document.querySelector('.threat-level').innerHTML = randomthreatLevel
    document.querySelector('.air-quality-index').innerHTML = randomAirLevel
    document.querySelector('.population').innerHTML = Math.floor(Math.random() * (94000 - 50000) + 50000);
    
  
  })

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
    speed: 1000,
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
    speed: 400,
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
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 6,
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