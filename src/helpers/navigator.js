export const iExplorer = () => (navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf(".NET") > -1) && ((document.getElementById("root")).innerHTML = '<div style="display:flex;align-items:center;flex-flow:column;"><img style="max-width: 380px" src="https://www.mediamarkt.es/public/images/404_Media.svg" alt="error-page-image-not-found"><h1 style="color:red;font-family:MMText-regular,mm-text-regular,mmtextregular,MMTextProWeb-Regular,sans-serif !important;font-weight:bold!important;">¡Ups! ¡Algo ha ido mal!</h1><p style="max-width: 600px; text-align: center;font-size: 16px;line-height: 24px;">Se ha detectado una versión de navegador obsoleta. <br> Por favor descarga <a href="https://www.microsoft.com/es-es/edge">Microsoft Edge</a> o cambia a otro navegador.</p></div>')