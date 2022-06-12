
document.addEventListener('keydown', function(event){
    switch (event.code){
        case "KeyA":
            console.log("The 'A' key is pressed.");
            let audioA=new Audio();
            audioA.src='audio/A.mp3';
            audioA.play();
            break;
        case "KeyS":
            console.log("The 'S' key is pressed.");
            let audioS = new Audio();
            audioS.src='audio/S.mp3';
            audioS.play();
            break;
        case "KeyD":
            console.log("The 'D' key is pressed.");
            let audioD = new Audio();
            audioD.src='audio/D.mp3';
            audioD.play();
            break;
        case "KeyF":
            console.log("The 'F' key is pressed.");
            let audioF = new Audio();
            audioF.src='audio/F.mp3';
            audioF.play();
            break;
        case "KeyG":
            console.log("The 'G' key is pressed.");
            let audioG = new Audio();
            audioG.src='audio/G.mp3';
            audioG.play();
            break;
        case "KeyH":
            console.log("The 'H' key is pressed.");
            let audioH = new Audio();
            audioH.src='audio/H.mp3';
            audioH.play();
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed.");
            let audioJ = new Audio();
            audioJ.src='audio/J.mp3';
            audioJ.play();
            break;
        case "KeyW":
            console.log("The 'W' key is pressed.");
            let audioW = new Audio();
            audioW.src='audio/W.mp3';
            audioW.play();
            break;
        case "KeyE":
            console.log("The 'E' key is pressed.");
            let audioE = new Audio();
            audioE.src='audio/E.mp3';
            audioE.play();
            break;
        case "KeyT":
            console.log("The 'T' key is pressed.");
            let audioT = new Audio();
            audioT.src='audio/T.mp3';
            audioT.play();
            break;
        case "KeyY":
            console.log("The 'Y' key is pressed.");
            let audioY = new Audio();
            audioY.src='audio/Y.mp3';
            audioY.play();
            break;
        case "KeyU":
            console.log("The 'U' key is pressed.");
            let audioU = new Audio();
            audioU.src='audio/U.mp3';
            audioU.play();
            break;
        default:
            console.log("Wrong key!");
    }
});