const ele = document.getElementById("ele1")
ele.addEventListener("click", function(event, color = 'green') {
    event.target.style.backgroundColor = 'yellow';
});
