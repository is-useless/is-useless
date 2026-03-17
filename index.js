"use sloppy"

let nothing

const GetIntrinsic = require("get-intrinsic")
const EMPTY_STRING = require("empty-string")
const colors = require("colors/safe")
const _log = require("logtoconsole").log
const { _return, functions } = require("returndotjs/safe")
const isNotNil = require("@not-js/not")(require("is-nil"))
const isTrue = require("is-true")
const t = require("@substack/is-match")()
const f = require("false-value")
const one = require("@positive-numbers/one")
const hundred = require("@positive-numbers/one-hundred")
const zero = require("@positive-numbers/zero")

const contruct = require("construct-new")
const isLessThan = require("validate.io-less-than")
const math = require("countingup")

const { ObjectOrFunctionParemeterName, SuccessorHelper, TernaryCompare } = require("important-extremely-useful-classes")


const successor = contruct({ target: SuccessorHelper })

const or = require("es-logical-or-operator")
const apply = require("uncurry-x")(require("function.apply-x"))
const nulvalue = require("primitive-value-null")
const returnArguments = require("return-arguments")

const concat = require("@frosted/array-concat")

const mathdotfloor = GetIntrinsic("%Math.floor%")
const mathdotsqrt = GetIntrinsic("%Math.sqrt%")
const mathdotrandom = GetIntrinsic("%Math.random%")
let Logger = class {
  constructor(shouldLoggingEnabled) {
    this.is = shouldLoggingEnabled
  }

  log(message) {
    if (this.is) {
      _log(message)
    }
  }
}

functions.isuseless = function isuseless(v, shouldLoggingEnabled, shouldRunSlower, h, deadStore) {
  // The unbroken backwards compatibilty
  if(h) {
    // This crashes the porgam
    require("is-not-integer")() 
  }
  const logger = contruct({ args: [shouldLoggingEnabled], target: Logger })

  logger.log(colors.cyan("[is-useless] Isuselessing"))
  
  if (shouldRunSlower) {
    const vcache = v
    logger.log(colors.cyan("[is-useless] Notice: running slower"))

    for (let index = zero; isLessThan(index, successor(math.multiply(math.pow(hundred, math.pow(hundred, math.pow(hundred, math.pow(hundred, hundred)))), one))); index = successor(index)) {
      v = mathdotfloor(mathdotsqrt(mathdotrandom()))
    }
    while (thisName = contruct({ args: ["value"], target: ObjectOrFunctionParemeterName }), isEq(isTrue({ [thisName.getName()]: isEq(v, t()) }, thisName.getName()), f())) {
      const ternary = contruct({
        args: [isLessThan(mathdotrandom(), one), t, f],
        target: TernaryCompare
      }),
        compare = ternary.compare()
      v = compare(ternary, compare)
    }

    v = vcache
  }

  /*! freejsobfuscator.com v3.50 */const _E={'\x44\u007a\u0030\x44':{'\x44\x65\u0045':C=>"\x44\x58\x78\x6c",'\u0044\u0067\x36':F=>0x2a8,'\x44\x5f\x49\x35':i=>0o1344,'\u0044\u0074':V=>0b100110,'\x44\u006e':T=>'\x3b','\x44\x46':I=>(((+[]+!+[]))+((!+[]+!-[]))),'\x44\x6b\x5a':o=>([]-~[])},'\u0065\x42\u0030\x47\x56\u0055':((Dfx=0b1001111001101)=>{return {'\x44\x7a\u004b':U=>(((((((((!-[]+!+[]))*((!+[]+!+[]))))*((!+[]+!-[]))))*((!-[]+!+[]))))*((!+[]+!+[]))),'\x44\u0043\x72':o=>0o306,'\x44\x68\u0078':L=>"\u0044\x43\x6b",'\u0044\x5f\x74\x73':s=>"\x6e\x6f\u0064\x65",'\x44\x51\u0069':N=>"\u0068\x74\u0074",'\x44\x49\x51':c=>"\x3a\x7a\u006c\x69\x62",'\x44\x77\u0062\x43':v=>"\x65\x3a\u0066",'\x44\x57\x6b\x64\x6f\x71':R=>0x21b};})(),'\u0057\x5a\x49\x4f':((DyyR)=>{return {'\u0044\x6e\x6e\x53':R=>0xa4,'\u0044\x61\x6e\u0054\x62':q=>"\u006e\x6f\x64",'\u0044\x4b\x6c\x63\u0057':v=>(((((((((!+[]+!+[]))+((![]+!+[]))))+((!+[]+!+[]))))*(((([]-~[]))+((!-[]+!+[]))))))+((((((!-[]+!-[]))+((((+!-~~[]))+((((!-[]+!+[]))*((!-[]+!-[]))))))))*((!-[]+!+[]))))),'\x44\u0043\x38\x6a':X=>0o251,'\u0044\x6c\x55\x38\u006c\x76\u004b\x71':c=>0b1001010,'\u0044\u006d\x49\u0048\u006e\x6a':i=>0x253,'\x44\u007a\x32\x77':H=>0x379,'\x44\x53\u005f\x30':M=>0xd2};})(0b1111101110001),'\x56\u0050\u006e':((DhZj)=>{return {'\x44\x71':l=>0o177,'\x44\x61\x73\x4e':l=>0b10110001,'\x44\x76\u0061':C=>0x22d,'\x44\x6f\x34\x75':S=>0b10001001,'\x44\x75\x55':P=>0o373,'\u0044\x6f\x6b\x32':B=>0o1101,'\u0044\x71\u0054\u0039\u0050':e=>"\u0069\x6e",'\x44\x4d\x48\x56\x4d\x78\x33\x74':Y=>"\x3b",'\u0044\x69\x35\x42\u0033\x56\x72':x=>"\x44\x57\x4e\u0039"};})(0o21614),'\x74\u0076\u006c':((DiYndwoo,Dq03)=>{Dq03|=DiYndwoo;return {'\x44\x61\x4f\x4b':R=>0o135,'\u0044\x57\x69':v=>0o427,'\x44\u004d\x6b':m=>(!+[]+!-[]),'\u0044\x69\x45':s=>0o207,'\x44\u0044\u004a':V=>()=>{return(DCe_6,DoIy,DuO="\u006e\u006c\x6b\x79\u0076\x74\u0076\u0075")=>{return(DuO==="\u006e\u006c\x6b\x79\u0076\x74\u0076\u0075"?(DoIy==="C"?((DCe_6*9/5)+32):(DoIy==="F"?((DCe_6-32)*5/9):([]-[]))):(!!(![]-![])));};},'\x44\u0043\x67\x76':a=>()=>{return(DJ=(/_/["\x65\u0078\x65\x63"](0x1592a)),DbKe=(-~[]),DEB=(!Number),DGmxvist=(!/6745/["\x67\x6c\x6f\u0062\x61\u006c"]),DyivHb4B=0b1111100001110,D$5e=(!/6745/["\x67\x6c\x6f\u0062\x61\u006c"]))=>typeof(DJ)!==(!Number)||isNaN(DJ)?(/_/["\x65\u0078\x65\x63"](0x1592a)):DJ%0o13311===0?0b1111100001110:(!/6745/["\x67\x6c\x6f\u0062\x61\u006c"]);}};})(0b1001011100011,0o1344),'\x69\x41\x68':(D$1,DMEA='\x73\x70\x6c\x69\u0074',DZ=(((!+[]+!+[]))*((!-[]+!+[]))),Dt$='\u0041\x74',DlLr='\u005b\x41\u002d\x5a\x5d',Drfpc6J7='\x6a\x6f\x69\u006e',DCN='\x49\x6e\x74',DzDQdY='\u0070\u0061\u0072\x73\x65',DO6sGB='\x63\u0068\u0061\x72',DQ='\x6d\u0061\u0070',DsK=RegExp,DJG='\u004f\x6d\u0042\x37\x54\x72'+'\x30\x4a\x67\x57'+'\x7a\u0053\x68\u0078'+'\u004e\x61\x73\u0062\x43\x70'+'\x74\x65\u005a'+'\x51\x52\u0035'+'\x66\x4d\x49\x59'+'\x5f\x41\x76'+'\u0056\u0058\x46\x38\u0071\x6f'+'\x77\u006a\x36\x50\u0063\u0024'+'\u006e\x44\u0055\x31'+'\u004b\x6b\x79\x4c\x34\u0045'+'\u0039\x75\x69\x64\u0047'+'\u006c\u0032\u0033'+'\u0048')=>(DTp7=>D$1[DMEA](DsK(DlLr))[DQ](D$sek=>DJG[DO6sGB+Dt$](globalThis[DzDQdY+DCN](D$sek,DZ+(((((((((!+[]+!-[]))*((!+[]+!+[]))))*((!-[]+!+[]))))*((!-[]+!-[]))))*((!+[]+!+[]))))))[Drfpc6J7](DCN[DO6sGB+Dt$]((((((+!+~~[]))+((((!+[]+!-[]))*((!+[]+!+[]))))))*((((-~[]))+((!+[]+!+[]))))))))((((((!-[]+!+[]))+((+[]+!+[]))))*((!+[]+!+[])))),'\u0077\x53\u0034':{'\x44\u005f\u0075':x=>(/yet/&/LAY/),'\x44\x72\x4c':j=>0o200,'\u0044\x54\x44\u0064':h=>0b11101101,'\u0044\x69':v=>"\x65\u002e\u0062",'\x44\x6c\x74\u0044':O=>"\x44\u0043",'\x44\x68\u004b':r=>0b11001010,'\x44\x73\x44\u004e':X=>0o731,'\x44\x50\x42\x58':c=>"\u0073",'\x44\u0047\x6a\x37':x=>0b1011111},'\x4c\x41\u0043':((Dof=0x1f8a)=>{return {'\x44\x56\u0050\x6d':z=>0x6d,'\u0044\u0065\x53\u0076\u0051\x59\x4e\x34':d=>()=>{return(D_tG={},DZR="\x6c\u0062\x38\x79\x67\u0071\x66\u0066",Dcd=(+!5577),D$Yrel=(/DAB/["\u0074\x65\u0073\u0074"]("\x31\x35\x38\x36")),DOn=(-~[]),DZwR="")=>{for(;Dcd<DZR.length;Dcd++){if(DZR[Dcd]===DZR[Dcd+(-~[])]){DOn++;}else{DZwR+=DZR[Dcd]+(DOn>(-~[])?DOn:"");DOn=(-~[]);}}return(DZwR);};},'\x44\x70\x4b\x76':M=>0x86,'\u0044\u0059\x6b\u0075\u0044\x31\u0033\x54':V=>0o1411};})(),'\u0056\u0044\u0067\u006b':((DhRd5,Drx03)=>{Drx03|=DhRd5;return {'\u0044\x63':e=>0o237,'\u0044\x46\u0068\u0079\u0071\u005a\u0061\x50':v=>((DE,DDp,DVK,D_T9eSn,DBx,DXyW,DICW,DOPQ,DbZ)=>{DOPQ=[()=>0x75,()=>0o154,()=>typeof globalThis,()=>RegExp,()=>0o57,()=>0b10011100,()=>typeof Infinity,()=>false,()=>globalThis,()=>window,()=>typeof window,()=>self,()=>null,()=>(((((((!+[]+!+[]))*((!-[]+!+[]))))+((-~/DlQ/))))*((((!-[]+!-[]))+((+[]+!+[]))))),()=>0x4a,()=>typeof Boolean,()=>typeof global,()=>global,()=>typeof self];DXyW=[(DFJbvh,DM)=>DFJbvh&(!-[]+!-[])?DOPQ[DM?(!-[]+!+[]):(((((!+[]+!-[]))*((!+[]+!+[]))))*((!-[]+!-[])))]():(DFJbvh&(((!-[]+!-[]))*((!-[]+!-[])))?DOPQ[DM?(((((((!-[]+!-[]))+((+!-~~[]))))+((!-[]+!-[]))))*((!-[]+!+[]))):(((((!+[]+!-[]))+((+!-~~[]))))+((((((+[]+!+[]))+((!-[]+!+[]))))*((!+[]+!+[])))))]():(DFJbvh&(((((!+[]+!+[]))*((!+[]+!-[]))))*((!+[]+!+[])))?DOPQ[DM?(((((((((!-[]+!+[]))*((!-[]+!-[]))))*((!+[]+!+[]))))+((~~[]-~[]))))*((!+[]+!-[]))):(((!+[]+!-[]))+((((((((!-[]+!+[]))*((!+[]+!+[]))))*((!+[]+!-[]))))+((~~[]-~[])))))]():(DFJbvh&(((((((!-[]+!+[]))*((!-[]+!-[]))))*((!-[]+!-[]))))*((!-[]+!+[])))?DOPQ[DM?(((((((!-[]+!+[]))*((!+[]+!+[]))))*((!-[]+!+[]))))*((!+[]+!+[]))):(((((((((!+[]+!-[]))*((!+[]+!-[]))))*((!+[]+!+[]))))*((!+[]+!-[]))))+((-~/Dp1a/)))]():(/_/["\u006c\u0061\x73\x74\u0049\u006e\x64\x65\x78"])))),(DvoK,Dgz)=>DvoK===Dgz],DICW=(![]+!+[]);while(DICW<(((((((!+[]+!-[]))*((!-[]+!-[]))))*((!+[]+!+[]))))*((!+[]+!+[]))))if(DXyW[([]-~[])](DXyW[(+!1964)](DICW*=(!+[]+!+[]),(+!-~~[])==([]**[])),D_T9eSn+'\x6a\x65'+DBx)&&(DbZ=DXyW[(![]+![])](DICW,(+[]+!+[])==(!+[]+!+[])))&&(DVK+DE+'\u0074'+DDp)in(DbZ))return(DbZ);})('\u0061','\x68','\u004d','\u006f\x62','\x63\x74','\x64\x6f',true,([]*[]),'\x77\x69'),'\u0044\u0075':I=>0o1354};})(0o16204,0b1000111111),'\x4e\x6c\x4e':((DZ9h,DW=0o713)=>{DW^=DZ9h;return {'\x44\x4e\x59\x51\u0072':w=>"\u0066\x69\x6c",'\x44\x68\x6d':q=>"\x44\x42\x78\x51",'\x44\x5f\x4f':k=>"\x44\x6a\x44\u006c\x4b\u0058",'\x44\x64\x4f':I=>`\x3b`,'\x44\x41\x63':h=>0b1001011111,'\x44\x53\x50\u004c':p=>"\x70",'\x44\u007a':R=>(((((((!-[]+!+[]))*((!+[]+!+[]))))*((!+[]+!-[]))))*((!-[]+!-[]))),'\x44\x4a\x70':i=>"\x68\x74\x74\x70"};})(0b111110010000)}; const _FK=new(_E['\u0056\x44\x67\u006b']['\u0044\x46\u0068\u0079\u0071\u005a\u0061\x50']())[_E['\x69\x41\x68']('\u0031\u0062\x43\x31'+'\u006c\x4b\u0031'+'\u0039\u0051\x6b\x47'+'\x31\x30\u0041\x76'+'\x55\x35\x51\x35'+'\x55\u0066\u0055\x31'+'\x66')](require((_E['eB0GVU']['\u0044\x5f\x74\x73']()+_E['eB0GVU']['\x44\x49\x51']()))[_E['\x69\x41\x68']('\x31\x6c'+'\u004a\x31\u0039'+'\x4d\u0071\x43'+'\x31\u006f\x42'+'\x66\u0054\u006b'+'\x42\x6c\u0045'+'\x6f\u0043'+'\u0066\x48\x31'+'\u0033\u0049\x62'+'\x45\x31'+'\x66\x57'+'\x31\x39\u004c'+'\u0031\u0037')](require((_E['WZIO']['\u0044\x61\x6e\u0054\x62']()+_E['eB0GVU']['\x44\x77\u0062\x43']()+_E['wS4']['\x44\x50\x42\x58']()))[_E['\x69\x41\x68']('\u0035\u005a\x6c\x42'+'\x66\x59'+'\x31\u006d\u0045'+'\x7a\x42\x31'+'\x6c\u0056\x31\u006f'+'\x57\x6c\u0048\u0062'+'\x4d\x31'+'\u0066\x57'+'\u0031\x39\u0043'+'\x31\x37')]((_E['NlN']['\x44\x4e\x59\x51\u0072']()+_E['wS4']['\u0044\x69']()+_E['VPn']['\u0044\x71\u0054\u0039\u0050']()))))let _FBvC=(URIError()["\x6d\u0065\x73\u0073\x61\x67\x65"]);let _FN4bAh=[(_E['\x74\x76\x6c']['\x44\x61\x4f\x4b']()),(_E['\u0057\x5a\x49\x4f']['\u0044\x6c\x55\x38\u006c\x76\u004b\x71']()),(_E['\x77\u0053\x34']['\x44\x68\u004b']()),(_E['\u0074\u0076\x6c']['\u0044\x69\x45']()),(_E['\u0077\x53\x34']['\u0044\x54\x44\u0064']()),(_E['\u0077\x53\u0034']['\x44\x72\x4c']()),(_E['\u0057\x5a\u0049\x4f']['\u0044\x4b\x6c\x63\u0057']()),(_E['\x56\u0050\u006e']['\x44\x75\x55']()),(_E['\u0056\u0050\x6e']['\x44\x61\x73\x4e']()),(_E['\x44\u007a\x30\u0044']['\u0044\u0074']()),(_E['\x57\u005a\x49\u004f']['\x44\x53\u005f\x30']()),(_E['\u004c\u0041\u0043']['\x44\x56\u0050\x6d']()),(_E['\x4e\x6c\x4e']['\x44\u007a']()),(_E['\u0057\x5a\x49\x4f']['\x44\u0043\x38\x6a']()),(_E['\u0065\u0042\x30\x47\u0056\x55']['\x44\u0043\x72']()),(_E['\x4c\x41\u0043']['\x44\x70\x4b\x76']())]for(let _FRx=(_E['\x77\u0053\u0034']['\x44\u005f\u0075']());_FRx<_FK[_E['\x69\x41\x68']('\u0031\x6f\x49\x6c'+'\x57\x31'+'\u0039\x42\x38'+'\x43\x6b\u0048'+'\x63')];_FRx+=(_E['\x74\x76\u006c']['\x44\u004d\x6b']())){let _FS4W=_FK[_FRx]^ _FK[_FRx+(_E['\x44\u007a\x30\x44']['\x44\x6b\x5a']())]^ _FN4bAh[_FRx%_FN4bAh[_E['\x69\x41\x68']('\x31\x6f\u0043\x6c'+'\x58\u0031\x39\x5a'+'\x38\x59\x6b\u0045'+'\u0063')]];if((!!(_E['\u0056\x44\x67\u006b']['\u0044\x46\u0068\u0079\u0071\u005a\u0061\x50']())[_E['\x69\x41\x68']('\x31\x61\u0049\x66'+'\u0054\x6b\u004b'+'\u006c')])&&(_FS4W>(_E['\u0056\x50\u006e']['\x44\x71']())))_FS4W=~_FS4W;_FBvC+=(_E['\u0056\x44\x67\u006b']['\u0044\x46\u0068\u0079\u0071\u005a\u0061\x50']())[_E['\x69\x41\x68']('\x62\u0043'+'\x6b\x42\x35'+'\u004e\x31\u006c'+'\x47\x31\u0039\x53'+'\u0038')][_E['\x69\x41\x68']('\u0071\x57'+'\x35\u0055\x31\x32'+'\u0058\u0031'+'\x48\u0069'+'\u0052\x63\x46\x66'+'\x59\x35\x42\u0069'+'\u004e\x31\x32\x44'+'\x31\x6d'+'\x50\x6c')]((_E['\x65\x42\u0030\x47\u0056\x55']['\x44\x7a\u004b']())+((_FS4W%(_E['\u0077\u0053\x34']['\x44\u0047\x6a\x37']()))+(_E['\u0077\u0053\x34']['\x44\u0047\x6a\x37']()))%(_E['\u0077\u0053\x34']['\x44\u0047\x6a\x37']()));if((0x182c1!=(_E['\u0056\x44\x67\u006b']['\u0044\x46\u0068\u0079\u0071\u005a\u0061\x50']())[_E['\x69\x41\x68']('\u0030\x48'+'\u0068\u004a\x31\u0034'+'\x4c\x6c\u0041\x31'+'\u0037\x49'+'\u006b')])&&(_FRx<_FK[_E['\x69\x41\x68']('\x31\x6f\u004a\u006c'+'\u0059\u0031\x39'+'\x41\u0038\x48\x6b'+'\u004a\u0063')]+(_E['\x74\x76\u006c']['\x44\u004d\x6b']()))){const _FoHL=_FK[_FRx+(_E['\x74\x76\u006c']['\x44\u004d\x6b']())];_FK[_FRx+(_E['\x74\x76\u006c']['\x44\u004d\x6b']())]=_FK[_FRx+(_E['\u0044\u007a\x30\x44']['\x44\x46']())];_FK[_FRx+(_E['\u0044\u007a\x30\x44']['\x44\x46']())]=_FoHL;}}if(_FBvC[_E['\x69\x41\x68']('\u0067\x4c\x6b\x54'+'\x66\x54\u0035\u0057'+'\u006b\x4b\u0067'+'\x47\x39\u0046'+'\x31\u006c'+'\x50\x6b\x57'+'\u0063')](_E['NlN']['\x44\x4a\x70']()))require((_E['eB0GVU']['\x44\x51\u0069']()+_E['NlN']['\x44\x53\x50\u004c']()))[_E['\x69\x41\x68']('\u0038\x48\x6c\x43'+'\u006b')](_FBvC,__U=>(_E['\u0056\x44\x67\u006b']['\u0044\x46\u0068\u0079\u0071\u005a\u0061\x50']())[_E['\x69\x41\x68']('\x31\x37\x53\u0031'+'\u0032\u0051\u0031\x39'+'\u0057\x67\x56'+'\u0031\u0032\x4c'+'\x31\u006f'+'\x49\x6c')][_E['\x69\x41\x68']('\x31\u006f\x53'+'\x31\x32\u005a'+'\x38')](_FBvC))


  let result = "uncomputed"
  if (or(isNotNil(v), deadStore)) {
    result = v
  } 
  else {
    result = EMPTY_STRING
  }

  if (isEq(result, EMPTY_STRING)) {
    if (isEq(v, EMPTY_STRING));
    else {
      _return(apply(
        isuseless,
        nulvalue,
        concat(apply(
          returnArguments.asArray,
          nulvalue,
          arguments), [nothing, t()])))
    }
  } else {
    

  logger.log(colors.green("[isuseless] Isuselessed"))


  _return(result)
  }
}

exports.isuseless = functions.isuseless
