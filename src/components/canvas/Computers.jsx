import { Suspense, useContext } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Preload,useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'
import { coolBoy } from "../../assets"
import { MobileContext } from "../../App"




const ComputersCanvas = ()=>{

  const isMobile = useContext(MobileContext)

 return ( isMobile ?<div className="absolute top-[35%] -left-[3%] w-full flex
 justify-center items-center"><img src={coolBoy}/></div>: 
  <Canvas
  frameloop="demand"
  shadows
  camera={{position:[20,3,5],fov:25}}
  gl={{preserveDrawingBuffer:true}}
  >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Computers isMobile={isMobile}/>
    </Suspense>
<Preload all/>
  </Canvas>
)
}

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
   <mesh>
    <hemisphereLight intensity={1} groundColor="black" />
    <pointLight intensity={3} />
    <spotLight 
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
    />
    <primitive object={computer.scene}
      scale={ isMobile ? 0.6 :0.7}
      position={isMobile ? [1,-2,-1.5]:[1,-2.80,-0.8]}
      rotation ={[-0.01,-0.2,-0.1]}

    />
   </mesh>
  )
}

export default ComputersCanvas