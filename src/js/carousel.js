var img1 = new Image();
var img2 = new Image();
var img3 = new Image();

function next() {
    document.getElementById('next-btn').classList.toggle('show');
}

var preBtn = document.getElementById('pre-btn');

preBtn.addEventListener('click', function () {

    if (preBtn) {
        next();
    }
    
});
