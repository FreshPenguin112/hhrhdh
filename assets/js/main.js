window.onbeforeunload=function(){return '';};
document.getElementById("submit").onclick = function() {
    var input = document.getElementById('urlInput');
    var submit = document.getElementById('submit');
    var particl = document.getElementById('tsparticles');
    var ifr = document.getElementById('ifr');
    var cmp = document.getElementById('compatibilityBox');
    input.visibility = 'hidden';
    submit.visibility = 'hidden';
    particl.remove();
    var inputVal;
                inputVal = input.value;
    ifr.visibility = 'visible';
    ifr.style = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;';
   ifr.src = "https://api.allorigins.win/raw?url=" + inputVal;
};
