const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // canvas rendering context 2d
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

class Particle {
  constructor() {}
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
}

function animate() {}
