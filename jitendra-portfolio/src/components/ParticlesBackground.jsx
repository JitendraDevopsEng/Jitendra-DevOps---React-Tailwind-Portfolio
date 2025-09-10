import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 20 },
          shape: {
            type: "char",
            character: {
              value: ["ॐ"], // Hindi Om symbol
              font: "Arial",
              weight: "bold",
            },
          },
          size: { value: 24, random: true },
          color: {
            value: ["#ff6b6b", "#48dbfb", "#1dd1a1", "#f368e0", "#feca57"],
          },
          move: {
            enable: true,
            speed: 2,
            random: true,
            outModes: { default: "out" },
          },
          opacity: { value: 0.9 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 2 },
          },
        },
      }}
    />
  );
}
