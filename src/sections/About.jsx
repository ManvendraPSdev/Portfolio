import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `Obsessed with building fast, intuitive web applications — from pixel-perfect React interfaces to scalable, serverless backends. I enjoy turning ideas into production-ready SaaS products where performance, usability, and clean architecture truly matter.

I’ve worked closely with international clients from Kuwait and Qatar, contributing as a Software Developer to build and deliver SaaS solutions tailored to their business needs. Currently, I’m working remotely with Homework Technologies LLC, while also collaborating with distributed teams on freelance projects, gaining hands-on experience in real-world product development and teamwork.

Alongside client work, I’m actively building my own startup, Loan Credit Hub, focused on solving real financial problems through technology. I’m particularly passionate about crafting immersive 3D web experiences using Three.js, WebGL, and GSAP, blending engineering with creativity.

When I’m not shipping code:
⚡ Exploring and open-sourcing experiments
🧠 Collaborating with teams to build scalable SaaS products
🎨 Experimenting with 3D, animations, and interactive web experiences`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/MyPic.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
