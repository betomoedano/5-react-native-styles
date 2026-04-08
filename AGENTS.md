# Styling instructions

- Use experimental_backgroundImage with a CSS-like string to apply linear gradients. Example: "linear-gradient(to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)"

- Use filter to apply visual effects like blur or color adjustments. It supports CSS-like string syntax or an array of objects. Note: full support is Android-only (blur requires Android 12+), while iOS only supports brightness and opacity.

- Use boxShadow with a CSS-like string to apply shadows. Supports offsets, blur, spread, color, and multiple layers separated by commas. Example: "0 4px 24px rgba(0,0,0,0.15)"

- Use gap, rowGap, and columnGap to control spacing between children in flex layouts. gap sets both axes, while rowGap and columnGap let you control them independently. Example: gap: 12 or rowGap: 6, columnGap: 28

- Use mixBlendMode to control how an element blends with its background (e.g. multiply, screen, overlay). Use isolation: "isolate" on a parent to limit blending to that container. Example: mixBlendMode: "multiply"
