const Light = () => {
  return (
    <>
      <ambientLight color={0x444444} />
      <pointLight
        color={0xffffff}
        intensity={0.3}
        distance={0}
        position={[0, 0, 0]}
      />
    </>
  )
}

export default Light
