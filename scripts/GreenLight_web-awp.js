/* Declares the GreenLight_web Audio Worklet Processor */

class GreenLight_web_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.GreenLight_web;
    super(options);
  }
}

registerProcessor("GreenLight_web", GreenLight_web_AWP);
