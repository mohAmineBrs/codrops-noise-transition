import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Vector2 } from "three";
import { noise } from "./Noise";

export const BackgroundMaterial = shaderMaterial(
  {
    u_time: 0,
    u_progress: 0,
    u_aspect: 0,
    u_color: null,
    u_pointer: new Vector2(),
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float u_time;
    uniform float u_progress;
    uniform float u_aspect;
    uniform vec3 u_color;
    uniform vec2 u_pointer;

    varying vec2 vUv;

    #define PI 3.14159265

    ${noise}


    void main() {

        vec2 newUv = (vUv - vec2(0.5)) * vec2(u_aspect,1.);
        
        float dist = length(newUv);

        float falloff = 1.8 - dist;

        float noise = cnoise(vec4(newUv*40.*falloff, u_time, 1.));
        float grain = (fract(sin(dot(vUv, vec2(12.9898,78.233)*2000.0)) * 43758.5453));
        
        float facets = noise*2.;
        float dots = smoothstep(0.1, 0.15, noise);
        float n = facets * dots;
        n = step(.2,facets)*dots;
        n = 1. - n;

        float radius = 1.4;
        float outer_progress = clamp(1.1*u_progress, 0., 1.);
        float inner_progress = clamp(1.1*u_progress - 0.05, 0., 1.);
  
        float inner_circle = 1. - smoothstep((inner_progress-0.4)*radius, inner_progress*radius, dist);
        float outer_circle = 1. - smoothstep((outer_progress-0.1)*radius, inner_progress*radius, dist);
  
        float displacement = outer_circle-inner_circle;

        float scale = mix(0., n, displacement);
        

        float grainStrength = 0.3;
        vec3 final = vec3(displacement-(n+noise)) - vec3(grain*grainStrength);

        gl_FragColor = vec4(final, 1.0);

        gl_FragColor.rgb*=u_color*2.;

        #include <colorspace_fragment>


    }

  `
);

extend({ BackgroundMaterial });
