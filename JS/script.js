window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 10,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 20,
        connectParticles: false
      }
    }
  ]
});

// AOS animations
$(function() {
  AOS.init({
    duration: 1000,
    // easing: 'ease-in-out',
    // once: true,
    // mirror: false
  });

  onElementHeightChange(document.body, function(){
    AOS.refresh();
  });
});

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }

// Add back to Top button
(function() {
//   /**
//    * Easy on scroll event listener 
//    */
    let backtotop = document.querySelector('.back-to-top')
    if (backtotop != null) {
      if (window.scrollY > 300) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
})();

// Change background
(function() {
  let particlebg = document.getElementById("main__background");
  let landscape = document.getElementById("landscape__background");
  let snowybg = document.getElementById("snowy__background");
  if(landscape != null && particlebg != null && snowybg != null){
    
    window.addEventListener('scroll', toggleBackground = () => {
      particlebg.classList.remove("active");
      landscape.classList.remove('active')
      snowybg.classList.remove('active')
      if(window.scrollY < 900){
        particlebg.classList.add("active");
      }
      else if(window.scrollY < 4700){
        landscape.classList.add('active')
      }
      else if(window.scrollY > 4700){
        snowybg.classList.add('active')      
      }
    }, {passive: true})
  }
})();

// Header Hide/show
// (function(){
//   var doc = document.documentElement;
//   var w = window;

//   var prevScroll = w.scrollY || doc.scrollTop;
//   var curScroll;
//   var direction = 0;
//   var prevDirection = 0;
//   var scrollCount = 0;

//   var header = document.getElementById('myHeader');

//   var checkScroll = function() {

//     curScroll = w.scrollY || doc.scrollTop;
//     if (curScroll > prevScroll) { 
//       //scrolled up
//       direction = 2;
//     }
//     else if (curScroll < prevScroll) { 
//       //scrolled down
//       direction = 1;
//     }

//     if (direction !== prevDirection) {
//       toggleHeader(direction, curScroll);
//     }

//     prevScroll = curScroll;
//   };

//   var toggleHeader = function(direction, curScroll) {

//     if(curScroll < prevScroll){
//       scrollCount++;
//     }
//     else{
//       scrollCount--;
//     }
//     if (direction === 2 && scrollCount < -5) { 
//       header.classList.remove('sticky');
//       prevDirection = direction;
//       scrollCount = 0;
//     }
//     else if (direction === 1 && scrollCount > 15) {
//       header.classList.add('sticky');
//       prevDirection = direction;
//       scrollCount = 0;
//     }

    
//   };

//   window.addEventListener('scroll', checkScroll, {passive: true});

// })();

// Scroll To Top
function scrollToTop() {
  var position =
      document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 40);
  } else clearTimeout(scrollAnimation);
}

// Scroll to
function scrollto(element){
  var loc = document.querySelector(element);
  loc.scrollIntoView({behavior: 'smooth'});
}

// Mazimize
function maximize(){
  var cls = document.getElementById("console__window")
  var ter = document.getElementById("terminal")
  var ft = document.getElementById("fake__terminal")
  if(cls != null){
    cls.classList.add("fullscreen")
    ter.classList.add("fullscreen")
    ft.classList.add("fullscreen")
  }
}
// Minimize
function minimize(){
  var cls = document.getElementById("console__window")
  var ter = document.getElementById("terminal")
  var ft = document.getElementById("fake__terminal")
  if(cls != null){
    cls.classList.remove("fullscreen")
    ter.classList.remove("fullscreen")
    ft.classList.remove("fullscreen")
  }
}
// Close terminal
function close(){
  // var cls = document.getElementById("console__window")
  // if(cls != null){
  //   cls.remove()
  // }
}

// Auto Type function
  const typed = document.querySelector('.typed')
  if (typed != null) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  const typed_project = document.querySelector('.typed_project')
  if (typed_project != null) {
    let typed_strings_project = typed_project.getAttribute('data-typed-items')
    typed_strings_project = typed_strings_project.split(',')
    new Typed('.typed_project', {
      strings: typed_strings_project,
      loop: true,
      typeSpeed: 1,
      backSpeed: 5,
      backDelay: 2000
    });
  }


// Projects Category
function showCatagory(category){
  var gameProjects = document.getElementsByClassName("game")
  var webProjects = document.getElementsByClassName("web")
  var softwareProjects = document.getElementsByClassName("software")

  if(gameProjects != null && webProjects != null && softwareProjects != null){
    if(category == "game"){
      console.log("showing games")
      for(var i = 0; i < gameProjects.length; i++)
      {
        if(gameProjects[i].classList.contains("hide")){
          gameProjects[i].classList.remove("hide")
        }
      }
      for(var i = 0; i < webProjects.length; i++)
      {
        if(!webProjects[i].classList.contains("hide")){
          webProjects[i].classList.add("hide")
        }
      }
      for(var i = 0; i < softwareProjects.length; i++)
      {
        if(!softwareProjects[i].classList.contains("hide")){
          softwareProjects[i].classList.add("hide")
        }
      }
    }
    else if(category == "web"){
      console.log("showing web")
      for(var i = 0; i < gameProjects.length; i++)
      {
        if(!gameProjects[i].classList.contains("hide")){
          gameProjects[i].classList.add("hide")
        }
      }
      for(var i = 0; i < webProjects.length; i++)
      {
        if(webProjects[i].classList.contains("hide")){
          webProjects[i].classList.remove("hide")
        }
      }
      for(var i = 0; i < softwareProjects.length; i++)
      {
        if(!softwareProjects[i].classList.contains("hide")){
          softwareProjects[i].classList.add("hide")
        }
      }
    }
    else if(category == "software"){
      console.log("showing software")
      for(var i = 0; i < gameProjects.length; i++)
      {
        if(!gameProjects[i].classList.contains("hide")){
          gameProjects[i].classList.add("hide")
        }
      }
      for(var i = 0; i < webProjects.length; i++)
      {
        if(!webProjects[i].classList.contains("hide")){
          webProjects[i].classList.add("hide")
        }
      }
      for(var i = 0; i < softwareProjects.length; i++)
      {
        if(softwareProjects[i].classList.contains("hide")){
          softwareProjects[i].classList.remove("hide")
        }
      }
    }
  }
}

// Skills Pie chart
var skillSectionRandom = 0;
function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation =  -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount+"-"+skillSectionRandom++;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "cornflowerblue", 
    "olivedrab", 
    "orange", 
    "tomato", 
    "crimson", 
    "purple", 
    "turquoise", 
    "forestgreen", 
    "navy", 
    "gray"
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");
createPie(".pieID2.legend", ".pieID2.pie");
createPie(".pieID3.legend", ".pieID3.pie");

window.addEventListener('scroll', function() {
  var headerContainer = document.querySelector('.header-container ');
  var scrollDistance = window.pageYOffset;

  if (scrollDistance > 100) { // Change the threshold as needed
    headerContainer.classList.add('sticky');
  } else {
    headerContainer.classList.remove('sticky');
  }
});

var logoImage = document.querySelector('.logo img');
var headerContainer = document.querySelector('.header-container ');

logoImage.addEventListener('click', function() {
  headerContainer.classList.toggle('sticky');
});