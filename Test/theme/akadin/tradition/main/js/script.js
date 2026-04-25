function setMymargin() {
    const output = document.querySelector(".output");
    output.innerHTML = `scrollTop: ${window.scrollY} <br>
                        scrollLeft: ${window.scrollX} <br>
                        `;
}

function playAudio() {
    $("#disc").animate({
            "margin-left": "7px",
            transform: "rotate(360deg)",
        },
        "slow"
    );
    audio.play();
}

function stopAudio() {
    $("#disc").animate({
            "margin-left": "60px",
            transform: "rotate(360deg)",
        },
        "slow"
    );
    audio.pause();
}

function checkMarginLeft() {
    var p = document.getElementById("disc");
    var style = p.currentStyle || window.getComputedStyle(p);
    return style;
}

function playAudioFirstly(position) {
    var style = checkMarginLeft();
    var y = window.scrollY;
    if (flag == 0 && y >= position && style.marginLeft.toString() == "60px") {
        flag = 1;
        $("#disc").animate({
                "margin-left": "7px",
                transform: "rotate(360deg)",
            },
            "slow"
        );

        setTimeout(function() {
            audio.play();
        }, 6);
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // Ketika tombol "Buka Undangan" diklik , sembunyikan filterig
    var filterig = document.getElementById('filterig');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            filterig.style.display = 'block';
        } else {
            filterig.style.display = 'none';
        }
    });


    //  Mute and play once the page is loaded
    var sound = document.getElementById('sound');
    // Unmute and play once the page is loaded
    sound.muted = false;
    sound.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
    });

});

// Ketika tombol "Buka Undangan" diklik
document.getElementById("bukaUndangan").addEventListener("click", function() {
    // Sembunyikan pesan selamat datang
    $("#welcomeMessage").addClass("animate__animated animate__fadeOutUp").css("animation-duration", "12s");
    $("#content-of-main").fadeIn(10000); // 5 detik
    $("#image-pernikahan").fadeIn(10000);
    $("#title-pernikahan").fadeIn(10000);
    $("#date-wedding-1").fadeIn(10000);
    $("#loversname").fadeIn(10000);
    setTimeout(function() {
        document.getElementById("welcomeMessage").style.display = "none";
    }, 10000);
    playAudioFirstly(0);
    runIntroPage();
});

// document ready,scroll,ets
$(document).ready(function() {
    $("#disc").click(function() {
        var style = checkMarginLeft();
        if (style.marginLeft.toString() == "60px") {
            playAudio();
        } else {
            stopAudio();
        }
    });
});

function runIntroPage() {
    $("#ayat").fadeIn(100);
    $("#dove").fadeIn(2500);
    // $("#tanda-1").slideDown(2500);
    $("#tanda-1").addClass("animate__animated animate__fadeInUp")
     .css("animation-duration", "10s");
    $("#tanda-2").addClass("animate__animated animate__fadeInUp")
    .css("animation-duration", "10s");
    $("#tanda-3").addClass("animate__animated animate__fadeInUp")
    .css("animation-duration", "10s");
    // Jalankan aksi ini setelah 2500 milidetik
    setTimeout(function() {
        list_feature_sequence = list_feature_sequence.filter(item => item !== 'intro');
        console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
    }, 2500);

}

function checkViewport(elementid) {
    var rect = document.getElementById(elementid).getBoundingClientRect();
    // Mengecek apakah elemen tersebut sedang terlihat dalam viewport
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        // Logika yang akan dijalankan jika 'profil-2' ada dalam viewport
        // alert("Elemen profil-2 sedang dalam viewport");
        return true;
    }
    else{
        return false;
    }
}

$(document).scroll(function() {

    // setMymargin();
    var y = window.scrollY;

    if (list_feature_sequence[0] === 'profil-1') {
        $("#foto-profil-1").addClass("animate__animated animate__backInDown").css("animation-duration", "2s");
        // $("#image-and").fadeIn(10000);
        $("#nickname-profil-1").addClass("animate__animated animate__backInUp").css("animation-duration", "2s");

        $("#hr-1").addClass("animate__animated animate__backInUp").css("animation-duration", "3s");
        $("#fullname-profil-1").addClass("animate__animated animate__backInUp").css("animation-duration", "3s");
        $("#family-profil-1").addClass("animate__animated animate__backInUp").css("animation-duration", "3s");

        console.log(list_feature_sequence[0]);

        // Jalankan aksi ini setelah 2500 milidetik
        setTimeout(function() {
            list_feature_sequence = list_feature_sequence.filter(item => item !== 'profil-1');
            console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
        }, 2500);
    // }
    // if (list_feature_sequence[0] === 'profil-2') {
        $("#nickname-profil-2").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");
        $("#hr-2").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");
        $("#fullname-profil-2").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");
        $("#family-profil-2").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");
        $("#foto-profil-2").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");

        console.log(list_feature_sequence[0]);

        // if(checkViewport('foto-profil-2') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'profil-2');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        // }

    }

    if (list_feature_sequence[0] === 'timeline') {
        $("#ring").addClass("animate__animated animate__bounceIn").css("animation-duration", "12s");
        $("#waktu-tempat").addClass("animate__animated animate__bounceIn").css("animation-duration", "12s");

        $("#card-time").addClass("animate__animated animate__bounceIn").css("animation-duration", "12s");
        $("#days-card,#hours-card,#minutes-card,#seconds-card").addClass("animate__animated animate__bounceIn").css("animation-duration", "2s");
        
        $("#ayat-2").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");
        $("#ayat-pasangan-1").addClass("animate__animated animate__backInUp").css("animation-duration", "6s");

        $("#envelope").addClass("animate__animated animate__fadeInDown").css("animation-duration", "6s");
        $("#event-description").addClass("animate__animated animate__fadeInUp").css("animation-duration", "6s");

        $("#weddinglokasidetail1").addClass("animate__animated animate__fadeInDown").css("animation-duration", "12s");
        $("#weddinglokasidetail2").addClass("animate__animated animate__fadeInUp").css("animation-duration", "12s");
        $("#weddinglokasidetail3").addClass("animate__animated animate__fadeInUp").css("animation-duration", "12s");
        
        console.log(list_feature_sequence[0]);

        if(checkViewport('weddinglokasidetail3') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'timeline');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        }
    }

    // // batas

    if (list_feature_sequence[0] === 'photo-prewed') {
        $("#bucket").fadeIn(1250);
        $("#momen").slideDown(1250);
        $("#bahagia-kami").slideDown(750);
        $("#pernyataan-prewed").slideDown(500);
        $("#photo-prewed").slideDown(5000, function() {
             // Callback function jika diperlukan setelah slideDown selesai
            // Fungsi ini tetap berjalan ketika animasi selesai
            console.log('Animasi photo-prewed selesai.');
        });

        if(checkViewport('photo-prewed') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'photo-prewed');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        }

    }

    if (list_feature_sequence[0] === 'live-streaming') {
        $("#card-live-streaming").addClass("animate__animated animate__bounce").css("animation-duration", "2s");

        console.log(list_feature_sequence[0]);
        // if(checkViewport('live-streaming') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'live-streaming');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        // }
    }
    if (list_feature_sequence[0] === 'our-story') {
        $("#our-story").fadeIn(3000, function() {
            // Callback function jika diperlukan setelah fadeIn selesai
            // Fungsi ini tetap berjalan ketika animasi selesai
            console.log('Animasi our-story selesai.');
        });

        $("#card-our-story-1").addClass("animate__animated animate__rotateIn").css("animation-duration", "3s");
        $("#card-our-story-2").addClass("animate__animated animate__rotateIn").css("animation-duration", "7s");
        $("#card-our-story-3").addClass("animate__animated animate__rotateIn").css("animation-duration", "9s");

        console.log(list_feature_sequence[0]);

        if(checkViewport('card-our-story-3') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'our-story');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        }
    }

    if (list_feature_sequence[0] === 'ucapan-doa') {
        $("#ucapan-doa").fadeIn(3000, function() {
            // Callback function jika diperlukan setelah fadeIn selesai
            // Fungsi ini tetap berjalan ketika animasi selesai
            console.log('Animasi ucapan-doa selesai.');
        });

        console.log(list_feature_sequence[0]);

        // if(checkViewport('ucapan-doa') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'ucapan-doa');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        // }
    }
    if (list_feature_sequence[0] === 'wedding-gift'){
        $("#wedding-gift").slideDown(10000, function() {
            // Callback function jika diperlukan setelah fadeIn selesai
            // Fungsi ini tetap berjalan ketika animasi selesai
            console.log('Animasi wedding-gift selesai.');
        });

        if(checkViewport('wedding-gift') === true){
            // Jalankan aksi ini setelah 2500 milidetik
            setTimeout(function() {
                list_feature_sequence = list_feature_sequence.filter(item => item !== 'wedding-gift');
                console.log(list_feature_sequence[0]); // Menampilkan item berikutnya di console
            }, 6);
        }

        $("#bear").fadeIn(5000);
        $("#thanks-you").css({
            display: 'block',
            fontSize: '1px',
            opacity: 0 // Mulai dari keadaan transparan
        }).animate({
            fontSize: '14px', // Akhiri dengan skala normal
            opacity: 1 // Akhiri dengan keadaan penuh terlihat
        }, 5000); // Durasi animasi dalam milidetik (20 detik)
        $("#transfer-rekening").fadeIn(5000);
        $("#kirim-kado").fadeIn(5000);
        $("#konfirmasi").fadeIn(5000);
    }
});

// copyright akad.in 