import * as React from 'react';
//
export const Layout = (props: any) => {
    return (
    <html>
        <head>
        <title>welcome</title>
        <script crossOrigin="" src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossOrigin="" src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        </head>
        <div>
            <a href="/">[ home ]</a>
        </div>
        <hr />
        <body>
            <div>{props.children}</div>
        </body>
    </html>
    )
}
