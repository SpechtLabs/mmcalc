# mmcalc

A full-frame equivalent focal length and aperture calculator for photographers.

## Why?

The original mmcalc.com was a beautifully simple tool that I used all the time. Sensor crop factor math isn't hard, but having a dedicated calculator for it was just *nice*. Then one day it was gone. No warning, no archive, just gone.

I loved that site. And after years of muscle memory typing `mmcalc` into my browser, I couldn't be bothered to remember any other URL. So I built my own.

This is my love letter to the original mmcalc.com. If you ran it and you're reading this -- thank you, it was great.

## Features

- Full-frame equivalent focal length and aperture calculation
- Side-by-side comparison of multiple sensor formats
- Depth of field calculator (near limit, far limit, total DoF)
- Shareable URLs -- every calculator state is encoded in the query string
- Dark mode
- Works from the terminal

## CLI

No browser needed. Just curl it:

```sh
$ curl mmcalc.com/gfx-80-1.7
FF Equivalent: 122mm f/2.6
Crop Factor: 1.53x
```

The URL pattern is `/<sensor>-<focal_length>-<aperture>`.

### Available sensors

| ID | Format |
|---|---|
| `ff` | Full Frame (36x24mm) |
| `apsc` | APS-C (23.5x15.6mm) |
| `apsc-canon` | APS-C Canon (22.3x14.9mm) |
| `apsh` | APS-H (27.9x18.6mm) |
| `mft` | Micro Four Thirds (17.3x13mm) |
| `1inch` | 1-inch (13.2x8.8mm) |
| `gfx` | Fujifilm GFX (43.8x32.9mm) |
| `hasselblad` | Hasselblad X (43.8x32.9mm) |
| `phaseone` | Phase One (53.4x40mm) |
| `pentax645d` | Pentax 645D/Z (43.8x32.8mm) |
| `645` | 645 Film (56x42mm) |
| `6x6` | 6x6 Film (56x56mm) |
| `6x7` | 6x7 Film (56x69mm) |
| `6x9` | 6x9 Film (56x83mm) |
| `4x5` | 4x5 inch (100x120mm) |
| `8x10` | 8x10 inch (195x246mm) |

## Development

Tool versions are managed with [mise](https://mise.jdx.dev/):

```sh
mise install        # installs node 22 + bun
bun install         # install dependencies
bun run dev         # start dev server
bun run build       # type-check + production build
bun run lint        # eslint
```

## License

MIT
