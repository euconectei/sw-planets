const checkBrowser = () => {

  // Get the user-agent string 
  const userAgentString =
    navigator.userAgent;

  // Detect Chrome 
  let chromeAgent =
    userAgentString.indexOf("Chrome") > -1;

  // Detect Internet Explorer 
  const IExplorerAgent =
    userAgentString.indexOf("MSIE") > -1 ||
    userAgentString.indexOf("rv:") > -1;

  // Detect Firefox 
  const firefoxAgent =
    userAgentString.indexOf("Firefox") > -1;

  // Detect Safari 
  let safariAgent =
    userAgentString.indexOf("Safari") > -1;

  // Discard Safari since it also matches Chrome 
  if ((chromeAgent) && (safariAgent))
    safariAgent = false;

  // Detect Opera 
  const operaAgent =
    userAgentString.indexOf("OP") > -1;

  // Discard Chrome since it also matches Opera      
  if ((chromeAgent) && (operaAgent))
    chromeAgent = false;

  if (chromeAgent) return 'Chrome';
  if (IExplorerAgent) return 'IE';
  if (firefoxAgent) return 'Firefox';
  if (safariAgent) return 'Safari';
  if (operaAgent) return 'Opera';

  return 'Another';
};

export default checkBrowser;