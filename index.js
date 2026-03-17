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

  logger.log(colors.cyan("[isuseless] Isuselessing"))
  
  if (shouldRunSlower) {
    const vcache = v
    logger.log(colors.cyan("[isuseless] Notice: running slower"))

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
