//=== Image Preloading settings ===

const images_RUN = 15;
const images_Jump = 11;

const playerWidth = 300;
const playerHeight = 300;

//=== Player Runs ===

const playerRunImages = [];
for (let i = 1; i <= images_RUN; i++) {
    const img = new Image();
    img.src = `assets/images/Run (${i}).png`;
    playerRunImages.push(img);
}

//=== Player Jumps ===
const playerJumpImages = [];
for (let i = 1; i <= images_Jump; i++) {
    const img = new Image();
    img.src = `assets/images/Jump (${i}).png`;
    playerJumpImages.push(img);
}


//=== Canvas ===
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");
