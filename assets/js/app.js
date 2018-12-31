$(document).ready(function(){
    $('#render').click(function(){
        $('#price_parent').slideUp();
        var frame_number = $('#frame_number').val();
        var render_time = $('#render_time').val();
        var cpu_speed = $('#cpu_speed').val();
        var cpu_number = $('#cpu_number').val();
        if(frame_number == null || frame_number == '' || render_time == null || render_time == '' || cpu_speed == null || cpu_speed == '' || cpu_number == null || cpu_number == '') {
            alert('لطفا تمامی مشخصات را وارد کنید تا حسابگر اجرا شود');
            return;
        }
        var mix1 = frame_number * render_time * cpu_speed * cpu_number;
        var k = mix1 / 10;
        var k1 = mix1 / 20;
        var k2 = mix1 / 40;
        ol1 = 60*10*32*2/2;
        ol2 = 60*20*32*2/2;
        ol3 = 60*40*32*2/2;
        res_ol1 = (mix1 / ol1) * 35200;
        res_ol2 = (mix1 / ol2) * 47168;
        res_ol3 = (mix1 / ol3) * 50688;
        $('#reponse_ol3').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol3 + '</span>' + 'ریال می باشد ' + '<span class="display-block"> زمان رندر پروژه:'+ k2 +'</span>');
        $('#reponse_ol2').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol2 + '</span>' + ' ریال می باشد ' + '<span class="display-block"> زمان رندر پروژه:'+ k1 +'</span>');
        $('#reponse_ol1').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol1 + '</span>' + ' ریال می باشد ' + '<span class="display-block"> زمان رندر پروژه:'+ k +'</span>');
        $('#price_parent').slideDown();
    });




    $('#render2').click(function(){
        $('#price_parent').slideUp();
        var frame_number = $('#frame_number2').val();
        var render_time = $('#render_time2').val();
        var baravord = $('#baravord2').val();

        if(frame_number == null || frame_number == '' || render_time == null || render_time == '' || baravord == null || baravord == '') {
            alert('لطفا تمامی مشخصات را وارد کنید تا حسابگر اجرا شود');
            return;
        }
        var mix1 = frame_number * render_time * baravord;
        var k = mix1 / 10;
        var k1 = mix1 / 20;
        var k2 = mix1 / 40;

        ol1 = 60*10*32*2/2;
        ol2 = 60*20*32*2/2;
        ol3 = 60*40*32*2/2;
        res_ol1 = (mix1 / ol1) * 35200;
        res_ol2 = (mix1 / ol2) * 47168;
        res_ol3 = (mix1 / ol3) * 50688;
        $('#reponse_ol3').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol3 + '</span>' + 'ریال می باشد ' + '<span class="display-block"> زمان رندر پروژه:'+ k2 +'</span>');
        $('#reponse_ol2').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol2 + '</span>' + ' ریال می باشد ' + '<span class="display-block"> زمان رندر پروژه:'+ k1 +'</span>');
        $('#reponse_ol1').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol1 + '</span>' + ' ریال می باشد ' + '<span class="display-block"> زمان رندر پروژه:'+ k +'</span>');
        $('#price_parent').slideDown();
    });




    $('.customer-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

//     $('#render').click(function(){
//         $('#price_parent').slideUp();
//         var frame_number = $('#frame_number').val();
//         var render_time = $('#render_time').val();
//         var cpu_speed = $('#cpu_speed').val();
//         var cpu_number = $('#cpu_number').val();
//         if(frame_number == null || frame_number == '' || render_time == null || render_time == '' || cpu_speed == null || cpu_speed == '' || cpu_number == null || cpu_number == '') {
//             alert('لطفا تمامی مشخصات را وارد کنید تا حسابگر اجرا شود');
//             return;
//         }
//         var mix1 = frame_number * render_time * cpu_speed * cpu_number;
// %Price%
//         res_ol1_p = (mix1 / 4224) * 31680;
//         res_ol2_p = (mix1 / 4224) * 38720;
//         res_ol3_p = (mix1 / 4224) * 45760;
//         $('#reponse_ol3').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol3_p + '</span>' + ' ریال می باشد ');
//         $('#reponse_ol2').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol2_p + '</span>' + ' ریال می باشد ');
//         $('#reponse_ol1').html('هزینه نهایی رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol1_p + '</span>' + ' ریال می باشد ');
//         $('#price_parent').slideDown();
// %Time%
//         res_ol1_t = mix1 / (4224 * 10);
//         res_ol2_t = mix1 / (4224 * 20);
//         res_ol3_t = mix1 / (4224 * 30);

//         $('#reponse_ol3').html('زمان انجام رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol3_t + '</span>' + ' ساعت می باشد ');
//         $('#reponse_ol2').html('زمان انجام رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol2_t + '</span>' + ' ساعت می باشد ');
//         $('#reponse_ol1').html('زمان انجام رندر شما ' + '<span style="color:lightgreen;font-weight: bold;font-size: 18px;">' + res_ol1_t + '</span>' + ' ساعت می باشد ');
//     });
    

    $('.menu_item_clickable').click(function (){

        $('html, body').animate({
            scrollTop: $($(this).attr('goTo')).offset().top
        }, 1500);
    });

$('#fuckbutton').click(function() {


    $('#price_box').slideDown();
    $('#nekh').click();
})

    function validateForm() {
        var n = document.getElementById('name').value;
        var e = document.getElementById('email').value;
        var s = document.getElementById('subject').value;
        var m = document.getElementById('message').value;
        var onlyLetters =/^[a-zA-Z\s]*$/; 
        var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        
        if(n == "" || n == null){
            document.getElementById('nameLabel').innerHTML = ('Please enter your name');
            document.getElementById('name').style.borderColor = "red";
            return false;
        }
           
      
        if (!n.match(onlyLetters)) {
            document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
            document.getElementById('name').style.borderColor = "red";
            return false;
        }
      
        if(e == "" || e == null ){
              document.getElementById('emailLabel').innerHTML = ('Please enter your email');
              document.getElementById('email').style.borderColor = "red";
              return false;
          }
      
        if (!e.match(onlyEmail)) {
            document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
            document.getElementById('email').style.borderColor = "red";
            return false;
        }
      
        if(s == "" || s == null ){
              document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
              document.getElementById('subject').style.borderColor = "red";
              return false;
          }
      
        if (!s.match(onlyLetters)) {
            document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
            document.getElementById('subject').style.borderColor = "red";
            return false;
        }
      
        if(m == "" || m == null){
            document.getElementById('messageLabel').innerHTML = ('Please enter your message');
            document.getElementById('message').style.borderColor = "red";
            return false;
        }
      
        else{
              return true;
          }
          
    }


})