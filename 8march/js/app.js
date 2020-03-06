/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };


/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['С 8 Марта милая! Желаю тебе весеннего настроения, вдохновения и огромного везения. Будь любима, неотразима и поистине счастлива. В этот чудесный весенний день позволь мне выразить всю любовь, всё мое тепло, все чувства к тебе. Порой, за суетой и в круговороте дней, мы забываем о самом ценном — о родных. Но в моей душе всегда твой прекрасный образ: я всегда помню твой родной голос. Любимая моя, в этот чудесный день 8 Марта хочу пожелать тебе радости, чтоб твои чудесные глаза сияли только от счастья. Добра тебе, пусть оно заполнит каждую клеточку души и поселится в твоем сердце. Женского счастья тебе, ведь ты его заслуживаешь. С праздником, родная!'],
    startDelay: 3500,
    typeSpeed: 90,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});
