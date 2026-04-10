# Image Prompts by Cookie Type

MiniMax image generation prompt templates for Jonesy's Cookie Company cookie photography.

## Base Template

```
Professional food photography of [cookie description] from Jonesy's Cookie Company. Thick, gooey, golden brown on [background]. Natural lighting. [angle]. Warm Texas bakery aesthetic. No text overlay.
```

## Background Options

| Style | Background | Best For |
|-------|------------|----------|
| Clean | White marble slab | Flavor reveals, product shots |
| Rustic | Natural wood surface | Weekend vibe, behind-the-scenes |
| Dark | Slate grey | Premium tier cookies |
| Warm | Linen/cotton | Review spotlights, lifestyle |
| Event | Elegant setting with soft florals | Event promos |

## Angle Options

| Angle | Use Case |
|-------|----------|
| Top-down (90°) | Cookie stacks, platters, flat lays |
| 45° angle | Single cookie, lifestyle shots |
| Eye-level | Process shots, behind-the-scenes |
| Close-up macro | Detail/texture shots |

## Cookie-Specific Prompts

### Churro Cookie
```
Thick churro-flavored cookies from Jonesy's Cookie Company, golden brown on white marble, cinnamon sugar dusting visible, warm Texas bakery aesthetic, natural lighting, top-down angle, food photography style. No text overlay.
```

### Chocolate Chip
```
Warm stack of chocolate chip cookies on a natural wood surface, thick and gooey with melted chocolate chips, golden brown edges, soft afternoon light, cozy bakery aesthetic, overhead 45-degree angle. No text overlay.
```

### Peanut Butter Delight
```
Peanut butter stuffed cookies with cross-section showing thick peanut butter center, oozing golden caramelized layer, on slate grey background, professional food photography, natural lighting. No text overlay.
```

### Wedding Cookie Platter
```
Beautifully arranged cookie platter with multiple varieties at an elegant wedding reception, warm ambient lighting, stone charger plates, soft florals in background, professional catering photography. No text overlay.
```

### Behind-the-Scenes / Process
```
Cookie dough being scooped by hand onto baking sheet, flour-dusted wooden counter, warm kitchen lighting, Texas bakery, casual authentic style, top-down angle. No text overlay.
```

### Weekend Vibe
```
Cookie with Texas flag pin stuck in it on a simple white plate, minimal clean aesthetic, warm coffee shop lighting. No text overlay.
```

### Celebration Cookie Cake
```
Large decorated circular cookie cake with celebratory frosting, custom message visible, on elegant white plate with soft background lighting, professional bakery photography. No text overlay.
```

## Image Output

```bash
# Save generated images to:
./research/images/[cookie-type]-[variant].png

# Example:
./research/images/churro-cookies.png
./research/images/chocolate-chip.png
./research/images/wedding-platter.png
```

## Best Practices

1. **Real photos > AI-generated** — Once Thurman has real cookie photos, use those instead
2. **Consistent angle** — Pick one angle per content type and stick to it for brand consistency
3. **Natural lighting language** — Use "natural lighting," "soft afternoon light," "warm ambient" — avoid "studio lighting"
4. **No text overlay** — Always specify in prompt; we add text separately in branding
5. **Scale** — AI images look best at 1:1 or 3:4 aspect ratio for Instagram

## Aspect Ratio Guide

| Platform | Content Type | Ratio |
|----------|--------------|-------|
| Instagram Feed | Cookie photos | 1:1 or 3:4 |
| Instagram Stories | Behind-the-scenes | 9:16 |
| Facebook | All content | 1:1 or 16:9 |
| Event Promo | Platters, setups | 16:9 |
