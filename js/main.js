/**
 * MAIN.JS
 * 
 * an example using twitter bootstrap ui components
 * 
 * @author Bob Drummond
 * (C) 2012 PINK PELICAN NZ LTD
 */

/**
 * EventHandler
 * jQuery sets eventhandler which is called when DOM is loaded and ready to be mainpulated. 
 * images and other linked files may not yet be fully loaded. 
 */
$("document").ready( function() {

  try {
         
  
  } catch(error) {
  // handle any exceptions caught
  
    switch (error.name) {
      case 'SyntaxError':
        alert("caught a " + error.name + ": " + error.message);
        //handle error…
        break;
      case 'EvalError':
        alert("caught a " + error.name + ": " + error.message);
        //handle error…
        break;
        case 'ReferenceError':
        alert("caught a " + error.name + ": " + error.message);
        //handle error…
        break;
      default:
        alert("caught a " + error.name + ": " + error.message);
        //handle all other error types here…
        break;
    } // switch
    
  } finally{
  // any tidy up after the try/catch
  
  } // finally
  
}); // document(ready)
