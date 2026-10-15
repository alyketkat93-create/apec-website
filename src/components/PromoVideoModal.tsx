"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  ChevronRight,
  ShieldCheck,
  Building,
  Cpu,
  Layers,
  Award,
  Clock,
  Sparkles,
} from "lucide-react";

interface Scene {
  id: number;
  actTitle: string;
  timestamp: string;
  startSec: number;
  endSec: number;
  headline: string;
  tagline: string;
  voiceover: string;
  image: string;
  hudMetrics: { label: string; value: string }[];
  accentColor: string;
}

const scenes: Scene[] = [
  {
    id: 1,
    actTitle: "ACT I · THE GENESIS & POWER",
    timestamp: "00:00 - 00:20",
    startSec: 0,
    endSec: 20,
    headline: "ENGINEERING THE FUTURE. BUILDING WITH CONFIDENCE.",
    tagline: "Class 1 Accredited Contractor · 35+ Years Engineering Heritage",
    voiceover:
      "In a world of visionary architecture, ambition demands uncompromising precision. Welcome to Elite. Built upon 35 years of engineering mastery across four continents, Elite stands as an officially certified MOMRAH Class-1 contractor, engineering the defining landmarks of Saudi Arabia.",
    image: "/images/hero/hero-construction.jpg",
    hudMetrics: [
      { label: "ACCREDITATION", value: "MOMRAH CLASS 1" },
      { label: "HERITAGE", value: "35+ YEARS" },
      { label: "COMMERCIAL REG", value: "CR: 1010943353" },
      { label: "HEADQUARTERS", value: "AL-NAKHEEL TOWER, RIYADH" },
    ],
    accentColor: "from-emerald-500/30 to-transparent",
  },
  {
    id: 2,
    actTitle: "ACT II · TURNKEY ENGINEERING DISCIPLINES",
    timestamp: "00:20 - 00:45",
    startSec: 20,
    endSec: 45,
    headline: "THERMODYNAMIC MASTERY & LIFE SAFETY INFRASTRUCTURE",
    tagline: "Chilled Water Mega-Plants · NFPA Fire Protection · MV/LV Substation Power",
    voiceover:
      "When desert temperatures surpass 50 degrees Celsius, our thermodynamic engineering delivers unmatched climate control. From central chilled water pumping stations to NFPA-certified fire pump skids and medium-voltage substations, Elite provides seamless, turnkey electromechanical execution.",
    image: "/assets/hvac-800h-d-wOeyQt.jpg",
    hudMetrics: [
      { label: "COOLING", value: "CHILLED WATER PLANTS" },
      { label: "FIRE SAFETY", value: "UL/FM PUMP SKIDS" },
      { label: "POWER", value: "MV/LV SUBSTATIONS" },
      { label: "STANDARDS", value: "SBC · NFPA · SMACNA" },
    ],
    accentColor: "from-cyan-500/30 to-transparent",
  },
  {
    id: 3,
    actTitle: "ACT III · ICONIC FLAGSHIP PORTFOLIO",
    timestamp: "00:45 - 01:15",
    startSec: 45,
    endSec: 75,
    headline: "SUPERTALL TOWERS, RETAIL PLAZAS & HERITAGE LANDMARKS",
    tagline: "The Gate Tower (170m) · Al-Mounsiya Plaza · Diriyah Cultural Preservation",
    voiceover:
      "Our footprint defines landmark skylines. The Gate Tower—a 44-story coastal skyscraper requiring 170 meters of vertical hydraulic mastery. Al-Mounsiya Commercial Complex spanning 28,000 square meters. And historic cultural monuments at Diriyah Gate, where silent, zero-vibration climate networks safeguard Saudi heritage.",
    image: "/images/projects/gate-tower.jpg",
    hudMetrics: [
      { label: "THE GATE TOWER", value: "44 FLOORS · 170M" },
      { label: "AL-MOUNSIYA", value: "28,000 SQM RETAIL" },
      { label: "DAR AL-QALAM", value: "CULTURAL HERITAGE" },
      { label: "AL-SHOROUQ", value: "HEALTHCARE CAMPUS" },
    ],
    accentColor: "from-emerald-500/30 to-transparent",
  },
  {
    id: 4,
    actTitle: "ACT IV · THE BIM & VDC REVOLUTION",
    timestamp: "01:15 - 01:35",
    startSec: 75,
    endSec: 95,
    headline: "DIGITAL TWIN VIRTUAL CONSTRUCTION · LOD 500",
    tagline: "Multi-Disciplinary Clash Detection · Zero Rework · 25% Time Savings",
    voiceover:
      "We build twice: first in the virtual realm, then on the ground. Through BIM Level of Development 500, our technical office unites architecture, structural elements, and MEP into a synchronized federated 3D twin, eliminating thousands of site collisions before fabrication begins.",
    image: "/images/bim/bim-architecture.jpg",
    hudMetrics: [
      { label: "VDC STANDARD", value: "LOD 500 ACCURACY" },
      { label: "SITE CLASHES", value: "ZERO HARD COLLISIONS" },
      { label: "SCHEDULE GAIN", value: "+25% ACCELERATION" },
      { label: "FABRICATION", value: "100% CSD SYNCHRONIZED" },
    ],
    accentColor: "from-blue-500/30 to-transparent",
  },
  {
    id: 5,
    actTitle: "ACT V · ZERO-HARM & QUALITY ASSURANCE",
    timestamp: "01:35 - 01:50",
    startSec: 95,
    endSec: 110,
    headline: "UNCOMPROMISING SAFETY & SAUDI VISION 2030 ALIGNMENT",
    tagline: "Zero-Harm Culture · ISO 9001:2015 ITP Plans · Decarbonization",
    voiceover:
      "Safety is embedded in our DNA. Governed by a proactive Zero-Harm mandate, certified safety oversight, and third-party hydronic balancing. Proudly aligned with Saudi Vision 2030, empowering national engineering leadership and delivering high-efficiency green facilities.",
    image: "/assets/certi-BhWlH10b.jpg",
    hudMetrics: [
      { label: "HSE POLICY", value: "ZERO-HARM MANDATE" },
      { label: "QUALITY SYSTEM", value: "ISO 9001:2015 ITP" },
      { label: "BALANCING", value: "CERTIFIED TAB AUDIT" },
      { label: "NATIONAL VISION", value: "SAUDI 2030 ALIGNED" },
    ],
    accentColor: "from-amber-500/30 to-transparent",
  },
  {
    id: 6,
    actTitle: "ACT VI · THE FUTURE IS ELITE",
    timestamp: "01:50 - 02:00",
    startSec: 110,
    endSec: 120,
    headline: "PARTNER WITH ELITE. BUILD WITH CONFIDENCE.",
    tagline: "Your Vision. Our Turnkey Engineering Rigor.",
    voiceover:
      "Elite For Contracting. Transforming visionary blueprints into enduring national landmarks. For upcoming institutional tenders and landmark engineering partnerships, connect with our executive technical leadership in Riyadh today.",
    image: "/images/hero/gate-tower-hero.jpg",
    hudMetrics: [
      { label: "HEADQUARTERS", value: "AL-NAKHEEL TOWER, RIYADH" },
      { label: "TELEPHONE", value: "+966 11 488 6660" },
      { label: "WHATSAPP", value: "+966 54 813 2029" },
      { label: "CORPORATE PORTAL", value: "WWW.ELITE.COM.SA" },
    ],
    accentColor: "from-emerald-500/40 to-transparent",
  },
];

export const PromoVideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const TOTAL_DURATION = 120; // 2 minutes (120 seconds)

  // Initialize or resume Web Audio Synthesizer
  const initAudio = () => {
    if (typeof window === "undefined") return;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  // Play cinematic audio sting on scene transitions
  const playCinematicSting = (sceneIdx: number) => {
    if (isMuted || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      // Sub-bass cinematic boom
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(sceneIdx === 0 ? 55 : 45, now);
      osc.frequency.exponentialRampToValueAtTime(25, now + 1.2);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);

      // Digital telemetry chime
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chimeOsc.type = "triangle";
      chimeOsc.frequency.setValueAtTime(880, now);
      chimeOsc.frequency.setValueAtTime(1320, now + 0.1);
      chimeGain.gain.setValueAtTime(0.08, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chimeOsc.start(now);
      chimeOsc.stop(now + 0.4);
    } catch {
      // Audio playback silently bypassed if browser permissions restrict
    }
  };

  // Main playback timer loop
  useEffect(() => {
    if (isPlaying) {
      lastTimeRef.current = performance.now();
      const step = (now: number) => {
        const delta = (now - lastTimeRef.current) / 1000;
        lastTimeRef.current = now;

        setCurrentTime((prev) => {
          const next = prev + delta;
          if (next >= TOTAL_DURATION) {
            setIsPlaying(false);
            return TOTAL_DURATION;
          }
          return next;
        });

        animationFrameRef.current = requestAnimationFrame(step);
      };

      animationFrameRef.current = requestAnimationFrame(step);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  // Sync current scene index based on playback time
  useEffect(() => {
    const idx = scenes.findIndex(
      (s) => currentTime >= s.startSec && currentTime < s.endSec
    );
    if (idx !== -1 && idx !== currentSceneIndex) {
      setCurrentSceneIndex(idx);
      playCinematicSting(idx);
    } else if (currentTime >= TOTAL_DURATION && currentSceneIndex !== scenes.length - 1) {
      setCurrentSceneIndex(scenes.length - 1);
    }
  }, [currentTime, currentSceneIndex]);

  // Auto-play when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentTime(0);
      setIsPlaying(true);
      initAudio();
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlay = () => {
    initAudio();
    if (currentTime >= TOTAL_DURATION) {
      setCurrentTime(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(ratio * TOTAL_DURATION);
  };

  const jumpToScene = (idx: number) => {
    initAudio();
    setCurrentTime(scenes[idx].startSec);
    setCurrentSceneIndex(idx);
    setIsPlaying(true);
    playCinematicSting(idx);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!isOpen) return null;

  const currentScene = scenes[currentSceneIndex] || scenes[0];
  const progressPercent = (currentTime / TOTAL_DURATION) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-arch-950/95 backdrop-blur-2xl animate-fade-in">
      <div
        ref={containerRef}
        className={`relative w-full max-w-6xl aspect-[16/9] bg-arch-950 rounded-3xl border border-arch-750/90 shadow-2xl overflow-hidden flex flex-col justify-between ${
          isFullscreen ? "max-w-none w-screen h-screen rounded-none aspect-auto border-none" : ""
        }`}
      >
        {/* Background Visual Layer with Ken Burns Cinematic Motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {scenes.map((scene, idx) => (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSceneIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={scene.image}
                alt={scene.headline}
                fill
                sizes="100vw"
                className={`object-cover object-center filter contrast-125 brightness-75 transition-transform duration-[12000ms] ease-out ${
                  isPlaying && idx === currentSceneIndex ? "scale-110" : "scale-100"
                }`}
                priority
              />
              {/* Cinematic Vignette & Blueprint Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-arch-950 via-arch-950/40 to-arch-950/70" />
              <div className="absolute inset-0 bg-blueprint opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-arch-950/80 via-transparent to-arch-950/80" />
            </div>
          ))}
        </div>

        {/* TOP BAR: Header HUD & Controls */}
        <div className="relative z-20 flex items-center justify-between p-4 sm:p-6 border-b border-arch-750/50 bg-arch-950/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-500/20 border border-brand-500/50 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-brand-400 tracking-widest uppercase">
                  ELITE CORPORATE FILM
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 font-mono font-bold">
                  2:00 4K MASTER
                </span>
              </div>
              <span className="text-xs text-arch-300 font-mono hidden sm:block">
                Turnkey Engineering · Landmark Infrastructure · BIM Practice
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-xl bg-arch-900/80 border border-arch-750/70 text-arch-300 hover:text-white hover:border-brand-500/40 transition-colors"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-400" />}
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-arch-900/80 border border-arch-750/70 text-arch-300 hover:text-white hover:border-brand-500/40 transition-colors hidden sm:block"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-arch-900/80 border border-arch-750/70 text-arch-300 hover:text-white hover:border-red-500/40 hover:bg-red-950/40 transition-colors"
              title="Close Video"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CENTER CONTENT: Cinematic Title & Telemetry HUD */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-4">
          <div className="max-w-4xl space-y-4">
            {/* Act badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-900/90 border border-brand-500/40 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-brand-400 tracking-widest uppercase">
                {currentScene.actTitle}
              </span>
              <span className="text-arch-500 font-mono">|</span>
              <span className="text-xs font-mono text-arch-300">{currentScene.timestamp}</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
              {currentScene.headline}
            </h2>

            {/* Tagline */}
            <p className="text-sm sm:text-lg font-mono text-brand-300 font-semibold tracking-wide">
              {currentScene.tagline}
            </p>

            {/* Voiceover Captions */}
            <div className="p-4 sm:p-5 rounded-2xl bg-arch-950/80 border border-arch-750/80 backdrop-blur-xl shadow-2xl max-w-3xl">
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-500/20 text-brand-400 uppercase tracking-wider shrink-0 mt-0.5">
                  NARRATOR (VO)
                </span>
                <p className="text-xs sm:text-sm text-arch-100 font-medium leading-relaxed italic">
                  &ldquo;{currentScene.voiceover}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Floating Right HUD Metrics */}
          <div className="hidden lg:grid grid-cols-2 gap-3 absolute right-12 top-1/2 -translate-y-1/2 w-80">
            {currentScene.hudMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-arch-900/80 border border-arch-750/70 backdrop-blur-md shadow-lg"
              >
                <span className="text-[10px] font-mono text-arch-400 block tracking-wider uppercase">
                  {metric.label}
                </span>
                <span className="text-xs font-mono font-bold text-brand-400 block truncate mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CONTROLS & TIMELINE BAR */}
        <div className="relative z-20 p-4 sm:p-6 border-t border-arch-750/50 bg-arch-950/80 backdrop-blur-md space-y-3">
          {/* Timeline Scrubber */}
          <div
            onClick={handleSeek}
            className="group relative h-2.5 w-full bg-arch-850 rounded-full cursor-pointer overflow-hidden border border-arch-750/60"
          >
            <div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-400 transition-all duration-100 ease-linear"
              style={{ width: `${progressPercent}%` }}
            />
            {/* Scene Markers */}
            {scenes.map((s, idx) => (
              <div
                key={s.id}
                className="absolute top-0 bottom-0 w-0.5 bg-arch-700/80 pointer-events-none"
                style={{ left: `${(s.startSec / TOTAL_DURATION) * 100}%` }}
                title={s.actTitle}
              />
            ))}
          </div>

          {/* Transport Controls & Chapter Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-xl bg-brand-500 hover:bg-brand-400 text-arch-950 flex items-center justify-center font-bold shadow-lg shadow-brand-500/20 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ps-0.5" />}
              </button>

              <button
                onClick={() => {
                  setCurrentTime(0);
                  setIsPlaying(true);
                  playCinematicSting(0);
                }}
                className="p-2.5 rounded-xl bg-arch-900 border border-arch-750/70 text-arch-300 hover:text-white hover:border-brand-500/40 transition-colors"
                title="Restart Film"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="font-mono text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-arch-900 border border-arch-750/70">
                <span className="text-brand-400">{formatTime(currentTime)}</span>
                <span className="text-arch-600">/</span>
                <span className="text-arch-400">{formatTime(TOTAL_DURATION)}</span>
              </div>
            </div>

            {/* Chapter Quick Jump Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {scenes.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => jumpToScene(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold whitespace-nowrap transition-colors cursor-pointer ${
                    currentSceneIndex === idx
                      ? "bg-brand-500 text-arch-950 shadow-md shadow-brand-500/20"
                      : "bg-arch-900/90 text-arch-400 hover:text-white border border-arch-750/70"
                  }`}
                >
                  ACT 0{s.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
