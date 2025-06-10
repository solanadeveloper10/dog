import React, { useRef, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "./Switch";

const NeonButton = ({
  color,
  onClick,
  children,
  disabled,
  glowColor,
  icon,
  fullWidth,
  href,
}: {
  color: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  glowColor?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}) => (
  <Box
    component='a'
    href={href}
    target='_blank'
    onClick={(e) => {
      if (onClick) {
        onClick();
        const target = e.currentTarget;
        target.style.transform = "scale(0.9)";
        target.style.transition = "transform 0.2s ease-in";

        setTimeout(() => {
          target.style.transform = "scale(1.15)";
          target.style.transition = "transform 0.2s ease-out";

          setTimeout(() => {
            target.style.transform = "scale(1)";
            target.style.transition = "transform 0.2s ease-out";
          }, 200);
        }, 200);
      }
    }}
    sx={{
      textDecoration: "none",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      px: 4,
      py: 1.5,
      textAlign: "center",
      cursor: disabled ? "default" : "pointer",
      fontSize: "2.5rem",
      color: disabled ? `rgba(${color}, 0.5)` : color,
      transition: "all 0.3s ease",
      opacity: disabled ? 0.5 : 1,
      overflow: "hidden",
      width: fullWidth ? "100%" : "auto",
      justifyContent: fullWidth ? "center" : "flex-start",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "10px",
        borderColor: color,
        transition: "0.3s",
      },
      "&::before": {
        top: 0,
        left: 0,
        borderTop: `2px solid ${color}`,
        borderLeft: `2px solid ${color}`,
      },
      "&::after": {
        bottom: 0,
        right: 0,
        borderBottom: `2px solid ${color}`,
        borderRight: `2px solid ${color}`,
      },
      ...(!disabled && {
        "&:hover": {
          color: "#000",
          backgroundColor: color,
          boxShadow: `0 0 20px ${glowColor || color}, 0 0 40px ${
            glowColor || color
          }`,
          "& .icon": {
            color: "#000",
          },
        },
      }),
    }}
  >
    {icon && (
      <Box
        className='icon'
        sx={{
          display: "flex",
          alignItems: "center",
          color: disabled ? `rgba(${color}, 0.5)` : color,
          transition: "color 0.3s ease",
        }}
      >
        {icon}
      </Box>
    )}
    {children}
  </Box>
);

const Banner: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  const VideoControls = ({ isMobile = false }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1rem" : "2rem",
      }}
    >
      {isMobile && (
        <>
          <NeonButton
            color='rgb(175, 255, 18)'
            glowColor='rgb(175, 255, 18)'
            onClick={() =>
              navigator.clipboard.writeText(
                "EsSMbYKF7ct1nJ2BZsdGzHxUe9Ar9BpKZr81CEDLpump address"
              )
            }
          >
            CA: EsSM...DLpump
          </NeonButton>
          <NeonButton
            color='rgb(175, 255, 18)'
            glowColor='rgb(175, 255, 18)'
            fullWidth={isMobile}
            href='https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=EsSMbYKF7ct1nJ2BZsdGzHxUe9Ar9BpKZr81CEDLpump'
          >
            Buy
          </NeonButton>
        </>
      )}

      <NeonButton
        color='#24A1DE'
        glowColor='#24A1DE'
        fullWidth={isMobile}
        href='https://t.me/the_dog_cto'
      >
        Telegram
      </NeonButton>
      <NeonButton
        color='rgb(22, 52, 201)'
        glowColor='rgb(22, 52, 201)'
        fullWidth={isMobile}
        href='https://x.com/the_dog_cto'
      >
        Twitter
      </NeonButton>
      <NeonButton
        color='#24A1DE'
        glowColor='#24A1DE'
        fullWidth={isMobile}
        href='https://www.dextools.io/app/en/solana/pair-explorer/CKgAwc8TAeAha4rJXcizEzZBuTD9L3bGPDpYpFqjBjY7?t=1749590331947'
      >
        Dextools
      </NeonButton>
      <NeonButton
        color='#ba0da3'
        glowColor='#ba0da3'
        fullWidth={isMobile}
        href='https://dexscreener.com/solana/EsSMbYKF7ct1nJ2BZsdGzHxUe9Ar9BpKZr81CEDLpump'
      >
        Dexscreener
      </NeonButton>
    </Box>
  );

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "#f0f0f0",
      }}
    >
      <video
        ref={videoRef}
        src={isMobile ? "./dogm.mp4" : "./dog.mp4"}
        loop
        muted={isMuted}
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "black",
        }}
      />

      {isPlaying && (
        <>
          {/* Desktop Controls */}
          <Box
            sx={{
              position: "fixed",
              top: "2rem",
              left: 0,
              right: 0,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <VideoControls />
          </Box>
          {!isMobile && (
            <Box
              sx={{
                position: "fixed",
                top: "10rem",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                zIndex: 10,
                gap: 3,
              }}
            >
              <NeonButton
                color='rgb(175, 255, 18)'
                glowColor='rgb(175, 255, 18)'
                onClick={() =>
                  navigator.clipboard.writeText(
                    "EsSMbYKF7ct1nJ2BZsdGzHxUe9Ar9BpKZr81CEDLpump address"
                  )
                }
              >
                CA: EsSMbYKF7ct1nJ2BZsdGzHxUe9Ar9BpKZr81CEDLpump
              </NeonButton>
              <NeonButton
                color='rgb(175, 255, 18)'
                glowColor='rgb(175, 255, 18)'
                fullWidth={isMobile}
                href='https://x.com/dogm_token'
              >
                Buy
              </NeonButton>
            </Box>
          )}

          {/* Mobile Menu Button */}
          <Box
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            sx={{
              position: "fixed",
              top: "1rem",
              right: "1rem",
              display: { xs: "flex", md: "none" },
              zIndex: 20,
              cursor: "pointer",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "300px",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              transform: isMobileMenuOpen
                ? "translateX(0)"
                : "translateX(100%)",
              transition: "transform 0.3s ease",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              padding: "4rem 1rem",
              gap: "1rem",
              zIndex: 15,
              overflowY: "auto",
            }}
          >
            <VideoControls isMobile />
          </Box>

          {/* Desktop Switch */}
          <Box
            sx={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 10,
            }}
          >
            <Switch onClick={() => setIsMuted(!isMuted)} checked={isMuted} />
          </Box>
        </>
      )}

      {!isPlaying && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 2,
          }}
        >
          <NeonButton
            color='#fff'
            glowColor='#fff'
            onClick={handleStart}
            icon={<PetsIcon />}
          >
            dog
          </NeonButton>
        </Box>
      )}
    </Box>
  );
};

export default Banner;
