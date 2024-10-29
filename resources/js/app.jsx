import './bootstrap';
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";


createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

        const page = pages[`./Pages/${name}.jsx`];

        if (!page || !page.default) {
            throw new Error(`Halaman ${name} tidak memiliki ekspor default.`);
        }

        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
        <NextUIProvider>
            <App {...props} />
        </NextUIProvider>);
    },
});


