type Model = {
  map: string
  position: [number, number, number]
  args: [number, number, number]
  speed: number
  isSun: boolean
}

const Models: Model[] = [
  {
    map: 'textures/2k_sun-min.jpeg',
    position: [0, 0, -1],
    args: [1, 20, 20],
    speed: 0.001,
    isSun: true,
  },
  {
    map: 'textures/2k_earth_daymap-min.jpeg',
    position: [5, -1.5, 1],
    args: [1, 20, 20],
    speed: 0.08,
    isSun: false,
  },
  {
    map: 'textures/2k_mars-min.jpeg',
    position: [2, 1.5, -2],
    args: [0.5, 20, 20],
    speed: -0.01,
    isSun: false,
  },
  {
    map: 'textures/2k_uranus-min.jpeg',
    position: [-6, 3, -5],
    args: [2, 20, 20],
    speed: -0.007,
    isSun: false,
  },
  {
    map: 'textures/2k_mercury-min.jpeg',
    position: [-4.3, -1, 2],
    args: [1, 20, 20],
    speed: 0.01,
    isSun: false,
  },
  {
    map: 'textures/2k_saturn-min.jpeg',
    position: [-1.6, -2.5, -3],
    args: [1, 20, 20],
    speed: 0.002,
    isSun: false,
  },
  {
    map: 'textures/2k_jupiter-min.jpeg',
    position: [-2, 2, -9],
    args: [1, 20, 20],
    speed: 0.004,
    isSun: false,
  },
  {
    map: 'textures/2k_venus_surface-min.jpeg',
    position: [2.5, -3, 5],
    args: [0.5, 20, 20],
    speed: -0.009,
    isSun: false,
  },
  {
    map: 'textures/2k_neptune-min.jpeg',
    position: [5.5, 3, 5],
    args: [2, 20, 20],
    speed: -0.009,
    isSun: false,
  },
]

export default Models
