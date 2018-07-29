// Created by iWeb 3.0.4 local-build-20151002

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,740),url:'Blueprint_magazine_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Blueprint_magazine_files/stroke_1.png'},{rect:new IWRect(1,-1,570,2),url:'Blueprint_magazine_files/stroke_2.png'},{rect:new IWRect(571,-1,2,2),url:'Blueprint_magazine_files/stroke_3.png'},{rect:new IWRect(571,1,2,740),url:'Blueprint_magazine_files/stroke_4.png'},{rect:new IWRect(571,741,2,3),url:'Blueprint_magazine_files/stroke_5.png'},{rect:new IWRect(1,741,570,3),url:'Blueprint_magazine_files/stroke_6.png'},{rect:new IWRect(-1,741,2,3),url:'Blueprint_magazine_files/stroke_7.png'}],new IWSize(572,743))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Blueprint_magazine_files/Blueprint_magazineMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
