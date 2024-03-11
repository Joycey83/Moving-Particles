const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // canvas rendering context 2d
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

class Particle {
  constructor(effect) {
    this.effect = effect;
    this.radius = Math.random() * 40 + 2;
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.numOfParticles = 20;
  }
  createParticles() {
    for (let i = 0; i < this.numOfParticles; i++) {
      this.particles.push(new Particle(this));
    }
  }
}

function animate() {}
