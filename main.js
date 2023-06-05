var minuterlabel = document.getElementById('minuter');
var secondslabel = document.getElementById('seconds');
var totalSeconds =0;
        setInterval(setTime,1000);
        function setTime() {
            ++totalSeconds;
            secondslabel.innerHTML = pad(totalSeconds%60);
            minuterlabel.innerHTML = pad(parseInt(totalSeconds/60));
        }
        function pad(number) {
            var s = number + ``;
            if (s.length < 2) {
                return    `0` + s;
            }
            else {
                return s;
            }
        }
