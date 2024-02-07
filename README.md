# Buildless

## JavaScript front end app example sans build step

I think we all know that browsers have made the JS build toolchain fully redundant.

There is not a need for a build and transpilation step in JS apps anymore.

React and most frameworks should be abandoned for PATTERNS.

This is my pattern for front ends that sit ion front of FastAPI / Python servers.

### Leveraging...

- Shoelace: https://github.com/shoelace-style/shoelace

Ready to go widgets that are beautiful, native Web Components based on Lit Element

- zustand: https://github.com/pmndrs/zustand

State management that can be used in vanilla JS mode

## Run it

```bash
python -m http.server
```

Open localhost:8000 to view