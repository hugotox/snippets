#!/bin/bash

# easy Unicode search https://jrgraphix.net/r/Unicode/0020-007F
# easy way to check font correctness https://fontdrop.info/#/?darkmode=true
# easier way to check fonts https://marketplace.visualstudio.com/items?itemName=ctcuff.font-preview
# 
# Install requirements:
#
# pip install fonttools brotli
# 
# run ./parsefonts.sh
# for .woof2 files add `--flavor woff2` after output-file


```
pyftsubset Mulish-Italic-VariableFont_wght.ttf \
--unicodes=U+0020-007F,U+2000-206F,U+00C9,U+00E9,U+00C8,U+00E8,U+00C0,U+00E0,U+00D9,U+00F9,U+00C7,U+00E7,U+00C2,U+00E2,U+00CA,U+00EA,U+00CE,U+00EE,U+00D4,U+00F4,U+00DB,U+00FB,U+00CB,U+00EB,U+00CF,U+00EF,U+00DC,U+00FC,U+00C1,U+00E1,U+00C9,U+00E9,U+00CD,U+00ED,U+00D3,U+00F3,U+00DA,U+00FA,U+00D1,U+00F1, \
--output-file=Mulish-Italic-VariableFont_wght.generated.ttf \
```

```
pyftsubset Mulish-VariableFont_wght.ttf \
--unicodes=U+0020-007F,U+2000-206F,U+00C9,U+00E9,U+00C8,U+00E8,U+00C0,U+00E0,U+00D9,U+00F9,U+00C7,U+00E7,U+00C2,U+00E2,U+00CA,U+00EA,U+00CE,U+00EE,U+00D4,U+00F4,U+00DB,U+00FB,U+00CB,U+00EB,U+00CF,U+00EF,U+00DC,U+00FC,U+00C1,U+00E1,U+00C9,U+00E9,U+00CD,U+00ED,U+00D3,U+00F3,U+00DA,U+00FA,U+00D1,U+00F1, \
--output-file=Mulish-VariableFont_wght.generated.ttf \
```
