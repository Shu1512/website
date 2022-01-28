interface Model {
  map: string
  position: [number, number, number]
  args: [number, number, number]
  speed: number
  isSun: boolean
}

const Models: Model[] = [
  {
    map: '2k_sun.jpeg',
    position: [0, 0, -1],
    args: [1, 20, 20],
    speed: 0.001,
    isSun: true,
  },
  {
    map: '2k_earth_daymap.jpeg',
    position: [5, -1.5, 1],
    args: [1, 20, 20],
    speed: 0.08,
    isSun: false,
  },
  {
    map: '2k_mars.jpeg',
    position: [2, 1.5, -2],
    args: [0.5, 20, 20],
    speed: -0.01,
    isSun: false,
  },
  {
    map: '2k_uranus.jpeg',
    position: [-6, 3, -5],
    args: [2, 20, 20],
    speed: -0.007,
    isSun: false,
  },
  {
    map: '2k_mercury.jpeg',
    position: [-4.3, -1, 2],
    args: [1, 20, 20],
    speed: 0.01,
    isSun: false,
  },
  {
    map: '2k_saturn.jpeg',
    position: [-1.6, -2.5, -3],
    args: [1, 20, 20],
    speed: 0.002,
    isSun: false,
  },
  {
    map: '2k_jupiter.jpeg',
    position: [-2, 2, -9],
    args: [1, 20, 20],
    speed: 0.004,
    isSun: false,
  },
  {
    map: '2k_venus_surface.jpeg',
    position: [2.5, -3, 5],
    args: [0.5, 20, 20],
    speed: -0.009,
    isSun: false,
  },
  {
    map: '2k_neptune.jpeg',
    position: [5.5, 3, 5],
    args: [2, 20, 20],
    speed: -0.009,
    isSun: false,
  },
]

export default Models
