"use client"; // Required for React Hooks like useRef, useState, useEffect

import React, { useRef, useEffect } from "react";

const AutoScrollContainer = ({ src, scrollSpeed = 2, returnSpeed = 2, isScrollingEnabled }) => {
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const scrollDirection = useRef(0);
  console.log(isScrollingEnabled)

  // Function to handle continuous scrolling
  const animateScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    // Scroll down on hover
    if (scrollDirection.current === 1) {
      if (scrollTop + clientHeight < scrollHeight) {
        containerRef.current.scrollTop += scrollSpeed;
      } else {
        // Stop scrolling when the bottom is reached
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
        scrollDirection.current = 0;
      }
    }
    // Scroll up when mouse leaves
    else if (scrollDirection.current === -1) {
      if (scrollTop > 0) {
        containerRef.current.scrollTop -= returnSpeed;
      } else {
        // Stop scrolling when the top is reached
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
        scrollDirection.current = 0;
      }
    }

    if (scrollDirection.current !== 0) {
      animationFrameId.current = requestAnimationFrame(animateScroll);
    }
  };

  // Event handler for mouse entering the container
  const handleMouseEnter = () => {
    if (isScrollingEnabled) {
      scrollDirection.current = 1; // Set direction to scroll down
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    }
  };

  // Event handler for mouse leaving the container
  const handleMouseLeave = () => {
    if (isScrollingEnabled) {
      scrollDirection.current = -1; // Set direction to scroll up
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        // This makes the entire div clickable to open the link
        e.preventDefault();
        window.open(src, "_blank", "noopener noreferrer");
      }}
      style={{
        height: "400px",
        overflowY: isScrollingEnabled ? "auto" : "hidden", // Conditional overflow based on prop
        borderRadius: "0.5rem",
        padding: "1rem",
        transition: "border-color 0.3s ease-in-out",
        position: "relative",
        cursor: "pointer",
      }}
      className="bg-white dark:bg-[var(--color-gray-800)] text-[var(--color-gray-800)] dark:text-[var(--color-white)] shadow-lg-custom"
    >
      {/* The iframe will display the external website */}
      <iframe
        src={src}
        title="External Website View"
        style={{
          width: "100%",
          height: `${isScrollingEnabled ? "7680px": "100%"}`, // A large, fixed height to ensure content is available for scroll
          border: "none",
          // This allows mouse events to be handled by the parent div
          pointerEvents: "none",
          overflow: "hidden"
        }}
      ></iframe>
    </div>
  );
};

export default AutoScrollContainer;
