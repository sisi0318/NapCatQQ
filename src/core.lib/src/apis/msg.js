function _0x56c9(){const _0x95211f=['发送超时','senderUid','length','WZMrB','456260UdoniF','AFXkW','forEach','getMsgHistory','com.tencent.multimsg','511528gvyskE','DyYRW','lmOSa','set','jlOJY','3875496OGScIr','catch','msgId','vCaAu','onAddSendMsg','toString','1284966eEXlVD','addListener','bytesData','getMultiMsg','onLoginSuccess','131160dFHZYS','10ZTnczP','getMsgsBySeqAndCount','MKWIZ','bVFeM','delete','GoMtE','187KxcfDQ','UPSMO','RWNvj','setMsgRead','getMsgService','uid','VKJoA','elements','app','sswFB','activateChatAndGetHistory','find','session','iQUCx','转发消息超时','FLbkO','GziwE','recallMsg','guildId','getMsgsByMsgId','3550680eJVsCp','parse','multiForwardMsg','1077177gCCrZf','map','pQZej','arkElement','21fYKnHs','QIWSj','2wqykXv','then','forwardMsg','peerUid'];_0x56c9=function(){return _0x95211f;};return _0x56c9();}const _0x3af628=_0x54fa;(function(_0x136533,_0x25234f){const _0x5c235d=_0x54fa,_0x4e4bdb=_0x136533();while(!![]){try{const _0x41061d=-parseInt(_0x5c235d(0x16b))/0x1*(-parseInt(_0x5c235d(0x15e))/0x2)+parseInt(_0x5c235d(0x158))/0x3+parseInt(_0x5c235d(0x17b))/0x4*(-parseInt(_0x5c235d(0x13b))/0x5)+parseInt(_0x5c235d(0x176))/0x6*(parseInt(_0x5c235d(0x15c))/0x7)+-parseInt(_0x5c235d(0x170))/0x8+parseInt(_0x5c235d(0x155))/0x9+parseInt(_0x5c235d(0x166))/0xa*(-parseInt(_0x5c235d(0x141))/0xb);if(_0x41061d===_0x25234f)break;else _0x4e4bdb['push'](_0x4e4bdb['shift']());}catch(_0x4fdabc){_0x4e4bdb['push'](_0x4e4bdb['shift']());}}}(_0x56c9,0x8e12b));function _0x54fa(_0x1595b7,_0x21396f){const _0x56c93f=_0x56c9();return _0x54fa=function(_0x54fa5e,_0x2da588){_0x54fa5e=_0x54fa5e-0x13b;let _0x4e9664=_0x56c93f[_0x54fa5e];return _0x4e9664;},_0x54fa(_0x1595b7,_0x21396f);}import{selfInfo}from'@/core/data';import{log,logError}from'@/common/utils/log';import{sleep}from'@/common/utils/helper';import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener[_0x3af628(0x174)]=_0x4e737f=>{const _0x516b19=_0x3af628,_0x20af6c={'pQZej':function(_0x3d71d9,_0x40a8c0){return _0x3d71d9(_0x40a8c0);},'VKJoA':function(_0x53a81a,_0x324ade){return _0x53a81a instanceof _0x324ade;}};for(const [_0x3386ec,_0x5cd1a6]of sentMsgTasks){_0x20af6c[_0x516b19(0x15a)](_0x5cd1a6,_0x4e737f),sentMsgTasks[_0x516b19(0x13f)](_0x3386ec);}if(sendMessagePool[_0x4e737f[_0x516b19(0x161)]]){const _0x159318=sendMessagePool[_0x4e737f[_0x516b19(0x161)]]?.(_0x4e737f);_0x20af6c[_0x516b19(0x147)](_0x159318,Promise)&&_0x159318['then']()[_0x516b19(0x171)](logError);}},msgListener['onMsgInfoListUpdate']=_0x39616d=>{const _0x175702=_0x3af628,_0x119962={'FLbkO':function(_0x4e392a,_0x34c659){return _0x4e392a(_0x34c659);},'GziwE':function(_0x242249,_0x18e4f2){return _0x242249(_0x18e4f2);}};_0x39616d[_0x175702(0x168)](_0x74424d=>{const _0x334e82=_0x175702;new Promise((_0x2727be,_0x4a632f)=>{const _0x38fb76=_0x54fa;for(const _0x5b733a in sendSuccessCBMap){const _0x539a6a=sendSuccessCBMap[_0x5b733a],_0x56ba4f=_0x119962[_0x38fb76(0x150)](_0x539a6a,_0x74424d),_0xea5c7e=_0x1f517d=>{_0x1f517d&&delete sendSuccessCBMap[_0x5b733a];};_0x56ba4f instanceof Promise?_0x56ba4f['then'](_0xea5c7e):_0x119962[_0x38fb76(0x151)](_0xea5c7e,_0x56ba4f);}})[_0x334e82(0x15f)]()[_0x334e82(0x171)](log);});},setTimeout(()=>{const _0x2ea2d1=_0x3af628;napCatCore[_0x2ea2d1(0x17a)](()=>{const _0x2e7864=_0x2ea2d1;napCatCore[_0x2e7864(0x177)](msgListener);});},0x64);export class NTQQMsgApi{static async['setEmojiLike'](_0x55b21d,_0x57b114,_0x1af6ba,_0x25fd82=!![]){const _0x109bb7=_0x3af628,_0x4dccb6={'jlOJY':function(_0x1d94f1,_0x163df3){return _0x1d94f1>_0x163df3;}};return _0x1af6ba=_0x1af6ba[_0x109bb7(0x175)](),napCatCore[_0x109bb7(0x14d)][_0x109bb7(0x145)]()['setMsgEmojiLikes'](_0x55b21d,_0x57b114,_0x1af6ba,_0x4dccb6[_0x109bb7(0x16f)](_0x1af6ba[_0x109bb7(0x164)],0x3)?'2':'1',_0x25fd82);}static async['getMultiMsg'](_0x147562,_0x128b44,_0x3d7b79){const _0x3e4d81=_0x3af628;return napCatCore[_0x3e4d81(0x14d)][_0x3e4d81(0x145)]()[_0x3e4d81(0x179)](_0x147562,_0x128b44,_0x3d7b79);}static async[_0x3af628(0x154)](_0x2e7bb0,_0x3e8564){const _0x5117d9=_0x3af628;return await napCatCore[_0x5117d9(0x14d)][_0x5117d9(0x145)]()['getMsgsByMsgId'](_0x2e7bb0,_0x3e8564);}static async[_0x3af628(0x13c)](_0x21acc3,_0x10ac25,_0x2956e3,_0x323580,_0x4d5b96){const _0xf5baa8=_0x3af628;return await napCatCore[_0xf5baa8(0x14d)][_0xf5baa8(0x145)]()['getMsgsBySeqAndCount'](_0x21acc3,_0x10ac25,_0x2956e3,_0x323580,_0x4d5b96);}static async['activateChat'](_0x1ea5f3){}static async[_0x3af628(0x14b)](_0x3b8cf5){}static async[_0x3af628(0x144)](_0x5f37fd){const _0x3d098d=_0x3af628;return napCatCore[_0x3d098d(0x14d)]['getMsgService']()['setMsgRead'](_0x5f37fd['chatType'],_0x5f37fd[_0x3d098d(0x161)],_0x5f37fd[_0x3d098d(0x153)]);}static async[_0x3af628(0x169)](_0x1818dc,_0x812c6d,_0x158502){const _0x47c830=_0x3af628;return napCatCore['session'][_0x47c830(0x145)]()['getMsgsIncludeSelf'](_0x1818dc,_0x812c6d,_0x158502,!![]);}static async['fetchRecentContact'](){}static async[_0x3af628(0x152)](_0x38408f,_0x1d721e){const _0x2b3ddd=_0x3af628;await napCatCore[_0x2b3ddd(0x14d)][_0x2b3ddd(0x145)]()[_0x2b3ddd(0x152)]({'chatType':_0x38408f['chatType'],'peerUid':_0x38408f[_0x2b3ddd(0x161)]},_0x1d721e);}static async['sendMsg'](_0x3b4c76,_0x4293ed,_0x2426a3=!![],_0xdd3543=0x2710){const _0x209607=_0x3af628,_0x2b67bb={'vCaAu':function(_0x42ab66,_0x368644){return _0x42ab66>_0x368644;},'DyYRW':_0x209607(0x162),'WZMrB':function(_0xb12f80,_0x29d82b){return _0xb12f80(_0x29d82b);},'RWNvj':function(_0xc3dea6){return _0xc3dea6();},'wItLG':function(_0x55700d,_0x393a66){return _0x55700d(_0x393a66);},'sswFB':function(_0xb1722,_0x149020,_0x2ffb63){return _0xb1722(_0x149020,_0x2ffb63);}},_0x41c01b=_0x3b4c76[_0x209607(0x161)];let _0x331d7f=0x0;const _0x521ccf=async()=>{const _0xd2b883=_0x209607;if(_0x2b67bb[_0xd2b883(0x173)](_0x331d7f,_0xdd3543))throw _0x2b67bb['DyYRW'];const _0x3c1c21=sendMessagePool[_0x3b4c76[_0xd2b883(0x161)]];if(_0x3c1c21)return await _0x2b67bb[_0xd2b883(0x165)](sleep,0x1f4),_0x331d7f+=0x1f4,await _0x2b67bb[_0xd2b883(0x143)](_0x521ccf);else return;};return await _0x2b67bb[_0x209607(0x143)](_0x521ccf),new Promise((_0x26fea3,_0x2ae5ce)=>{const _0x55caa9=_0x209607,_0x3ab967={'lmOSa':function(_0xdc4681,_0x2aa5f9){return _0x2b67bb['wItLG'](_0xdc4681,_0x2aa5f9);},'UPSMO':_0x2b67bb[_0x55caa9(0x16c)]};let _0x709e4c=![],_0xa03d1d=null;const _0x5a4872=_0x2b67bb[_0x55caa9(0x143)](randomUUID);sendSuccessCBMap[_0x5a4872]=_0x4014ad=>{const _0xeadc6=_0x55caa9;if(_0x4014ad[_0xeadc6(0x172)]===_0xa03d1d?.['msgId']){if(_0x4014ad['sendStatus']===0x2)return delete sendSuccessCBMap[_0x5a4872],_0x709e4c=!![],_0x3ab967[_0xeadc6(0x16d)](_0x26fea3,_0x4014ad),!![];return![];}return![];},sendMessagePool[_0x41c01b]=async _0x4ab22f=>{delete sendMessagePool[_0x41c01b],_0xa03d1d=_0x4ab22f;},_0x2b67bb[_0x55caa9(0x14a)](setTimeout,()=>{const _0x2372b7=_0x55caa9;if(_0x709e4c)return;delete sendMessagePool[_0x41c01b],delete sendSuccessCBMap[_0x5a4872],_0x2ae5ce(_0x3ab967[_0x2372b7(0x142)]);},_0xdd3543);const _0x27012f=napCatCore['session'][_0x55caa9(0x145)]()['sendMsg']('0',_0x3b4c76,_0x4293ed,new Map());});}static async[_0x3af628(0x160)](_0x2c9987,_0x3430ed,_0x86eb7){const _0x37d853=_0x3af628;return napCatCore['session'][_0x37d853(0x145)]()['forwardMsg'](_0x86eb7,_0x2c9987,[_0x3430ed],new Map());}static async[_0x3af628(0x157)](_0x555717,_0x45a635,_0x4dd4ce){const _0x514804=_0x3af628,_0x2d7583={'MKWIZ':_0x514804(0x16a),'iQUCx':function(_0x1e8485,_0x343c3f){return _0x1e8485==_0x343c3f;},'bVFeM':function(_0x39f6d2,_0x3e081c){return _0x39f6d2(_0x3e081c);},'GoMtE':_0x514804(0x14f),'AFXkW':function(_0x17aad3,_0x3f726e,_0x11ac30){return _0x17aad3(_0x3f726e,_0x11ac30);}},_0x24bd56=_0x4dd4ce[_0x514804(0x159)](_0x2f328c=>{return{'msgId':_0x2f328c,'senderShowName':selfInfo['nick']};});return new Promise((_0x5a3220,_0x161464)=>{const _0x43051b=_0x514804,_0x5f50bb={'QIWSj':function(_0x6148dd,_0x4bac89){const _0x387cab=_0x54fa;return _0x2d7583[_0x387cab(0x13e)](_0x6148dd,_0x4bac89);},'kzmWx':_0x2d7583[_0x43051b(0x140)]};let _0x5eb1cb=![];const _0x42db44=_0x32e569=>{const _0x28fda6=_0x43051b,_0x58f892=_0x32e569[_0x28fda6(0x148)][_0x28fda6(0x14c)](_0x10630d=>_0x10630d[_0x28fda6(0x15b)]);if(!_0x58f892)return;const _0x963bc9=JSON[_0x28fda6(0x156)](_0x58f892[_0x28fda6(0x15b)][_0x28fda6(0x178)]);if(_0x963bc9[_0x28fda6(0x149)]!=_0x2d7583[_0x28fda6(0x13d)])return;_0x2d7583['iQUCx'](_0x32e569[_0x28fda6(0x161)],_0x45a635[_0x28fda6(0x161)])&&_0x2d7583[_0x28fda6(0x14e)](_0x32e569[_0x28fda6(0x163)],selfInfo[_0x28fda6(0x146)])&&(_0x5eb1cb=!![],_0x2d7583[_0x28fda6(0x13e)](_0x5a3220,_0x32e569));};sentMsgTasks[_0x43051b(0x16e)](randomUUID(),_0x42db44),_0x2d7583[_0x43051b(0x167)](setTimeout,()=>{const _0x3955c2=_0x43051b;!_0x5eb1cb&&_0x5f50bb[_0x3955c2(0x15d)](_0x161464,_0x5f50bb['kzmWx']);},0x1388),napCatCore[_0x43051b(0x14d)][_0x43051b(0x145)]()['multiForwardMsgWithComment'](_0x24bd56,_0x555717,_0x45a635,[],new Map());});}}