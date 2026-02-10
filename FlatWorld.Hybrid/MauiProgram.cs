using Microsoft.AspNetCore.Components.WebView.Maui;

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
                fonts.AddFont("PTSans-Regular.ttf", "PTSansRegular");
                fonts.AddFont("PTSans-Bold.ttf", "PTSansBold");
                fonts.AddFont("PTSerif-Bold.ttf", "PTSerifBold");
                fonts.AddFont("IBMPlexMono-Medium.ttf", "IBMPlexMonoMedium");
                fonts.AddFont("IBMPlexMono-SemiBold.ttf", "IBMPlexMonoSemiBold");
            });

        builder.Services.AddMauiBlazorWebView();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
#endif

        return builder.Build();
    }
}
