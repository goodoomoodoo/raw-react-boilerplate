export const template = ( content = '', state = {} ) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="title" content="React Boilerplate">
            <meta name="keywords" content="React,Nodejs">
            <meta name="author" content="Arvin Lin">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>REACT</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.__INITIAL_STATE__=${JSON.stringify( state )}</script>
            <script type="text/javascript" src="bundle.js"></script>
        </body>
    </html>
    `
}