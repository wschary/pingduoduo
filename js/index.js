$(window).scroll(function() {
    console.log('ok')
    $('header').css({
        position: 'fixed',
        top: 0
    })
    $('.banner').css({
            'margin-top': '106px'
        })
        // 如果属性是-链接的需要使用双引号引起来  或者-后面首字母大写
})

// 鼠标悬停img   透明度变化
$('a img').mouseenter(function() {
    $(this).css({
        opacity: 0.7
    })
})
$('a img').mouseout(function() {
    $(this).css({
        opacity: 1
    })
})

// 二维码动画效果
$('.fix_ewm').mouseenter(function() {
    $(this).animate({
        left: 0
    }, 50)
})
$('.fix_ewm').mouseout(function() {
    $(this).animate({
        left: -60
    }, 50)
})