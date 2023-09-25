export const getParticleOptions = (speed) => ({
  background: {
    color: {
      value: "#000022",
    },
  },
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "slow",
      },
      onDiv: {
        selectors: ["#omega-title", "h2", "h1", "p"],
        enable: true,
        mode: "bounce",
        type: "rectangle",
      },
      onHover: {
        enable: true,
        mode: "slow",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      bounce: {
        distance: 30,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      slow: {
        factor: 2,
        radius: 100,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: speed === 0 ? "none" : "down",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: speed === 0 ? 1 : 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
  smooth: true,

  //   emitters: [
  //     {
  //       autoPlay: "false",
  //       direction: "down",
  //       name: "scrollUp",
  //       position: {
  //         x: 50,
  //         y: 0,
  //       },
  //       size: {
  //         width: 100,
  //         height: 0,
  //       },
  //       rate: {
  //         quantity: 10,
  //         delay: 0.1,
  //       },
  //     },
  //   ],
});
// https://codepen.io/matteobruni/pen/mdVdPKj
//controlling the particles https://codepen.io/matteobruni/pen/vYLjrOg

export const option2 = () => ({
  name: "Absorbers",
  particles: {
    number: {
      value: 300,
    },
    collisions: {
      enable: true,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
    },
    size: {
      value: {
        min: 1,
        max: 2,
      },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      straight: true,
      warp: true,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 10,
      },
    },
  },
  absorbers: {
    draggable: true,
    size: {
      value: {
        min: 5,
        max: 10,
      },
      limit: 10,
      density: 100,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
  background: {
    color: "#0d47a1",
  },
});
