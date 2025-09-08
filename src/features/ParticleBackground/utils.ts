import { IOptions, RecursivePartial } from '@tsparticles/engine';

export const getParticleOptions = (): RecursivePartial<IOptions> => ({
  background: {
    color: {
      value: '#000022',
    },
  },
  fpsLimit: 12,
  interactivity: {
    detectsOn: 'window',
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
      value: '#ffffff',
    },
    links: {
      color: '#ADF5FF',
      distance: 160,
      enable: true,
      opacity: 0.5,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.1,
      },
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: {
        mode: 'delete',
        value: 0,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 0.7,
    },
  },
  detectRetina: true,
  smooth: true,
});
// https://codepen.io/matteobruni/pen/mdVdPKj
//controlling the particles https://codepen.io/matteobruni/pen/vYLjrOg
