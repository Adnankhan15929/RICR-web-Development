import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const container = useRef()
    useGSAP(() => {

      gsap.from(".box",{
        // x: 250,
        duration: 2,
        opacity:0,
        delay: 1,
        scale:0,
        rotate: 720,
      });
    },{scope:container});

  const [Xaxis, setXaxis] = useState(0);
  const [Yaxis, setYaxis] = useState(0);
  const [rota, setRotate] = useState(0);
  const randomY = gsap.utils.random(-500, 500, 100);
  const randomX = gsap.utils.random(-500, 500, 100);
  const rotate = gsap.utils.random(-360, 360, 30);
  const imgRef = useRef();

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        x: Xaxis,
        y: Yaxis,
        rotate: rota,
        duration: 0.5,
      });
    },
    { scope: "main", dependencies: [Xaxis, Yaxis, rota] },
  );
  return (
    <main>
      {/* <div  ref={container} className="container">
        <div className="circle" ></div>
        <div className="box" ></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      <img
        src="https://tse3.mm.bing.net/th/id/OIP.vRBHwgT8w686BNFCd2UfwQHaEW?pid=Api&P=0&h=180"
        ref={imgRef}
        alt=""
        onClick={() => {
          setXaxis(randomX);
          setYaxis(randomY);
          setRotate(rotate);
        }}
      />
    </main>
  );
 

  // const boxRef = useRef()

  // const {contextSafe} = useGSAP() //contextSafe for memory management


  // const rotateBox= contextSafe(()=>{
  //     gsap.to(boxRef.current,{
  //       rotate:360,
  //       duration:1,
  //     })
  //   })
  // return(

   
  //   <main>
  //     <button onClick={rotateBox}>
  //       Animate
  //     </button>
  //     <div className="box" ref={boxRef}>Box</div>
  //   </main>
  // )  
};

export default App;
