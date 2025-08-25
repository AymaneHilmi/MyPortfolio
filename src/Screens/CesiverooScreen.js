import { React, img, useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { CodeBlock } from "../components/ui/code-block";
import Cesiveroo from "../assets/LogoCesiveroo.png";
import Step1 from "../assets/CesiverooStep1.png";
import Step2 from "../assets/CesiverooStep2.png";
import Step3 from "../assets/CesiverooStep3.png";
import Step4 from "../assets/CesiverooStep4.png";
import Step5 from "../assets/CesiverooStep5.png";
import HomeCesiveroo from "../assets/CesiverooHome.png";
import GraphiChart from "../assets/CesiverooIpadChart.png";
import WireFrames from "../assets/CesiverooWireFrames.png";
import Architecture from "../assets/CesiverooArchitecture.png";
import NeedSchema from "../assets/NeedsAssesment.png";
import Footer from "../components/footer";
import AOS from "aos";
import { cn } from "../lib/utils";
import PropTypes from "prop-types";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export default function CesiverooScreen() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //         entries.forEach((entry) => {
  //             if (entry.isIntersecting) {
  //                 setIsVisible(true);
  //                 observer.disconnect();
  //             }
  //         });
  //     });

  //     const target = document.querySelector('#landing-page');
  //     if (target) {
  //         observer.observe(target);
  //     }

  //     return () => {
  //         if (target) {
  //             observer.unobserve(target);
  //         }
  //     };
  // }, []);

  // const handleLoad = () => {
  //     AOS.refresh();
  // };

  // const people = [
  //     {
  //         id: 1,
  //         name: "Clement Fornes",
  //         designation: "Software Engineer",
  //         image: "https://media.licdn.com/dms/image/v2/D4D03AQHJVCZM9XWnyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710451743776?e=1741824000&v=beta&t=f5LejpCDWFVriiozl44PDamTStnrmrb4AcgIrRj2NFg",
  //     },
  //     {
  //         id: 2,
  //         name: "Teo Emirot",
  //         designation: "IT Engineer",
  //         image: "https://media.licdn.com/dms/image/v2/C4D03AQHk1JDj31er8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657905707102?e=1741824000&v=beta&t=bwgN7AnDXWT9NrCR8OuUU1pU2v6KOlPtMq4yUGq5wx0",
  //     }
  // ];

  // const Disciplines = [
  //     {
  //         id: 1,
  //         name: "React Native",
  //         designation: "Library",
  //         image:
  //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s",
  //     },
  //     {
  //         id: 2,
  //         name: "Microsoft SQL",
  //         designation: "Data Base",
  //         image:
  //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcY7avil2U_k5wxxhQGXOHK5CH79g0h4R7xY4fgUhqZNuZSNlvkGcw6RYsT29ailWpV8&usqp=CAU",
  //     },
  //     {
  //         id: 3,
  //         name: "Express JS",
  //         designation: "Framework",
  //         image:
  //             "https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png",
  //     },
  //     {
  //         id: 4,
  //         name: "Mongo DB",
  //         designation: "Data Base",
  //         image:
  //             "https://www.svgrepo.com/show/331488/mongodb.svg",
  //     },
  //     {
  //         id: 5,
  //         name: "Docker",
  //         designation: "Application",
  //         image:
  //             "https://img-0.journaldunet.com/FdWFphLk__fpZlVrdZArGSxwfyg=/1500x/smart/4cfbed5bddb0467bbecad96ca168bbe3/ccmcms-jdn/11507000.jpg"

  //     }
  // ];

  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const [active, setActive] = useState(1);

  // Contenu lié aux 4 étapes
  const steps = [
    {
      id: 1,
      label: "Needs Reassesment",
      title: "1. Découvrir le besoin",
      body: "Cadrage des objectifs, personas et parcours clés pour aligner la valeur et le scope.",
      color: "#E0F7F5", // pastel turquoise très clair
    },
    {
      id: 2,
      label: "Risk Analysis",
      title: "2. Concevoir les solutions",
      body: "Wireframes, design system Cesiveroo et prototypage rapide pour valider l’ergonomie.",
      color: "#E0F7F5", // mint clair
    },
    {
      id: 3,
      label: "Architecture Diagram",
      title: "3. Construire & intégrer",
      body: "Dev modulaire, APIs, tests clés, intégration continue et petites boucles de feedback.",
      color: "#E0F7F5", // teal pastel
    },
    {
      id: 4,
      label: "Projected Timeline",
      title: "4. Lancer & apprendre",
      body: "Métriques d’usage, collecte des retours et plan d’amélioration continue.",
      color: "#E0F7F5", // turquoise accent
    },
  ];

  const activeIndex = steps.findIndex((s) => s.id === active);

  useEffect(() => {
    const el = containerRef.current;
    const w = el.clientWidth;
    const h = el.clientHeight;

    // --- Renderer (sans ombres)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    el.appendChild(renderer.domElement);

    // --- Scene
    const scene = new THREE.Scene();

    // --- Camera orthographique (style isométrique / dessin)
    const frustum = 8; // taille de la vue
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
    camera.lookAt(0, 2, 0);
    scene.add(camera);

    // Pas de lights (MeshBasicMaterial => couleurs plates, sans ombres)

    // --- Groupe principal
    const group = new THREE.Group();
    group.rotation.set(
      THREE.MathUtils.degToRad(30),
      THREE.MathUtils.degToRad(-35),
      0
    );
    scene.add(group);

    // --- Géométrie rectangulaire (pas d’arrondi)
    const size = 6;
    const thickness = 1;
    const gap = 0.42;

    const geom = new THREE.BoxGeometry(size, thickness, size);

    // Helper couleurs
    const toColor = (hex) => new THREE.Color(hex);
    const zinc200 = toColor("#e5e7eb"); // border-zinc-200
    const white = toColor("#ffffff");

    // --- Helper: PLAN label « Step N » haute résolution (net, non étiré)
    function makeLabelPlane(text, renderer) {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);

      // Canvas haute résolution + plus large pour éviter la coupe
      const BASE_W = 2048; // ↑ au lieu de 1024
      const BASE_H = 512; // ↑ au lieu de 256
      const PAD_X = 160; // padding gauche/droite en px canvas
      const PAD_Y = 80; // padding haut/bas

      const cw = BASE_W * dpr;
      const ch = BASE_H * dpr;

      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;

      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, BASE_W, BASE_H);

      ctx.fillStyle = "gray";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      // Autosize: calcule une taille de police qui rentre dans (BASE_W - 2*PAD_X)
      const family = "sfregular, sans-serif";
      const maxWidth = BASE_W - PAD_X * 2;

      // Dessin centré (avec padding vertical)
      ctx.font = `400 150px ${family}`;
      ctx.fillText(text, 100, BASE_H / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.needsUpdate = true;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        opacity: 0.98,
        toneMapped: false,
      });

      // Garde le ratio du canvas (BASE_W:BASE_H) pour éviter l’étirement
      const worldW = 5; // ← augmente si tu veux un label plus large dans la scène
      const worldH = worldW * (BASE_H / BASE_W); // respect du ratio
      const geo = new THREE.PlaneGeometry(worldW, worldH);

      const plane = new THREE.Mesh(geo, material);
      plane.userData.isLabel = true;
      plane.userData.baseScale = new THREE.Vector3(worldW, worldH, 1);
      return plane;
    }

    // Création de 4 layers (du bas vers le haut)
    const stack = [];
    for (let i = 0; i < steps.length; i++) {
      const stepIndex = steps.length - 1 - i; // inverse l’ordre des steps

      const mat = new THREE.MeshBasicMaterial({
        color: white,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      });
      const mesh = new THREE.Mesh(geom, mat);

      // place Step 1 en haut et Step 4 en bas
      mesh.position.set(0, i * (thickness + gap), 0);

      // Arêtes fines façon "border-zinc-200"
      const edges = new THREE.EdgesGeometry(geom);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: zinc200, linewidth: 1 })
      );
      line.renderOrder = 1;
      mesh.add(line);

      // Label avec l’index inversé
      const label = makeLabelPlane(
        `Step ${steps[stepIndex].id} : ${steps[stepIndex].label}`,
        renderer
      );
      label.position.set(0, 0, size / 2 + 0.06);
      mesh.add(label);

      mesh.userData = {
        baseY: mesh.position.y,
        targetY: mesh.position.y,
        color: white.clone(),
        targetColor: white.clone(),
        isActive: false,
        phase: Math.random() * Math.PI * 2, // pour l'effet de lévitation
        stepId: steps[stepIndex].id,
      };

      group.add(mesh);
      stack.push(mesh);
    }

    // Interaction (clic)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function setActiveLayer(idx) {
      stack.forEach((m, i) => {
        const active = i === idx;
        m.userData.isActive = active;
        m.userData.targetY = m.userData.baseY + (active ? 0.1 : 0.0);

        const targetHex = active ? steps[i].color : "#ffffff";
        m.userData.targetColor.set(targetHex);

        // // feedback label
        // m.children.forEach((child) => {
        //   if (child.userData?.isLabel) {
        //     if (child.material) child.material.opacity = active ? 1.0 : 0.95;
        //     const s = active ? 1.08 : 1.0; // scale uniforme (pas d’étirement)
        //     const base = child.userData.baseScale;
        //     child.scale.set(base.x * s, base.y * s, 1);
        //   }
        // });
      });
    }
    // État initial : le top actif
    setActiveLayer(3);

    function pointerPos(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }
    function onPointerMove(e) {
      pointerPos(e);
    }
    function onClick() {
      raycaster.setFromCamera(mouse, camera);
      const intersections = raycaster.intersectObjects(stack, false);
      if (intersections.length) {
        const idx = stack.indexOf(intersections[0].object);
        if (idx !== -1) {
          setActiveLayer(idx);
          setActive(idx + 1);
        }
      }
    }
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("click", onClick);

    // Animation (lévitation subtile)
    let raf;
    const clock = new THREE.Clock();
    const floatAmp = 0.08;
    const floatSpeed = 2.0;

    function animate() {
      raf = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.033);
      const t = clock.getElapsedTime();

      stack.forEach((m) => {
        const float = m.userData.isActive
          ? Math.sin(t * floatSpeed + m.userData.phase) * floatAmp
          : 0;
        const target = m.userData.targetY + float;

        m.position.y = THREE.MathUtils.damp(m.position.y, target, 8, dt);
        m.material.color.lerp(m.userData.targetColor, 1 - Math.exp(-10 * dt));
      });

      renderer.render(scene, camera);
    }
    animate();

    // Resize
    function onResize() {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      renderer.setSize(nw, nh, false);

      const aspectNew = nw / nh;
      camera.left = (-frustum * aspectNew) / 2;
      camera.right = (frustum * aspectNew) / 2;
      camera.top = frustum / 2;
      camera.bottom = -frustum / 2;
      aspect = aspectNew;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material))
            obj.material.forEach((m) => m.dispose?.());
          else obj.material?.dispose?.();
        }
      });
      el.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // init once

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 mt-32 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column — Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Process Highlights
            </div>

            <h1 className="text-3xl font-sfbold tracking-tight text-darkGray md:text-5xl">
              Cesi<span className="text-[#20CFBD]">veroo</span> Project
            </h1>

            <div className="prose prose-zinc max-w-none text-darkGray text-justify">
              <p>
                This project was part of an academic assignment during my time
                in engineering school. The challenge was to create an Uber-like
                application with different types of users: customers,
                restaurants, delivery personnel, third-party developers, and
                service teams, all within 4 weeks.
              </p>
              <p>
                This solution involves managing asynchronous communication, load
                balancing, microservice integration, and real-time updates. The
                project also includes handling ambiguous requirements and
                working with limited prior experience, making it a practical
                exercise in problem-solving and collaboration within our team of
                3 developers. 3 very cool developers.
              </p>
            </div>
          </div>

          {/* Right column — Image "incrustée" on white bg */}
          <div className="relative">
            {/* TODO Proposition de gpt, voir si je laisse ou pas ????  */}
            {/* Subtle backdrop elements to blend the image into white site bg */}
            {/* <div
              className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-100 to-transparent blur-xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-tr from-zinc-100 to-transparent blur-xl"
              aria-hidden="true"
            /> */}

            <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl ">
              {/* Replace the src below with your image path */}
              <img
                src={HomeCesiveroo}
                alt="Cesiveroo illustration with shopping bags and spheres"
                className="block h-auto w-full object-contain "
                loading="eager"
                decoding="async"
              />

              {/* A soft inner shadow to "embed" it into the page */}
            </figure>
          </div>
        </div>
      </section>

      {/*  Détails du projet */}
      <section
        className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
        aria-label="Détails du projet Cesiveroo"
      >
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Aperçu du projet
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Détails & Objectifs
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-3xl font-semibold text-gray-900">4</p>
            <p className="text-xs text-gray-500 mt-1">semaines</p>
          </div>
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-3xl font-semibold text-gray-900">3</p>
            <p className="text-xs text-gray-500 mt-1">développeurs</p>
          </div>
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-sm font-medium text-gray-900">Rôle</p>
            <p className="text-xs text-gray-500 mt-1">Lead Front & UX</p>
          </div>
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-sm font-medium text-gray-900">Livrables</p>
            <p className="text-xs text-gray-500 mt-1">MVP, docs, démo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900">Objectifs</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Concevoir une expérience fluide inspirée de Deliveroo, adaptée
                  au contexte académique.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Structurer une architecture <em>microservices</em> simple,
                  déployable en conteneurs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Livrer un MVP testable avec une base de données et un tableau
                  de bord.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Stack & outils
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React / React Native",
                "Express.js",
                "MongoDB",
                "MS SQL",
                "Docker",
                "TailwindCSS",
                "Playwright (tests)",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Focus: performance, accessibilité, DX propre, CI simplifiée.
            </p>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-lg font-semibold text-gray-900 text-center">
            Processus en 5 étapes
          </h3>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-6">
            {[
              {
                img: Step1,
                title: "Research",
                desc: "Needs Assessment\nStudy of Solutions",
              },
              {
                img: Step2,
                title: "Wireframes & UI",
                desc: "Mockups\nUX/UI design",
              },
              {
                img: Step3,
                title: "Development",
                desc: "Architecture Setup\nBackend & Frontend",
              },
              {
                img: Step4,
                title: "Dev & Tests",
                desc: "Integration, Tests",
              },
              {
                img: Step5,
                title: "Documentation",
                desc: "README,\n Documentation",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={step.img}
                  alt={`Step ${idx + 1}`}
                  className="w-24 h-24 object-contain"
                />
                <p className="mt-4 text-sm font-medium text-gray-900">
                  {step.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-center items-center px-6 py-12">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Research
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-sfbold tracking-tight text-darkGray">
              Needs Assessment
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Panneau texte lié à l’étape active */}
            <div className="self-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                How it works (style dessin)
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                Pile 3D minimaliste — sans ombres
              </h2>
              <p className="mt-3 text-zinc-600">
                Arêtes <code>border-zinc-200</code>, angles vifs, couleurs
                plates. Cliquez un layer pour le mettre en avant (léger lift) et
                changer le contenu.
              </p>

              <div className="mt-8 rounded-none border border-zinc-200 p-6 sm:p-8">
                <div className="text-xs text-zinc-600">
                  Étape <span className="font-medium">{active}</span> / 4 —{" "}
                  {steps[activeIndex].label}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                  {steps[activeIndex].title}
                </h3>
                <p className="mt-2 text-zinc-700">{steps[activeIndex].body}</p>
              </div>
            </div>
            {/* Canvas container  */}
            <div ref={containerRef} />
          </div>
        </section>

        {/* <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-2xl font-sfbold text-black ">
                  Design <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Graphic Chart
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={WireFrames}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div> */}
      </section>
    </>
  );
}
