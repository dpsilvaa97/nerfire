export interface LangType {
    appLanguage: {
        lang_code: string,
        navbar: {
            home: string;
            in: string;
            up: string;
            visitor: string;
            welcome: string;
        },
        wallpaper: {
            slide1: {
                text1: string;
                text2: string;
            },
            slide2: {
                text1: string;
                text2: string;
            },
            slide3: {
                text1: string;
                text2: string;
            }
        },
        infoApp: {
            drone: {
                time: string;
                sensor: string;
                frequency: string;
                mark: string;
                camera: string;
            },
            base: {
                battery: string;
                communicate: string;
                mark: string;
            },
        },
        snackKekax: {
            kekaxhot: string;
        },
        footer: {
            message: string
        }
    }
}