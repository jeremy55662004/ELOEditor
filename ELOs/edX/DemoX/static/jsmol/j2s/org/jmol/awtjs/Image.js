Clazz.declarePackage ("org.jmol.awtjs");
c$ = Clazz.declareType (org.jmol.awtjs, "Image");
c$.createImage = Clazz.defineMethod (c$, "createImage", 
function (data) {
return null;
}, "~O");
c$.waitForDisplay = Clazz.defineMethod (c$, "waitForDisplay", 
function (display, image) {
}, "~O,~O");
c$.getWidth = Clazz.defineMethod (c$, "getWidth", 
function (image) {
{
return canvas.width;
}}, "~O");
c$.getHeight = Clazz.defineMethod (c$, "getHeight", 
function (image) {
{
return canvas.height;
}}, "~O");
c$.getJpgImage = Clazz.defineMethod (c$, "getJpgImage", 
function (apiPlatform, viewer, quality, comment) {
return null;
}, "org.jmol.api.ApiPlatform,org.jmol.viewer.Viewer,~N,~S");
c$.grabPixels = Clazz.defineMethod (c$, "grabPixels", 
function (imageobj, width, height) {
return null;
}, "~O,~N,~N");
c$.drawImageToBuffer = Clazz.defineMethod (c$, "drawImageToBuffer", 
function (gOffscreen, imageOffscreen, imageobj, width, height, bgcolor) {
return null;
}, "~O,~O,~O,~N,~N,~N");
c$.getTextPixels = Clazz.defineMethod (c$, "getTextPixels", 
function (text, font3d, gObj, image, width, height, ascent) {
return null;
}, "~S,org.jmol.util.JmolFont,~O,~O,~N,~N,~N");
c$.newBufferedImage = Clazz.defineMethod (c$, "newBufferedImage", 
function (image, w, h) {
return null;
}, "~O,~N,~N");
c$.newBufferedImage = Clazz.defineMethod (c$, "newBufferedImage", 
function (w, h) {
return null;
}, "~N,~N");
c$.allocateRgbImage = Clazz.defineMethod (c$, "allocateRgbImage", 
function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent) {
return null;
}, "~N,~N,~A,~N,~B");
c$.getStaticGraphics = Clazz.defineMethod (c$, "getStaticGraphics", 
function (image, backgroundTransparent) {
return null;
}, "~O,~B");
c$.getGraphics = Clazz.defineMethod (c$, "getGraphics", 
function (image) {
return null;
}, "~O");
c$.drawImage = Clazz.defineMethod (c$, "drawImage", 
function (g, img, x, y, width, height) {
}, "~O,~O,~N,~N,~N,~N");
c$.flush = Clazz.defineMethod (c$, "flush", 
function (image) {
}, "~O");
c$.disposeGraphics = Clazz.defineMethod (c$, "disposeGraphics", 
function (graphicForText) {
}, "~O");
