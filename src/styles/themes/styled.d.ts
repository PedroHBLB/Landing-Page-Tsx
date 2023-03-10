import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;
    
        text: {
            primary: string;
            secundary: string;
        },
    
        button: {
            primary: string;
        }
    }
}