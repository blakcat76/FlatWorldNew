# FlatWorldNew

**Плоский мир / FlatWorld** - A steampunk + magic themed UI component library built with Blazor Web and .NET MAUI Blazor Hybrid.

## 📋 Overview

This repository contains a complete solution demonstrating steampunk-themed UI components that work across both web (Blazor Server) and mobile/desktop (MAUI Blazor Hybrid) platforms. All UI assets (CSS, JavaScript, and Razor components) are centralized in a shared Razor Class Library for maximum code reuse.

![FlatWorld Demo](https://github.com/user-attachments/assets/8726cb3a-7ca8-4118-9a50-8d130765893f)

## 🎨 Features

### UI Components
- **Buttons**: Primary, Secondary, and Arcane variants with disabled and loading states
- **Tabs**: Interactive tabs with active state styling
- **Badges**: Multiple color variants (Primary, Secondary, Success, Warning, Danger, Arcane)
- **Stamps**: SVG-based stamps (Approved, Sealed, Arcane) with steampunk aesthetics
- **Tooltips**: Accessible tooltips with hover, focus, and click-toggle support

### Typography (Cyrillic Support)
- **Titles**: PT Serif 700
- **Body**: PT Sans 400/700
- **Monospace Numbers**: IBM Plex Mono 500/600

### Accessibility
- Tooltips support keyboard navigation (Tab to focus)
- ESC key closes active tooltips
- Click-toggle tooltips for touch devices
- ARIA attributes for screen readers

## 🏗️ Solution Structure

```
FlatWorldNew/
├── FlatWorld.Web/              # Blazor Web App (Server)
├── FlatWorld.Hybrid/           # .NET MAUI Blazor Hybrid App
└── FlatWorld.Shared/           # Shared Razor Class Library
    ├── Components/             # Shared Blazor components
    │   ├── FlatWorldDemo.razor
    │   ├── StampApproved.razor
    │   ├── StampSealed.razor
    │   └── StampArcane.razor
    └── wwwroot/                # Static assets
        ├── css/
        │   └── steampunk.css   # Steampunk UI styles
        └── js/
            └── tooltips.js     # Tooltip functionality
```

## 🚀 Getting Started

### Prerequisites
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- For MAUI Hybrid: Platform-specific SDKs (Android/iOS/Windows)

### Running the Web Application

1. Clone the repository:
   ```bash
   git clone https://github.com/blakcat76/FlatWorldNew.git
   cd FlatWorldNew
   ```

2. Build the solution:
   ```bash
   dotnet build
   ```

3. Run the web application:
   ```bash
   cd FlatWorld.Web
   dotnet run
   ```

4. Open your browser and navigate to `http://localhost:5000` (or the URL shown in the console)

### Running the MAUI Hybrid Application

**Note**: Building MAUI applications requires platform-specific SDKs. On Linux, only Android can be built. Windows, iOS, and macOS targets require their respective operating systems.

1. Navigate to the Hybrid project:
   ```bash
   cd FlatWorld.Hybrid
   ```

2. Run on your target platform:
   ```bash
   # For Android (requires Android SDK)
   dotnet build -t:Run -f net10.0-android
   
   # For iOS (macOS only, requires Xcode)
   dotnet build -t:Run -f net10.0-ios
   
   # For Windows (Windows only)
   dotnet build -t:Run -f net10.0-windows10.0.19041.0
   ```

3. If you encounter workload errors, install the required MAUI workloads:
   ```bash
   # Install MAUI workloads (requires appropriate OS)
   dotnet workload install maui
   ```

## 📦 Asset Referencing

### In Web Projects
Static assets from the Shared library are referenced using the `_content` path:

```html
<link rel="stylesheet" href="_content/FlatWorld.Shared/css/steampunk.css" />
<script src="_content/FlatWorld.Shared/js/tooltips.js"></script>
```

### In MAUI Hybrid Projects
Use the same `_content` path - MAUI's Blazor WebView handles the routing automatically:

```html
<link rel="stylesheet" href="_content/FlatWorld.Shared/css/steampunk.css" />
```

### Using Components
Reference components with their full namespace:

```razor
<FlatWorld.Shared.Components.FlatWorldDemo />
<FlatWorld.Shared.Components.StampApproved />
```

## 🎭 Fonts

### Web (Google Fonts)
The web application loads fonts from Google Fonts CDN:
- PT Sans (400, 700)
- PT Serif (700)
- IBM Plex Mono (500, 600)

### MAUI Hybrid (Embedded Fonts)
Font files should be placed in `FlatWorld.Hybrid/Resources/Fonts/` and registered in `MauiProgram.cs`:

```csharp
.ConfigureFonts(fonts =>
{
    fonts.AddFont("PTSans-Regular.ttf", "PTSansRegular");
    fonts.AddFont("PTSans-Bold.ttf", "PTSansBold");
    fonts.AddFont("PTSerif-Bold.ttf", "PTSerifBold");
    fonts.AddFont("IBMPlexMono-Medium.ttf", "IBMPlexMonoMedium");
    fonts.AddFont("IBMPlexMono-SemiBold.ttf", "IBMPlexMonoSemiBold");
});
```

## 🎨 Customization

### Color Palette
The steampunk color palette is defined in `steampunk.css` using CSS custom properties:

```css
:root {
    --color-brass: #b87333;
    --color-bronze: #cd7f32;
    --color-copper: #d2691e;
    --color-iron: #4a4a4a;
    --color-steel: #71797e;
    --color-arcane-purple: #8b5cf6;
    /* ... */
}
```

### Tooltip Configuration
Tooltips can be added to any element:

```html
<!-- Hover tooltip -->
<button data-tooltip="Tooltip text">Hover me</button>

<!-- Click-toggle tooltip -->
<button data-tooltip="Tooltip text" data-tip-toggle="true">Click me</button>
```

## 📄 License

This project is provided as-is for educational and demonstration purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

