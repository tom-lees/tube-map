import { useRef, useEffect } from "react";
import p5 from "p5";

const Sketch = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        if (sketchRef.current) {
          p.createCanvas(p.windowWidth, p.windowHeight).parent(
            sketchRef.current
          );
        }
      };

      p.draw = () => {
        p.background(200);
        p.fill(0);
        p.ellipse(p.mouseX, p.mouseY, 50);
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove(); // cleanup
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default Sketch;
