// CesiverooStackUltra.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CesiverooStack({ steps, active, setActive }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const rect = el.getBoundingClientRect();
    let w = rect.width || 800;
    let h = rect.height || 450;

    // --- Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    el.appendChild(renderer.domElement);

    // --- Scene & Camera (Ortho)
    const scene = new THREE.Scene();
    const frustum = 12;
    let aspect = w / h;
    const camera = new THREE.OrthographicCamera(
      (-frustum * aspect) / 2,
      (frustum * aspect) / 2,
      frustum / 2,
      -frustum / 2,
      -100,
      100
    );
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 1.8, 0);
    scene.add(camera);

    // --- Group (rotation interactive)
    const group = new THREE.Group();
    scene.add(group);

    // Orientation de base (isométrique légère)
    const baseRot = {
      x: THREE.MathUtils.degToRad(26),
      y: THREE.MathUtils.degToRad(-32),
      z: 0,
    };
    group.rotation.set(baseRot.x, baseRot.y, baseRot.z);

    // --- Params stack
    const size = 6; // largeur/longueur
    const thickness = 1; // épaisseur
    const gap = 0.42; // inter-couches
    const geom = new THREE.BoxGeometry(size, thickness, size);

    // Mat de base (blanc, sans ombre)
    const white = new THREE.Color("#ffffff");
    const zinc200 = new THREE.Color("#e5e7eb");
    const zinc600 = new THREE.Color("#52525b");

    // helper label (plan haute définition, aligné face Z+)
    function makeLabelPlane(text) {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const BASE_W = 2048;
      const BASE_H = 512;

      const canvas = document.createElement("canvas");
      canvas.width = BASE_W * dpr;
      canvas.height = BASE_H * dpr;
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, BASE_W, BASE_H);

      // STYLE MINIMAL — police custom si chargée (ex: Ramidots) sinon sans-serif
      ctx.fillStyle = "darkGray"; // zinc-900
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.font = "600 150px sfregular, system-ui, sans-serif";

      const PAD_L = 100; // padding gauche
      ctx.fillText(text, PAD_L, BASE_H / 2);

      const tex = new THREE.CanvasTexture(canvas);
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      tex.needsUpdate = true;

      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        opacity: 0.98,
        toneMapped: false,
      });

      const worldW = size * 0.95; // quasi largeur du cube
      const worldH = worldW * (BASE_H / BASE_W);
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(worldW, worldH),
        mat
      );
      plane.userData.isLabel = true;
      return plane;
    }

    // --- Build stack (Step 1 en haut => Step n en bas)
    const stack = [];
    for (let i = 0; i < steps.length; i++) {
      const stepIndex = steps.length - 1 - i; // inverse l’ordre pour l’affichage

      const mat = new THREE.MeshBasicMaterial({ color: white });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(0, i * (thickness + gap), 0);

      // arêtes ultra-minces (look border-zinc-200)
      const edges = new THREE.EdgesGeometry(geom);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: zinc200, linewidth: 1 })
      );
      line.renderOrder = 1;
      mesh.add(line);

      // accent minimal (trait fin sur la tranche avant quand actif)
      const accentH = 0.06;
      const accent = new THREE.Mesh(
        new THREE.PlaneGeometry(size * 0.96, accentH),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(steps[stepIndex].color),
        })
      );
      accent.position.set(0, -thickness / 2 - 0.02, size / 2 + 0.001);
      accent.visible = false;
      mesh.add(accent);

      // label (face Z+)
      const label = makeLabelPlane(
        `Step ${steps[stepIndex].id} : ${steps[stepIndex].label}`
      );
      label.position.set(0, 0, size / 2 + 0.06);
      mesh.add(label);

      mesh.userData = {
        baseY: mesh.position.y,
        targetY: mesh.position.y,
        isActive: false,
        colorBase: white.clone(),
        colorActive: new THREE.Color(steps[stepIndex].color),
        edge: line,
        accent,
        stepId: steps[stepIndex].id,
      };

      group.add(mesh);
      stack.push(mesh);
    }

    // --- Interactions minimalistes

    // 1) Activation visuelle
    function setActiveLayer(idx) {
      stack.forEach((m, i) => {
        const activeNow = i === idx;
        m.userData.isActive = activeNow;
        m.userData.targetY = m.userData.baseY + (activeNow ? 0.14 : 0.0);
        // top color
        m.material.color.copy(
          activeNow ? m.userData.colorActive : m.userData.colorBase
        );
        // edges plus marqués si actif
        m.userData.edge.material.color.copy(activeNow ? zinc600 : zinc200);
        // accent visible si actif
        m.userData.accent.visible = activeNow;
      });
    }

    // état initial : couche du haut active
    setActiveLayer(0);
    setActive(stack[0].userData.stepId);

    // 2) Raycast click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function updateMouse(e) {
      const r = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    }
    function onClick(e) {
      updateMouse(e);
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(stack, false);
      if (hits.length) {
        const idx = stack.indexOf(hits[0].object);
        if (idx !== -1) {
          setActiveLayer(idx);
          setActive(stack[idx].userData.stepId);
          // petite impulsion d’élévation
          stack[idx].userData.targetY = stack[idx].userData.baseY + 0.24;
        }
      }
    }
    renderer.domElement.addEventListener("click", onClick);

    // 3) Molette => changer d’étape
    function onWheel(e) {
      e.preventDefault();
      const dir = Math.sign(e.deltaY);
      // quel index actif ?
      const current = stack.findIndex((m) => m.userData.isActive);
      let next = current + dir;
      if (next < 0) next = 0;
      if (next > stack.length - 1) next = stack.length - 1;
      setActiveLayer(next);
      setActive(stack[next].userData.stepId);
    }
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

    // 4) Clavier ← →
    function onKey(e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const current = stack.findIndex((m) => m.userData.isActive);
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const next = THREE.MathUtils.clamp(current + dir, 0, stack.length - 1);
      setActiveLayer(next);
      setActive(stack[next].userData.stepId);
    }
    window.addEventListener("keydown", onKey);

    // 5) Drag/hover => rotation douce du groupe (ultra-minimal)
    let isDown = false;
    let vx = 0,
      vy = 0; // vitesses cibles
    const damping = 0.08;
    let targetRotX = baseRot.x;
    let targetRotY = baseRot.y;

    function onDown(e) {
      isDown = true;
    }
    function onUp() {
      isDown = false;
    }
    function onMove(e) {
      const r = renderer.domElement.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;

      // tilt léger au survol
      const maxTilt = 0.18;
      targetRotX = baseRot.x + ny * -maxTilt;
      targetRotY = baseRot.y + nx * maxTilt;

      // si drag, on ajoute un delta plus fort
      if (isDown) {
        vx += (e.movementX || 0) * 0.0009;
        vy += (e.movementY || 0) * 0.0009;
      }
    }
    renderer.domElement.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    renderer.domElement.addEventListener("pointermove", onMove);

    // --- Animation
    let raf;
    const clock = new THREE.Clock();
    const floatAmp = 0.08;
    const floatSpeed = 2.0;

    function animate() {
      raf = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.033);
      const t = clock.getElapsedTime();

      // inertie rotation (drag)
      targetRotY += vx;
      targetRotX += -vy;
      vx *= 1 - damping;
      vy *= 1 - damping;

      group.rotation.x = THREE.MathUtils.damp(
        group.rotation.x,
        targetRotX,
        6,
        dt
      );
      group.rotation.y = THREE.MathUtils.damp(
        group.rotation.y,
        targetRotY,
        6,
        dt
      );

      // levitation + élévation sur actif
      stack.forEach((m) => {
        const float = m.userData.isActive
          ? Math.sin(t * floatSpeed) * floatAmp
          : 0;
        const target = m.userData.targetY + float;
        m.position.y = THREE.MathUtils.damp(m.position.y, target, 8, dt);
      });

      renderer.render(scene, camera);
    }
    animate();

    // --- Resize (Safari friendly)
    function onResize() {
      const r = el.getBoundingClientRect();
      w = r.width || 800;
      h = r.height || 450;
      renderer.setSize(w, h, false);

      const aspectNew = w / h;
      camera.left = (-frustum * aspectNew) / 2;
      camera.right = (frustum * aspectNew) / 2;
      camera.top = frustum / 2;
      camera.bottom = -frustum / 2;
      aspect = aspectNew;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);
    onResize();

    // --- Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointermove", onMove);
      renderer.domElement.removeEventListener("wheel", onWheel);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.dispose();
      scene.traverse((o) => {
        if (o.isMesh) {
          o.geometry?.dispose();
          if (Array.isArray(o.material))
            o.material.forEach((m) => m.dispose?.());
          else o.material?.dispose?.();
        }
      });
      el.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-[56vh] lg:h-[70vh] rounded-2xl  bg-white">
      {/* Canvas */}
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
}
