
    // file: js/observe.js
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.project-details').forEach(el => {
    observer.observe(el);
  });
});
 // Mobile nav toggle
            (function(){
                document.addEventListener('DOMContentLoaded', function(){
                    var toggle = document.querySelector('.nav-toggle');
                    var nav = document.querySelector('.navbar nav');
                    var list = document.querySelector('.nav-list');
                    if(!toggle) return;
                    toggle.addEventListener('click', function(){
                        var expanded = this.getAttribute('aria-expanded') === 'true';
                        this.setAttribute('aria-expanded', String(!expanded));
                        nav.classList.toggle('open');
                    });
                    // close menu when clicking outside on small screens
                    document.addEventListener('click', function(e){
                        if(!nav.classList.contains('open')) return;
                        if(!nav.contains(e.target)){
                            nav.classList.remove('open');
                            toggle.setAttribute('aria-expanded','false');
                        }
                    });
                });
            })();