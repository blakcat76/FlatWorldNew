using Microsoft.Extensions.Logging;

namespace FlatWorld.Hybrid;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                // PT Sans fonts for steampunk UI
                fonts.AddFont("PTSans-Regular.ttf", "PTSansRegular");
                fonts.AddFont("PTSans-Bold.ttf", "PTSansBold");
                // PT Serif fonts
                fonts.AddFont("PTSerif-Bold.ttf", "PTSerifBold");
                // IBM Plex Mono fonts
                fonts.AddFont("IBMPlexMono-Medium.ttf", "IBMPlexMonoMedium");
                fonts.AddFont("IBMPlexMono-SemiBold.ttf", "IBMPlexMonoSemiBold");
            });

        builder.Services.AddMauiBlazorWebView();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
        builder.Logging.AddDebug();
#endif

        return builder.Build();
    }
}
