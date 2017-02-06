const AjaxWrapper = {
  request: function (object) {
    var request = new XMLHttpRequest()
    request.open(object.type, object.url, true)

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        // var resp = request.responseText;
        object.success(request.responseText)
      } else {
        // We reached our target server, but it returned an error
        object.fail()
      }
    }
    request.send()
  }
}
