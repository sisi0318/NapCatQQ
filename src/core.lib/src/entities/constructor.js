const _0x210ff2=_0xfc0f;(function(_0x530d7b,_0x293976){const _0x25e16a=_0xfc0f,_0x20de0d=_0x530d7b();while(!![]){try{const _0xb09ee6=parseInt(_0x25e16a(0xcf))/0x1*(-parseInt(_0x25e16a(0x119))/0x2)+-parseInt(_0x25e16a(0x101))/0x3*(parseInt(_0x25e16a(0xe5))/0x4)+-parseInt(_0x25e16a(0xfd))/0x5*(-parseInt(_0x25e16a(0x114))/0x6)+parseInt(_0x25e16a(0xc3))/0x7*(-parseInt(_0x25e16a(0x105))/0x8)+-parseInt(_0x25e16a(0xf2))/0x9+-parseInt(_0x25e16a(0xf5))/0xa+parseInt(_0x25e16a(0xc5))/0xb;if(_0xb09ee6===_0x293976)break;else _0x20de0d['push'](_0x20de0d['shift']());}catch(_0x4a2114){_0x20de0d['push'](_0x20de0d['shift']());}}}(_0x5244,0xe0377));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x2f17c4}from'node:fs';function _0x5244(){const _0x2bee12=['lbAVD','jpg','height','aHwBN','DemSR','hQpkU','unlink','TEXT','toString','获取视频封面失败，使用默认封面','OxNEI','_0.png','mp4','CYRcJ','join','https://www.bilibili.com/','tNFsW','dice','ark','get','5878148NqhfTf','then','FILE','REPLY','set','kRKBf','PCMTX','[包剪锤]','sysface','rps','dizJV','获取视频信息失败','VqAoM','12163437abiOcW','TEfBI','video','14733610ZIifLJ','AniStickerPackId','mface','PIC','Thumb','markdown','size','bqzrl','1635WAfqdm','miniapp','sep','QDes','3NNTqHb','ptt','RdJqk','KxPJw','64oxOvmd','end','nWtyT','copyFile','file','stat','fIuPy','getImageSize','dirname','NmvHZ','文件异常，大小为0','error','fmqcg','notAt','RPS','17676NZgzbb','gif','[商城表情]','ByWwp','mILFa','18878sTzYxR','writeFile','FACE','width','face','string','PTT','VIDEO','https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png','https://tianquan.gtimg.cn/qqAIAgent/item/7/square.png','1307383eNWDHN','emoji','63906315BaJrAW','Ori','uploadFile','XQCaB','catch','Bot\x20Test','uDGJI','AniStickerType','QhDwI','MARKDOWN','7ZyMuSr','ARK'];_0x5244=function(){return _0x2bee12;};return _0x5244();}import _0x5ecf38 from'fluent-ffmpeg';import{NTQQFileApi}from'@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';function _0xfc0f(_0x4faf1f,_0x39bb2e){const _0x5244a8=_0x5244();return _0xfc0f=function(_0xfc0f1a,_0x4140ff){_0xfc0f1a=_0xfc0f1a-0xbf;let _0x9a4046=_0x5244a8[_0xfc0f1a];return _0x9a4046;},_0xfc0f(_0x4faf1f,_0x39bb2e);}import _0x19c93e from'./face_config.json';import*as _0x2e8279 from'node:path';import{SignMiniApp}from'../apis';export const mFaceCache=new Map();export class SendMsgElementConstructor{static['text'](_0x2282ad){const _0x320f2d=_0xfc0f;return{'elementType':ElementType['TEXT'],'elementId':'','textElement':{'content':_0x2282ad,'atType':AtType[_0x320f2d(0x112)],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x26c121,_0x1f922f,_0x1bebe2,_0x1e891a){const _0x9e9b7e=_0xfc0f;return{'elementType':ElementType[_0x9e9b7e(0xd8)],'elementId':'','textElement':{'content':'@'+_0x1e891a,'atType':_0x1bebe2,'atUid':_0x26c121,'atTinyId':'','atNtUid':_0x1f922f}};}static['reply'](_0x239ed6,_0x339989,_0x4848ef,_0x3e134b){const _0x3311ab=_0xfc0f;return{'elementType':ElementType[_0x3311ab(0xe8)],'elementId':'','replyElement':{'replayMsgSeq':_0x239ed6,'replayMsgId':_0x339989,'senderUin':_0x4848ef,'senderUinStr':_0x3e134b}};}static async['pic'](_0x125f45,_0x1540d3='',_0x4da632=0x0){const _0x3efdec=_0xfc0f,_0x3d9bdc={'myFzd':function(_0x4d5410,_0x3648b1){return _0x4d5410===_0x3648b1;},'mIZzE':_0x3efdec(0x10f),'VqAoM':function(_0x131076,_0x49ed2b){return _0x131076(_0x49ed2b);}},{md5:_0x289419,fileName:_0x3412d0,path:_0x4fb2e1,fileSize:_0x5c854c}=await NTQQFileApi[_0x3efdec(0xc7)](_0x125f45,ElementType[_0x3efdec(0xf8)],_0x4da632);if(_0x3d9bdc['myFzd'](_0x5c854c,0x0))throw _0x3d9bdc['mIZzE'];const _0x14311f=await NTQQFileApi[_0x3efdec(0x10c)](_0x125f45),_0x42abbe={'md5HexStr':_0x289419,'fileSize':_0x5c854c['toString'](),'picWidth':_0x14311f?.[_0x3efdec(0x11c)],'picHeight':_0x14311f?.['height'],'fileName':_0x3412d0,'sourcePath':_0x4fb2e1,'original':!![],'picType':_0x3d9bdc[_0x3efdec(0xf1)](isGIF,_0x125f45)?PicType[_0x3efdec(0x115)]:PicType[_0x3efdec(0xd2)],'picSubType':_0x4da632,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x1540d3};return{'elementType':ElementType['PIC'],'elementId':'','picElement':_0x42abbe};}static async[_0x210ff2(0x109)](_0x8b7179,_0x55a565='',_0x1a0cae=''){const _0x41b579=_0x210ff2,_0x44ce7d={'ZmpUp':function(_0x599668,_0x33a22c){return _0x599668===_0x33a22c;},'tNFsW':_0x41b579(0x10f),'TEfBI':function(_0x2e22c6,_0x393ef1){return _0x2e22c6||_0x393ef1;}},{md5:_0x58f4f9,fileName:_0x37fd02,path:_0x240c78,fileSize:_0x5dcc67}=await NTQQFileApi[_0x41b579(0xc7)](_0x8b7179,ElementType[_0x41b579(0xe7)]);if(_0x44ce7d['ZmpUp'](_0x5dcc67,0x0))throw _0x44ce7d[_0x41b579(0xe1)];const _0x5b4081={'elementType':ElementType[_0x41b579(0xe7)],'elementId':'','fileElement':{'fileName':_0x44ce7d[_0x41b579(0xf3)](_0x55a565,_0x37fd02),'folderId':_0x1a0cae,'filePath':_0x240c78,'fileSize':_0x5dcc67[_0x41b579(0xd9)]()}};return _0x5b4081;}static async[_0x210ff2(0xf4)](_0x4ff42c,_0x4f577e='',_0x434ccd=''){const _0x5101c6=_0x210ff2,_0x3860c2={'bqzrl':function(_0x82db06,_0x515613){return _0x82db06(_0x515613);},'pbqmb':function(_0x4ec464,_0x5aa69f,_0x221877){return _0x4ec464(_0x5aa69f,_0x221877);},'TMxyd':_0x5101c6(0xda),'mTEmJ':function(_0x547416,_0x2e1b2d){return _0x547416(_0x2e1b2d);},'PCMTX':function(_0x45cd84,_0x39908f){return _0x45cd84(_0x39908f);},'KxPJw':_0x5101c6(0x110),'NmvHZ':function(_0x4f3077,_0x4c81f7){return _0x4f3077+_0x4c81f7;},'QhDwI':function(_0x331c2a,_0x1eea2a){return _0x331c2a+_0x1eea2a;},'lbAVD':function(_0x557729,_0x36f71d){return _0x557729===_0x36f71d;},'VAPEp':'文件异常，大小为0','bGuek':_0x5101c6(0xdd),'uDGJI':function(_0x584c2c,_0x1d0f06){return _0x584c2c(_0x1d0f06);},'fIuPy':function(_0x15e503,_0x402c09,_0x253ac9){return _0x15e503(_0x402c09,_0x253ac9);},'JPoYZ':_0x5101c6(0xf0),'dizJV':function(_0x415773,_0x196af0){return _0x415773||_0x196af0;},'nWtyT':function(_0x373b5a,_0x536ec4){return _0x373b5a+_0x536ec4;}},{fileName:_0x343ccd,path:_0x22f285,fileSize:_0x85e272,md5:_0x644f5f}=await NTQQFileApi[_0x5101c6(0xc7)](_0x4ff42c,ElementType['VIDEO']);if(_0x3860c2[_0x5101c6(0xd1)](_0x85e272,0x0))throw _0x3860c2['VAPEp'];let _0x259412=_0x22f285['replace'](_0x2e8279[_0x5101c6(0xff)]+_0x5101c6(0xc6)+_0x2e8279[_0x5101c6(0xff)],_0x2e8279[_0x5101c6(0xff)]+_0x5101c6(0xf9)+_0x2e8279[_0x5101c6(0xff)]);_0x259412=_0x2e8279[_0x5101c6(0x10d)](_0x259412);let _0x43af52={'width':0x780,'height':0x438,'time':0xf,'format':_0x3860c2['bGuek'],'size':_0x85e272,'filePath':_0x4ff42c};try{_0x43af52=await _0x3860c2[_0x5101c6(0xcb)](getVideoInfo,_0x22f285);}catch(_0x50bd91){_0x3860c2[_0x5101c6(0x10b)](logError,_0x3860c2['JPoYZ'],_0x50bd91);}const _0x3c388f=new Promise((_0xcde874,_0xc5a5d8)=>{const _0x4b38b8=_0x5101c6,_0x285c3a={'ByWwp':function(_0x5a74ca,_0x2839f2){return _0x3860c2['bqzrl'](_0x5a74ca,_0x2839f2);}},_0x2dd09c=_0x644f5f+_0x4b38b8(0xdc),_0x18eede=_0x2e8279[_0x4b38b8(0xdf)](_0x259412,_0x2dd09c);_0x3860c2[_0x4b38b8(0xeb)](_0x5ecf38,_0x4ff42c)['on'](_0x4b38b8(0x106),()=>{})['on'](_0x3860c2[_0x4b38b8(0x104)],_0x3bd990=>{const _0x10cddf=_0x4b38b8,_0x13fd4d={'DemSR':function(_0x2386c1,_0x512dc4){const _0x3eb981=_0xfc0f;return _0x3860c2[_0x3eb981(0xfc)](_0x2386c1,_0x512dc4);}};_0x3860c2['pbqmb'](logDebug,_0x3860c2['TMxyd'],_0x3bd990),_0x434ccd?_0x2f17c4[_0x10cddf(0x108)](_0x434ccd,_0x18eede)[_0x10cddf(0xe6)](()=>{const _0x4cad6f=_0x10cddf;_0x13fd4d[_0x4cad6f(0xd5)](_0xcde874,_0x18eede);})['catch'](_0xc5a5d8):_0x2f17c4[_0x10cddf(0x11a)](_0x18eede,defaultVideoThumb)[_0x10cddf(0xe6)](()=>{const _0x36fda4=_0x10cddf;_0x285c3a[_0x36fda4(0x117)](_0xcde874,_0x18eede);})[_0x10cddf(0xc9)](_0xc5a5d8);})['screenshots']({'timestamps':[0x0],'filename':_0x2dd09c,'folder':_0x259412,'size':_0x3860c2[_0x4b38b8(0x10e)](_0x3860c2[_0x4b38b8(0xcd)](_0x43af52[_0x4b38b8(0x11c)],'x'),_0x43af52[_0x4b38b8(0xd3)])})['on'](_0x4b38b8(0x106),()=>{_0x3860c2['mTEmJ'](_0xcde874,_0x18eede);});}),_0x474244=new Map(),_0x4e0bee=await _0x3c388f,_0x585333=(await _0x2f17c4[_0x5101c6(0x10a)](_0x4e0bee))[_0x5101c6(0xfb)];_0x474244[_0x5101c6(0xe9)](0x0,_0x4e0bee);const _0x398033=await _0x3860c2['PCMTX'](calculateFileMD5,_0x4e0bee),_0x5e7065={'elementType':ElementType[_0x5101c6(0xc0)],'elementId':'','videoElement':{'fileName':_0x3860c2[_0x5101c6(0xef)](_0x4f577e,_0x343ccd),'filePath':_0x22f285,'videoMd5':_0x644f5f,'thumbMd5':_0x398033,'fileTime':_0x43af52['time'],'thumbPath':_0x474244,'thumbSize':_0x585333,'thumbWidth':_0x43af52[_0x5101c6(0x11c)],'thumbHeight':_0x43af52[_0x5101c6(0xd3)],'fileSize':_0x3860c2[_0x5101c6(0x107)]('',_0x85e272)}};return _0x5e7065;}static async[_0x210ff2(0x102)](_0xec502){const _0x2e92e3=_0x210ff2,_0x31422={'FWONY':function(_0x5125d2,_0x3220c1){return _0x5125d2(_0x3220c1);},'TDccy':function(_0x358616,_0x239593){return _0x358616===_0x239593;},'RdJqk':_0x2e92e3(0x10f),'fmqcg':function(_0xa56ffa,_0x140806){return _0xa56ffa||_0x140806;}},{converted:_0x558ed7,path:_0x1171c5,duration:_0x2790b2}=await _0x31422['FWONY'](encodeSilk,_0xec502);if(!_0x1171c5)throw'语音转换失败,\x20请检查语音文件是否正常';const {md5:_0x4a1fb7,fileName:_0x5c25ea,path:_0x17ddda,fileSize:_0x1672d3}=await NTQQFileApi[_0x2e92e3(0xc7)](_0x1171c5,ElementType[_0x2e92e3(0xbf)]);if(_0x31422['TDccy'](_0x1672d3,0x0))throw _0x31422[_0x2e92e3(0x103)];return _0x558ed7&&_0x2f17c4[_0x2e92e3(0xd7)](_0x1171c5)[_0x2e92e3(0xe6)](),{'elementType':ElementType[_0x2e92e3(0xbf)],'elementId':'','pttElement':{'fileName':_0x5c25ea,'filePath':_0x17ddda,'md5HexStr':_0x4a1fb7,'fileSize':_0x1672d3,'duration':_0x31422[_0x2e92e3(0x111)](_0x2790b2,0x1),'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static[_0x210ff2(0x11d)](_0x5e4319){const _0x50402e=_0x210ff2,_0xb99af4={'OxNEI':function(_0xcb6b5b,_0x46446a){return _0xcb6b5b(_0x46446a);},'CYRcJ':function(_0xdb4f14,_0x1736a3){return _0xdb4f14>=_0x1736a3;}},_0x5192c5=_0x19c93e[_0x50402e(0xed)],_0x1e8b57=_0x19c93e[_0x50402e(0xc4)],_0x4ca57d=_0x5192c5['find'](_0x5168e8=>_0x5168e8['QSid']===_0x5e4319[_0x50402e(0xd9)]());_0x5e4319=_0xb99af4[_0x50402e(0xdb)](parseInt,_0x5e4319['toString']());let _0x4dfebb=0x1;return _0xb99af4[_0x50402e(0xde)](_0x5e4319,0xde)&&(_0x4dfebb=0x2),_0x4ca57d[_0x50402e(0xcc)]&&(_0x4dfebb=0x3),{'elementType':ElementType[_0x50402e(0x11b)],'elementId':'','faceElement':{'faceIndex':_0x5e4319,'faceType':_0x4dfebb,'faceText':_0x4ca57d[_0x50402e(0x100)],'stickerId':_0x4ca57d['AniStickerId'],'stickerType':_0x4ca57d[_0x50402e(0xcc)],'packId':_0x4ca57d[_0x50402e(0xf6)],'sourceType':0x1}};}static[_0x210ff2(0xf7)](_0x9ef7f,_0x36582f,_0x5d6d3f,_0x331dc8){const _0xf0e042=_0x210ff2,_0x2bb1ef={'nhDyO':_0xf0e042(0x116)};return{'elementType':ElementType['MFACE'],'marketFaceElement':{'emojiPackageId':_0x9ef7f,'emojiId':_0x36582f,'key':_0x5d6d3f,'faceName':_0x331dc8||mFaceCache[_0xf0e042(0xe4)](_0x36582f)||_0x2bb1ef['nhDyO']}};}static[_0x210ff2(0xe2)](_0xe40731){const _0x3c97a5=_0x210ff2,_0x19c642={'aHwBN':'[骰子]'};return{'elementType':ElementType['FACE'],'elementId':'','faceElement':{'faceIndex':FaceIndex['dice'],'faceType':FaceType[_0x3c97a5(0xe2)],'faceText':_0x19c642[_0x3c97a5(0xd4)],'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x210ff2(0xee)](_0x590845){const _0x40bb3e=_0x210ff2;return{'elementType':ElementType[_0x40bb3e(0x11b)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x40bb3e(0x113)],'faceText':_0x40bb3e(0xec),'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x210ff2(0xe3)](_0x519cb0){const _0xb19862=_0x210ff2,_0x5bd485={'RComA':function(_0x551486,_0x358031){return _0x551486!==_0x358031;},'kRKBf':_0xb19862(0x11e)};return _0x5bd485['RComA'](typeof _0x519cb0,_0x5bd485[_0xb19862(0xea)])&&(_0x519cb0=JSON['stringify'](_0x519cb0)),{'elementType':ElementType[_0xb19862(0xd0)],'elementId':'','arkElement':{'bytesData':_0x519cb0,'linkInfo':null,'subElementType':null}};}static[_0x210ff2(0xfa)](_0x45ae07){const _0x11597f=_0x210ff2;return{'elementType':ElementType[_0x11597f(0xce)],'elementId':'','markdownElement':{'content':_0x45ae07}};}static async[_0x210ff2(0xfe)](){const _0x532975=_0x210ff2,_0x2a1e3e={'XQCaB':function(_0x3b8cac,_0x1b4bac){return _0x3b8cac(_0x1b4bac);},'hQpkU':_0x532975(0xca),'mtysL':_0x532975(0xc2),'mILFa':_0x532975(0xe0),'naaMO':_0x532975(0xc1)};let _0xc942aa=await _0x2a1e3e[_0x532975(0xc8)](SignMiniApp,{'prompt':'Bot\x20Test','title':_0x2a1e3e[_0x532975(0xd6)],'preview':_0x2a1e3e['mtysL'],'jumpUrl':_0x2a1e3e[_0x532975(0x118)],'tag':_0x2a1e3e['hQpkU'],'tagIcon':_0x532975(0xc1),'source':_0x2a1e3e['hQpkU'],'sourcelogo':_0x2a1e3e['naaMO']});return{'elementType':ElementType['ARK'],'elementId':'','arkElement':{'bytesData':_0xc942aa,'linkInfo':null,'subElementType':null}};}}