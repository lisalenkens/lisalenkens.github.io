$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

        function functionDisplay() {
            if (window.innerWidth > 900) {
            document.getElementById("northamericainfo").style.display = "inline-block";
            document.getElementById("polaroidusa").style.display = "inline-block";
            document.getElementById("polaroidcosta").style.display = "inline-block";
            }
        }

        function functionDisplayNone() {
            if (window.innerWidth > 900) {
            document.getElementById("northamericainfo").style.display = "none";
            document.getElementById("polaroidusa").style.display = "none";
            document.getElementById("polaroidcosta").style.display = "none";
        }
    }

        function functionDisplay1() {
            if (window.innerWidth > 900) {
            document.getElementById("southamericainfo").style.display = "inline-block";
            document.getElementById("polaroidperu").style.display = "inline-block";
            document.getElementById("polaroidbrazil").style.display = "inline-block";
        }
    }

        function functionDisplayNone1() {
            if (window.innerWidth > 900) {
            document.getElementById("southamericainfo").style.display = "none";
            document.getElementById("polaroidperu").style.display = "none";
            document.getElementById("polaroidbrazil").style.display = "none";
        }
    }

        function functionDisplay2() {
            if (window.innerWidth > 900) {
            document.getElementById("europeinfo").style.display = "inline-block";
            document.getElementById("polaroidfrance").style.display = "inline-block";
            document.getElementById("polaroiditaly").style.display = "inline-block";
        }
    }
        function functionDisplayNone2() {
            if (window.innerWidth > 900) {
            document.getElementById("europeinfo").style.display = "none";
            document.getElementById("polaroidfrance").style.display = "none";
            document.getElementById("polaroiditaly").style.display = "none";
        }
    }

        function functionDisplay3() {
            if (window.innerWidth > 900) {
            document.getElementById("africainfo").style.display = "inline-block";
            document.getElementById("polaroidmorocco").style.display = "inline-block";
            document.getElementById("polaroidsouthafrica").style.display = "inline-block";
        }
    }

        function functionDisplayNone3() {
            if (window.innerWidth > 900) {
            document.getElementById("africainfo").style.display = "none";
            document.getElementById("polaroidmorocco").style.display = "none";
            document.getElementById("polaroidsouthafrica").style.display = "none";
        }
    }


        function functionDisplay4() {
            if (window.innerWidth > 900) {
            document.getElementById("asiainfo").style.display = "inline-block";
            document.getElementById("polaroidindonesia").style.display = "inline-block";
            document.getElementById("polaroidrussia").style.display = "inline-block";
        }
    }

        function functionDisplayNone4() {
            if (window.innerWidth > 900) {
            document.getElementById("asiainfo").style.display = "none";
            document.getElementById("polaroidindonesia").style.display = "none";
            document.getElementById("polaroidrussia").style.display = "none";
        }
    }
        function functionDisplay5() {
            if (window.innerWidth > 900) {
            document.getElementById("australiainfo").style.display = "inline-block";
            document.getElementById("polaroidaustralia").style.display = "inline-block";
            document.getElementById("polaroidnewzealand").style.display = "inline-block";
        }
    }

        function functionDisplayNone5() {
            if (window.innerWidth > 900) {
            document.getElementById("australiainfo").style.display = "none";
            document.getElementById("polaroidaustralia").style.display = "none";
            document.getElementById("polaroidnewzealand").style.display = "none";
        }
    }
    
