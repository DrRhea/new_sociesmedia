<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- Meta Description -->
    <meta name="description" content="Sociesmedia adalah platform edukasi interaktif yang menyediakan artikel, multimedia, podcast, video, dan berbagai materi belajar untuk semua kalangan." />
    <meta name="keywords" content="Sociesmedia, edukasi, belajar, multimedia, artikel, podcast, video, poster, games, pembelajaran, interaktif" />
    <meta name="author" content="Sociesmedia" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph (OG) Meta Tags -->
    <meta property="og:title" content="Sociesmedia - Platform Edukasi dan Belajar Interaktif" />
    <meta property="og:description" content="Temukan beragam materi belajar, artikel menarik, video edukasi, podcast informatif, dan konten multimedia lainnya di Sociesmedia." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sociesmedia.id" />
    <meta property="og:image" content="/storage/meta/image.webp" /> <!-- Ganti URL gambar -->
    <meta property="og:locale" content="id_ID" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Sociesmedia - Platform Edukasi dan Belajar Interaktif" />
    <meta name="twitter:description" content="Temukan beragam materi belajar, artikel menarik, video edukasi, podcast informatif, dan konten multimedia lainnya di Sociesmedia." />
    <meta name="twitter:image" content="/storage/meta/image.webp" />
    <meta name="twitter:site" content="@Sociesmedia" /> <!-- Ganti dengan Twitter handle Anda -->

    <!-- Canonical URL -->
    <link rel="canonical" href="https://sociesmedia.id" />

    <!-- Favicon -->
    <link rel="icon" href="/storage/meta/logo.webp" type="image/x-icon" />

    <!-- JSON-LD Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sociesmedia",
        "url": "https://sociesmedia.id",
        "description": "Sociesmedia adalah platform edukasi interaktif yang menyediakan artikel, multimedia, podcast, video, dan berbagai materi belajar untuk semua kalangan.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sociesmedia.id/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sociesmedia",
            "logo": "https://sociesmedia.id/images/logo.png"
        }
    }
    </script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body>
@inertia
</body>

</html>
