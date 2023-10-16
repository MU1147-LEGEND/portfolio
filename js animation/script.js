function animation(){
    const container = getComputedStyle(document.getElementById("container"));
    const animate = getComputedStyle(document.getElementById("animate"));
    const animateAlt = document.getElementById("animate");

    let animateWidth = animate.width.replace("px","");
    let animateHeight = animate.height.replace("px","");
    let containerWidth = container.width.replace("px","");
    let containerHeight = container.height.replace("px","");
    let position = 0;

        function frame(){
            if(containerHeight>containerWidth){
                if(position < containerHeight - animateWidth){
                    position++;
                    animateAlt.style.top = position + 'px';
                    animateAlt.style.left = 20 + 'px';
                }
                else{
                    clearInterval(interval);
                }
            }
            else{
                if(position < containerWidth - animateWidth){
                    position++;
                    animateAlt.style.top = 20 + 'px';
                    animateAlt.style.left = position + 'px';
                }
                else{
                    clearInterval(interval);
                }
            }
        }
        let interval = setInterval(frame,2);

}

function changeWidth(){
    document.getElementById("container").style.height = 300 + "px";
    document.getElementById("container").style.width = 450 + "px";
    document.getElementById("animate").style.top = 0 + "px";
    document.getElementById("animate").style.left = 0 + "px";
}

function changeHeight(){
    document.getElementById("container").style.width = 300 + "px";
    document.getElementById("container").style.height = 450 + "px";
    document.getElementById("animate").style.top = 0 + "px";
    document.getElementById("animate").style.left = 0 + "px";
}