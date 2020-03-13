exports.fix_url = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
      return '%' + c.charCodeAt(0).toString(16)
    })
}