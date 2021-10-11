setInterval(function () {
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = "AM";
    if (hr > 12) {
        day = "PM";
    }
    if (hr == 0) {
        hr = 12;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    // Color Change ///  :(

    if (sec == 15) {
        document.body.style.backgroundColor = "red";
        document.body.style.animation = "250ms";

        // document.body.style.animation = "250ms";

        // $(document).ready(function () {
        //     setInterval(function () {
        //         $('body').animate({ backgroundColor: 'red' }, 300)
        //     }, 1000);
        // });
    } else if (sec == 30) {
        document.body.style.backgroundColor = "blue";
        document.body.style.transition = "250ms";

        // $("body").css({ "color": "blue" }, { "transition": "0.25" });
        // document.body.style.transition = "250ms";
        // document.body.style.animation = "250ms";

        // $(document).ready(function () {
        //     setInterval(function () {
        //         $('body').animate({ backgroundColor: 'blue' }, 300)
        //     }, 1000);
        // });
    } else if (sec == 45) {
        document.body.style.backgroundColor = "yellow";
        document.body.style.transition = "250ms";
        // document.body.style.animation = "250ms";

    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.transition = "2000ms";
        // document.body.style.animation = "250ms";
    }


    //
    checkNum(sec)



    clock.textContent = hr + ":" + min + ":" + sec + " " + day;
}, 1000);



function checkNum(n) {
    if (n % 5 === 0) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                var url = data.data.image_url;
                document.getElementById("pic").setAttribute("src", url)

                // console.log(url);
            }
        };
        xhttp.open("GET", "http://api.giphy.com/v1/gifs/random?api_key=7b0DPjBxrw63UUJmTlNytjijMQOsOeT4", true);
        xhttp.send();
    }
}

















