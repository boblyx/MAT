import { generalDebugFunctions } from './functions/general.js';
import { IGeneralDebugFunctions } from './functions/general.js'; 
import { twoProngDebugFunctions } from './functions/two-prong.js';
import { ITwoProngDebugFunctions } from './functions/two-prong.js';
import { threeProngDebugFunctions } from './functions/three-prong.js';
import { IThreeProngDebugFunctions } from './functions/three-prong.js';
import { drawElemFunctions, TDrawElemFunctions } from './functions/draw-elem/draw-elem.js';
import { IDebugElems } from './debug-elem-types.js';


/** @internal */
interface Debug {
    /** Generated by debug object for later inspection */
    generated: Generated;
    /**
     * These functions are meant to be used in the console, e.g. in the 
     * console try typing d.fs.twoProng.traceConvergence(0);
     */
    fs: IDebugFunctions;
    directives: IDirectives;
}


/** @internal */
type GeneratedElems = { [T in keyof IDebugElems]: IDebugElems[T][] };


/** @internal */
interface ITiming {
    //normalize     : number;
    //simplifyPaths : number;
    holeClosers   : number;
    oneAnd2Prongs : number;
    threeProngs   : number;
    sats          : number;
    simplifyMat   : number;
}


/** @internal */
interface Generated {
    elems: GeneratedElems;
    timing: ITiming;
}


/** @internal */
interface IDebugFunctions extends IGeneralDebugFunctions {
    //draw       : IDrawFunctions,
    twoProng   : ITwoProngDebugFunctions,
    threeProng : IThreeProngDebugFunctions,
    drawElem   : TDrawElemFunctions,
}


/** @internal */
interface IDirectives {
    stopAfterHoleClosers: boolean,
    stopAfterHoleClosersNum: number,
    stopAfterTwoProngs: boolean,
    stopAfterTwoProngsNum: number,
    stopAfterThreeProngs: boolean,
    stopAfterThreeProngsNum: number,
}


function enableDebugForMat(debugOn: boolean) {
    if (!debugOn) { 
        (window as any)._debug_ = undefined; 
        return;
    }

    let debug: Debug = (window as any)._debug_;

    debug = { 
        ...debug, 
        generated: { 
            //...debug?.generated,
            ...(!debug ? {} : !debug.generated ? {} : debug.generated),
            elems: { 
                //...debug?.generated?.elems,
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.elems ? {} : debug.generated.elems),
                twoProng_regular     : [],
                twoProng_failed      : [],
                twoProng_notAdded    : [],
                twoProng_deleted     : [],
                twoProng_holeClosing : [],
                looseBoundingBox     : [],
                tightBoundingBox     : [],
                sharpCorner          : [],
                dullCorner           : [],
                vertex               : [],
                threeProng           : [],
                boundingHull         : [],
                mat                  : [],
                sat                  : [],
                cpNode               : [],
                maxVertex            : [],
                leaves               : [],
                culls                : [],
            },
            timing: {
                //...debug?.generated?.timing,
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.timing ? {} : debug.generated.timing),
                holeClosers   : 0,
                oneAnd2Prongs : 0,
                threeProngs   : 0,
                sats          : 0,
                simplifyMat   : 0,
            }
        },
        fs: {
            //...debug?.fs,
            ...(!debug ? {} : !debug.fs ? {} : debug.fs),
            drawElem: {
                //...debug?.fs?.drawElem,
                ...(!debug ? {} : !debug.fs ? {} : !debug.fs.drawElem ? {} : debug.fs.drawElem),
                ...drawElemFunctions
            },
            ...generalDebugFunctions,
            twoProng: twoProngDebugFunctions,
            threeProng: threeProngDebugFunctions, 
        },
        directives: {
            //...debug?.directives,
            ...(!debug ? {} : !debug.directives ? {} : debug.directives),
            stopAfterHoleClosers: false,
            stopAfterHoleClosersNum: undefined!,
            stopAfterTwoProngs: false,
            stopAfterTwoProngsNum: undefined!,
            stopAfterThreeProngs: false,
            stopAfterThreeProngsNum: undefined!,
        }
    };

    (window as any)._debug_ = debug;
}


export { 
    Debug, GeneratedElems, ITiming, Generated,
    IDebugFunctions, IDirectives, enableDebugForMat
}
