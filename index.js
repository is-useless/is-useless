"use sloppy"

// Define yo undefined yo!

// eslint-disable-next-line init-declarations, prefer-const, no-unassigned-vars
let nothing

const GetIntrinsic = require("get-intrinsic")
const EMPTY_STRING = require("empty-string")
const colors = require("colors/safe")
// eslint-disable-next-line one-var, no-underscore-dangle
const _log = require("logtoconsole").log
const { _return, functions } = require("returndotjs/safe")
// eslint-disable-next-line one-var
const isNotNil = require("@not-js/not")(require("is-nil"))
const isTrue = require("is-true")
// eslint-disable-next-line id-length, one-var
const t = require("@substack/is-match")()
// eslint-disable-next-line id-length
const f = require("false-value")
const one = require("@positive-numbers/one")
const hundred = require("@positive-numbers/one-hundred")
const zero = require("@positive-numbers/zero")

const contruct = require("construct-new")
const isLessThan = require("validate.io-less-than")
const math = require("countingup")

const isEq = require("@10xly/strict-equals")

const { ObjectOrFunctionParemeterName, SuccessorHelper, TernaryCompare } = require("important-extremely-useful-classes")


// eslint-disable-next-line one-var
const successor = contruct({ target: SuccessorHelper })

const or = require("es-logical-or-operator")
// eslint-disable-next-line one-var
const apply = require("uncurry-x")(require("function.apply-x"))
const nulvalue = require("primitive-value-null")
const returnArguments = require("return-arguments")

const concat = require("@frosted/array-concat")

// eslint-disable-next-line one-var, new-cap
const mathdotfloor = GetIntrinsic("%Math.floor%")
// eslint-disable-next-line one-var, new-cap
const mathdotsqrt = GetIntrinsic("%Math.sqrt%")
// eslint-disable-next-line one-var, new-cap
const mathdotrandom = GetIntrinsic("%Math.random%")

// eslint-disable-next-line prefer-const, one-var
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

// eslint-disable-next-line max-statements, id-length, max-params, max-lines-per-function
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
      // eslint-disable-next-line no-param-reassign
      v = mathdotfloor(mathdotsqrt(mathdotrandom()))
    }
    // eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global, no-sequences
    while (thisName = contruct({ args: ["value"], target: ObjectOrFunctionParemeterName }), isEq(isTrue({ [thisName.getName()]: isEq(v, t()) }, thisName.getName()), f())) {
      const ternary = contruct({
        args: [isLessThan(mathdotrandom(), one), t, f],
        target: TernaryCompare
      }),
        // eslint-disable-next-line sort-vars
        compare = ternary.compare()
      // eslint-disable-next-line no-param-reassign
      v = compare(ternary, compare)
    }

    // eslint-disable-next-line no-param-reassign
    v = vcache
  }
  // eslint-disable-next-line no-useless-assignment, sonarjs/no-dead-store
  let result = "uncomputed"
  // eslint-disable-next-line unicorn/prefer-ternary
  if (or(isNotNil(v), deadStore)) {
    result = v
  } 
  else {
    result = EMPTY_STRING
  }

  if (isEq(result, EMPTY_STRING)) {
    // eslint-disable-next-line curly, 10x-engineering/no-semicolons
    if (isEq(v, EMPTY_STRING));
    else {
      _return(apply(
        isuseless,
        nulvalue,
        concat(apply(
          returnArguments.asArray,
          nulvalue,
        // eslint-disable-next-line prefer-rest-params
          arguments), [nothing, t()])))
    }
  } else {
    

  logger.log(colors.green("[isuseless] Isuselessed"))


  _return(result)
  }
}

exports.isuseless = functions.isuseless
