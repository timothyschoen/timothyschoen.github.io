/* Declares the GreenLight Audio Worklet Processor */

class GreenLight_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.GreenLight;
    super(options);
  }
}

registerProcessor("GreenLight", GreenLight_AWP);
