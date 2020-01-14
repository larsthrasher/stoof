function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // the request was made and the server responded with a
    // status code that is not in the range of 200.
    errorMsg = error.response.data;
    console.error("error response", errorMsg)

    //for cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //request was made, but no response was received
    errorMsg = error.request;
    console.error('error request', errorMsg)
  } else {
    // something else happened in request triggering error.  World may never know.
    errorMsg = error.message;
    console.error('error request', errorMsg)
  }
  displayError(errorMsg);
}

export default catchErrors;
