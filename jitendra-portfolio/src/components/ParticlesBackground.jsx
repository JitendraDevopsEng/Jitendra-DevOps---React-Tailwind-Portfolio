import Particles from "react-tsparticles";
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
        background: {
          color: { value: "transparent" }, // Fixed here
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // background ke liye
        },
        particles: {
          number: {
            value: 25, // Om symbols kitne hone chahiye
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: "char",
            character: {
              value: ["ॐ"], // Hindi Om symbol
              font: "Arial",
              style: "",
              weight: "bold",
            },
          },
          color: {
            value: ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#f368e0"], // gradient colors
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: 20,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // mouse le jaoge to Om hat jayenge
            },
            onClick: {
              enable: true,
              mode: "push", // click karoge to naye Om aa jayenge
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 2,
            },
          },
        },
      }}
    />
  );
}
