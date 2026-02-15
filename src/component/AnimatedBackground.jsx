function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 170 }); // Rayon un peu plus large pour plus de douceur

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    const PARTICLE_COUNT = 80; // Un peu moins de points pour ne pas surcharger la vue
    const MAX_DIST = 140;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Mouvement plus lent pour la lisibilité
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.2 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouseRef.current.x !== null) {
          let dx = mouseRef.current.x - this.x;
          let dy = mouseRef.current.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseRef.current.radius) {
            let force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            this.x -= (dx / distance) * force * 3;
            this.y -= (dy / distance) * force * 3;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 212, 191, 0.3)"; // Teal plus discret
        ctx.fill();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            // Opacité très faible pour que les lignes soient suggestives et non distrayantes
            ctx.strokeStyle = `rgba(45, 212, 191, ${(1 - dist / MAX_DIST) * 0.08})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none"
      style={{ background: "radial-gradient(circle at 50% 50%, #111827 0%, #0b1120 50%, #030712 100%)" }}
    />
  );
}