# FlatWorldNew

Плоский мир / FlatWorld - Steampunk + Magic UI Components

A cross-platform Blazor application showcasing steampunk-themed UI components with support for both Web and MAUI Blazor Hybrid platforms.

## Project Structure

- **FlatWorld.Web** - Blazor Web App (Server/WebAssembly hosting)
- **FlatWorld.Hybrid** - .NET MAUI Blazor Hybrid App (Android, iOS, macOS, Windows)
- **FlatWorld.Shared** - Razor Class Library containing all shared UI components, CSS, and JavaScript

## Features

### UI Components
- **Buttons** - Multiple variants (primary, secondary, success, danger, arcane) with disabled and loading states
- **Tabs** - Interactive tab navigation with active state styling
- **Badges** - Color-coded badges for different item types and rarities
- **Stamps** - SVG-based approval stamps (Approved, Sealed, Arcane)
- **Tooltips** - Accessible tooltips with hover, focus, click-to-toggle, and ESC to close

### Typography (Cyrillic Support)
- **Titles**: PT Serif 700
- **Body**: PT Sans 400/700
- **Mono Numbers**: IBM Plex Mono 500/600

### Asset Referencing

The shared assets are referenced via `_content/<AssemblyName>/...`:
- CSS: `_content/FlatWorld.Shared/css/steampunk.css`
- JS: `_content/FlatWorld.Shared/js/tooltip.js`

## Prerequisites

- .NET 10.0 SDK or later
- For MAUI Blazor Hybrid:
  - Visual Studio 2022 with MAUI workload installed
  - Platform-specific SDKs (Android, iOS, etc.)

## Running the Applications

### Web Application

```bash
# Navigate to the Web project
cd FlatWorld.Web

# Run the application
dotnet run

# The app will be available at https://localhost:5001 or http://localhost:5000
```

Visit the demo page at `/flatworld` or the home page `/`.

### MAUI Blazor Hybrid Application

**Important**: Before building the MAUI Blazor Hybrid app, you need to download the required font files.

#### Font Setup for Hybrid App

1. Navigate to `FlatWorld.Hybrid/Resources/Fonts/`
2. Download the following font files and place them in this directory:

   - **PT Sans** (from https://fonts.google.com/specimen/PT+Sans):
     - PTSans-Regular.ttf
     - PTSans-Bold.ttf
   
   - **PT Serif** (from https://fonts.google.com/specimen/PT+Serif):
     - PTSerif-Bold.ttf
   
   - **IBM Plex Mono** (from https://fonts.google.com/specimen/IBM+Plex+Mono):
     - IBMPlexMono-Medium.ttf
     - IBMPlexMono-SemiBold.ttf
   
   - **Open Sans** (from https://fonts.google.com/specimen/Open+Sans):
     - OpenSans-Regular.ttf

3. The fonts are already configured in `MauiProgram.cs` and the `.csproj` file.

#### Build and Run

```bash
# Build the solution
dotnet build

# For specific platforms (requires platform SDKs):
dotnet build -f net10.0-android
dotnet build -f net10.0-ios
dotnet build -f net10.0-windows10.0.19041.0
```

Note: MAUI app deployment requires platform-specific tools and emulators/devices.

## Development

### Adding New Components

1. Create components in `FlatWorld.Shared/Components/`
2. Place static assets (CSS/JS) in `FlatWorld.Shared/wwwroot/`
3. Reference assets using `_content/FlatWorld.Shared/...` in both Web and Hybrid hosts

### Fonts

- **Web**: Fonts are loaded from Google Fonts CDN (requires internet connection)
- **Hybrid**: Fonts are embedded in the app bundle (works offline)

### Tooltip Accessibility

The tooltip system includes full accessibility support:
- Hover to show/hide
- Keyboard focus (Tab/Shift+Tab)
- Click to toggle (for elements with `data-tip-toggle="true"`)
- ESC key to close active tooltips

## Building for Production

### Web
```bash
cd FlatWorld.Web
dotnet publish -c Release
```

### Hybrid
```bash
cd FlatWorld.Hybrid
# Platform-specific publish commands
dotnet publish -c Release -f net10.0-android
```

## License

This project is created for the FlatWorld game UI demonstration.

