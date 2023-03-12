$(function () {
  mainInit();
  $(document).on('click', 'a[href="#"]', function (e) { e.preventDefault() })
})

function mainInit() {
  menu_open();
  search_open();
  collection();
}

function menu_open() {
  ; (function () {
    let get = (target) => {
      return document.querySelector(target);
    }
    const $allMenu = get('#header .all-menu');
    const $close = get('#header .menu-open .menu-panel .close');
    const $bg = get('#header .menu-open .bg');
    const $menu = get('#header .menu-open');

    $allMenu.addEventListener('click', function (e) {
      $menu.classList.add('on');
    })
    $close.addEventListener('click', function (e) {
      $menu.classList.remove('on');
    })
    $bg.addEventListener('click', function (e) {
      $menu.classList.remove('on');
    })
  })()
}

function search_open() {
  ; (function () {
    let get = (target) => {
      return document.querySelector(target);
    }
    const $searchBtn = get('#header .search-btn');
    const $searchOpen = get('#header .search-open');
    const $close = get('#header .search-open .search-panel .close');
    const $visual = get('#visual');

    $searchBtn.addEventListener('click', function (e) {
      $searchOpen.classList.add('on');
    })
    $close.addEventListener('click', function (e) {
      $searchOpen.classList.remove('on');
    })
    $visual.addEventListener('click', function (e) {
      $searchOpen.classList.remove('on');
    })
  })()
}

function collection() {
  const $mask = $('.main .collection .mask');
  const $maskUl = $('.main .collection .mask ul')
  const size = $('.main .collection .mask ul').width();
  let cnt = 1, ww = 0, timer = null;

  timer = setInterval(function () {
    ww = parseInt($mask.css('left'));
    ww < -size ? $mask.css({ left: 0 }) : $mask.css({ left: '-=' + cnt });
  }, 20)
  $maskUl.hover(function () {
    clearInterval(timer);
  })
  $maskUl.on('mouseleave', function () {
    timer = setInterval(function () {
      ww = parseInt($mask.css('left'));
      ww < -size ? $mask.css({ left: 0 }) : $mask.css({ left: '-=' + cnt });
    }, 20)
  })
}