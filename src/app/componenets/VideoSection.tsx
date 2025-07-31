/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

const videoAssets = {
  passenger: {
    body: {
      mp4: "/videos/Passenger-Alpha.mp4",
      webm: "/videos/Passenger-Alpha.webm",
      icon: "/icons/body.png",
      label: "Complete body",
    },
    engine: {
      mp4: "/videos/Front.mp4",
      webm: "/videos/Front.webm",
      icon: "/icons/front.png",
      label: "Front",
    },
    cabin: {
      mp4: "/videos/Cabin.mp4",
      webm: "/videos/Cabin.webm",
      icon: "/icons/cabin.png",
      label: "Cabin",
    },
    trunk: {
      mp4: "/videos/Trunk.mp4",
      webm: "/videos/Trunk.webm",
      icon: "/icons/trunk.png",
      label: "Trunk",
    },
    exterior: {
      mp4: "/videos/Exterior.mp4",
      webm: "/videos/Exterior.webm",
      icon: "/icons/exterior.png",
      label: "Exterior",
    },
  },
  commercial: {
    body: {
      mp4: "/videos/Commercial-Alpha.mp4",
      webm: "/videos/Commercial-Alpha.webm",
      icon: "/icons/body.png",
      label: "Complete body",
    },
    engine: {
      mp4: "/videos/Commercial-Engine.mp4",
      webm: "/videos/Commercial-Engine.webm",
      icon: "/icons/front.png",
      label: "Front",
    },
    cabin: {
      mp4: "/videos/Commercial-Cabin.mp4",
      webm: "/videos/Commercial-Cabin.webm",
      icon: "/icons/cabin.png",
      label: "Cabin",
    },
  },
};

export default function VideoSection() {
  const [currentSection, setCurrentSection] = useState<
    "passenger" | "commercial"
  >("passenger");
  const [currentPassengerKey, setPassengerKey] = useState("body");
  const [currentCommercialKey, setCommercialKey] = useState("body");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPassengerVisible, setPassengerVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleManualSwitch = (section: "passenger" | "commercial") => {
    if (currentSection !== section) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(section);
        setIsTransitioning(false);
      }, 200);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const container = containerRef.current;
      if (!header || !container) return;

      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;

      const rect = container.getBoundingClientRect();
      const containerMiddle = rect.top + rect.height / 2;

      const threshold = 70; // pixels of tolerance

      // Update passenger visibility based on header top
      setPassengerVisible(header.getBoundingClientRect().top <= 100);

      if (
        containerMiddle < viewportMiddle - threshold &&
        currentSection !== "commercial"
      ) {
        handleManualSwitch("commercial");
      } else if (
        containerMiddle > viewportMiddle + threshold &&
        currentSection !== "passenger"
      ) {
        handleManualSwitch("passenger");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, currentSection, currentPassengerKey, currentCommercialKey]);

  // Add progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        const progressPercent = (video.currentTime / video.duration) * 100;
        setProgress(progressPercent);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentSection, currentPassengerKey, currentCommercialKey]);

  const getVideoSource = () => {
    return currentSection === "passenger"
      ? videoAssets.passenger[currentPassengerKey]
      : videoAssets.commercial[currentCommercialKey];
  };

  // Circular progress calculations
  const radius = 26;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section
      ref={containerRef}
      className="relative mt-60 w-full min-h-[40vh] font-sans bg-black text-white px-4 md:px-16 py-32"
    >
      {/* Sticky Header */}
      <div
        ref={headerRef}
        className="sticky top-14 z-10 mb-150 flex justify-center items-center h-[20vh] md:h-[20vh] bg-black text-center"
      >
        <h1 className="text-2xl font-light md:text-4xl leading-tight">
          Evolving the drive with <span className="font-bold">360-degree</span>{" "}
          <br /> nonwoven solutions
        </h1>
      </div>

      <div className="flex flex-row h-[40vh] items-start m-20 gap-6">
        {/* Left Panel */}
        <div className="flex flex-col items-start space-y-4 sticky top-[40vh] md:top-[25vh] self-start">
          <div
            className={clsx(
              "absolute left-0 top-0 bottom-0 w-[2px] bg-gray-600 rounded-full transition-all duration-1000 ease-in-out",
              currentSection === "passenger"
                ? isPassengerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
                : "opacity-100 translate-y-0"
            )}
          >
            <div
              className={clsx(
                "absolute left-0 rounded-full transition-all duration-500",
                currentSection === "passenger"
                  ? "top-0 h-1/2 w-[2px] bg-white"
                  : "top-1/2 h-1/2 w-[2px] bg-white"
              )}
            />
          </div>

          <div
            className={clsx(
              "pl-4 flex w-[30vw] h-[30vh] flex-col gap-4 font-sans transition-all duration-1000 ease-in-out",
              currentSection === "passenger"
                ? isPassengerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
                : "opacity-100 translate-y-0"
            )}
          >
            <button
              onClick={() => handleManualSwitch("passenger")}
              className={clsx("text-left",currentSection === "passenger"
                    ? "text-white"
                    : "text-gray-500")}
            >
              <h2
                className="text-[28px] font-[700] pb-[10px]">
                Passenger vehicles
              </h2>
              <p className="text-[18px] font-[400]">
                Revving up Nonwoven innovation from <br />
                interior to exterior.
              </p>
            </button>
            <button
              onClick={() => handleManualSwitch("commercial")}
              className={clsx("text-left font-sans",currentSection === "commercial"
                    ? "text-white"
                    : "text-gray-500")}
            >
              <h2
                className="text-[28px] font-[700] pb-[10px]">
                Commercial vehicles
              </h2>
              <p className="text-[18px] font-[400]">
                Advancing Nonwoven engineering <br />
                for heavy-duty vehicles.
              </p>
            </button>
          </div>
        </div>

        {/* Right Panel: Video + Icons */}
        <div
          className={clsx(
            "flex flex-col items-center w-full transition-all duration-700 ease-in-out transform",
            currentSection === "passenger"
              ? isPassengerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
              : "opacity-100 translate-y-0"
          )}
        >
          {/* Video */}
          <div
            className={clsx(
              "mb-10 relative overflow-visible right-0 rounded-xl w-full h-[40vh] md:max-w-[800px] aspect-video transition-all duration-700 ease-in-out",
              isTransitioning && "scale-60 opacity-50"
            )}
          >
            <video
              ref={videoRef}
              key={getVideoSource().mp4}
              className="w-full h-full object-cover overflow-visible rounded-xl transition-transform duration-700 ease-in-out"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={getVideoSource().mp4} type="video/mp4" />
              <source src={getVideoSource().webm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            {(currentSection === "passenger"
              ? Object.entries(videoAssets.passenger)
              : Object.entries(videoAssets.commercial)
            ).map(([key, val]) => (
              <button
                key={key}
                 onClick={() => {
                  if (currentSection === "passenger") {
                    setPassengerKey(key);
                  } else {
                    setCommercialKey(key);
                  }
                  // Reset video to beginning and start playing
                  setProgress(0);
                  setIsPlaying(true);
                  setTimeout(() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play().catch(() => {});
                    }
                  }, 100);
                }}  
                className={clsx(
                  "flex flex-col items-center gap-2 transition-colors duration-300",
                  (currentSection === "passenger" &&
                    currentPassengerKey === key) ||
                    (currentSection === "commercial" &&
                      currentCommercialKey === key)
                    ? "text-white"
                    : "text-gray-500"
                )}
              >
               <img
                  src={val.icon}
                  alt={val.label}
                  className={clsx(
                    "w-[60px] h-[60px] transition-opacity duration-300",
                    (currentSection === "passenger" &&
                      currentPassengerKey === key) ||
                      (currentSection === "commercial" &&
                        currentCommercialKey === key)
                      ? "opacity-100"
                      : "opacity-50"
                  )}
                />

                <span>{val.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Circular Progress Play/Pause Button */}
      <div
        className={clsx(
          "w-fit relative bottom-0 left-300 transition duration-700 ease-in-out",
          currentSection === "passenger"
            ? isPassengerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        )}
      >
        <div className="relative">
          <svg width="60" height="60" className="transform -rotate-90">
            {/* Background circle */}
            <circle 
              cx="30" 
              cy="30" 
              r={radius} 
              stroke="rgba(255, 255, 255, 0.2)" 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
            {/* Progress circle */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="white"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md rounded-full m-1 hover:bg-opacity-60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="2" width="2" height="14" />
                <rect x="10" y="2" width="2" height="14" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <polygon points="6,4 18,12 6,20" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}