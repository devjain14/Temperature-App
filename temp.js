        function loadDemo() {
            var Latitude = document.getElementById("lat").value;
            var Longitude = document.getElementById("long").value;
            var apiKey = 'ed78669d8b1dd4bb0ddcc31f7bf8374f';
            var temperature = 0;
            console.log(Latitude);
            console.log(Longitude);
            $.ajax({
                url: "https://api.darksky.net/forecast/" + apiKey + "/" + Latitude + "," + Longitude,
                success: function(result) {
                    console.log("success");
                    temperature = JSON.stringify(result.currently.temperature);
                    $("#temp").html(temperature);
                    var s = document.getElementById("ans");
                    s.value = temperature;
                }
            });
        };

        function celcius() {
            a = document.getElementById('ans').value;
            console.log((a));
            var cel = (5 * (a - 32)) / 9;
            $("#temp").html(cel);
            $("#temp").append="ger";
        };
        function fahren() {
            a = document.getElementById('ans').value;
            console.log((a));
            $("#temp").html(a);
        };

