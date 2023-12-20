// Logo.style.ts
import { StyleSheet } from "aphrodite";

interface LogoStyles {
  logoContainer: React.CSSProperties;
  logoImage: React.CSSProperties;
  logoText: React.CSSProperties;
}

const styles: LogoStyles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    margin: "10px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)", // Make it 10% larger on hover
    },
  },
  logoImage: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease, filter 0.3s ease",
    ":hover": {
      transform: "scale(1.1)", // Make it 10% larger on hover
      filter: "brightness(1.2)", // Add brightness on hover
    },
    "::before": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "linear-gradient(to bottom right, rgba(0, 0, 255, 0.8), transparent)",
      transform: "rotate(45deg)",
      transition: "transform 0.3s ease",
      opacity: 0,
      boxShadow: "0 0 20px rgba(0, 0, 255, 0.8)", // Additional box shadow for shine
      filter: "blur(5px)", // Additional blur for shine
    },
    ":hover::before": {
      transform: "rotate(45deg) translate(100%, 100%)",
      opacity: 1,
    },
    "::after": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), transparent)",
      transform: "rotate(45deg)",
      transition: "transform 0.3s ease",
      opacity: 0,
    },
    ":hover::after": {
      transform: "rotate(45deg) translate(100%, 100%)",
      opacity: 1,
    },
  },
  logoText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    fontWeight: "bold",
    color: "black",
    transition: "transform 0.3s ease, filter 0.3s ease, color 0.3s ease",
    ":hover": {
      transform: "scale(1.1)", // Make it 10% larger on hover
      filter: "brightness(1.2)", // Add brightness on hover
      color: "blue", // Change text color to blue on hover
    },
  },
});

export default styles;
