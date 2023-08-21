import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  AssetManagerBasicPopupPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
  Scene,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";
gsap.registerPlugin(ScrollTrigger)
export default function WebGiViewer() {
  const canvasRef = useRef(null);
  const memoizedScrollAnimation= useCallback(
    (position,target,onUpdate)=>{
        if(position&&target&&onUpdate){
          scrollAnimation(position,target,onUpdate)
        }
    },[])
  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    // Add a popup(in HTML) with download progress when any asset is downloading.
    // await viewer.addPlugin(AssetManagerBasicPopupPlugin);

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    await viewer.addPlugin(BloomPlugin);
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await manager.addFromPath("scene-black.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate=()=>{
      needsUpdate=true;
      viewer.setDirty()
    }
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memoizedScrollAnimation(position,target,onUpdate)
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);
  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
}
