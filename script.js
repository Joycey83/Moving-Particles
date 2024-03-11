const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // canvas rendering context 2d
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

// Add color gradient
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(1, "white");
gradient.addColorStop(0.6, "blue");
gradient.addColorStop(0, "green");
ctx.fillStyle = gradient;

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
  draw(context) {
    // context.fillStyle = "hsl(" + this.x * 0.5 + ", 100%, 50%)";
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
  }

  update() {
    this.x += this.vx;
    if (this.x > this.effect.width - this.radius || this.x < this.radius)
      this.vx *= -1;

    this.x += this.vy;
    if (this.y > this.effect.height - this.radius || this.y < this.radius)
      this.vy *= -1;

    this.y += this.vy;
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.numOfParticles = 250;
    this.createParticles();
  }
  createParticles() {
    for (let i = 0; i < this.numOfParticles; i++) {
      this.particles.push(new Particle(this));
    }
  }
  handleParticle(context) {
    this.particles.forEach((particle) => {
      particle.draw(context);
      particle.update();
    });
  }
}
const effect = new Effect(canvas);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // will call handleParticle from animate loop
  effect.handleParticle(ctx);
  requestAnimationFrame(animate);
}

animate();
