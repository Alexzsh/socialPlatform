export function uploadPic(a) {
  if (a.files && a.files[0]) {
    if (a.files[0].type.indexOf('image') != 0) return $('.upload-btn').html('<span style="color: #c50808">请选择图像文件上传</span>')
    a = new FormData($('#upload-form')[0])
    $.ajax({
      url: 'https://www.17uw.cn/api/upload/weibo',
      type: 'POST',
      xhr: function () {
        myXhr = $.ajaxSettings.xhr()
        myXhr.upload && myXhr.upload.addEventListener('progress',
          function (a) {
            a.lengthComputable && (a = a.loaded / a.total, a == 1 ? $('.upload-btn').html('<span style="color: #c50808">上传完成，处理中...</span>') : $('.upload-btn').html('上传中，进度：' + 100 * a + '%'))
          }, !1)
        return myXhr
      },
      beforeSend: function () {
        $('.upload-btn').html('准备上传..')
      },
      success: function (a) {
        a.code != 'success' ? $('.upload-btn').html('<span style="color: #c50808">' + a.msg + '</span>') : ($('.input form')[0].url.value = a.data.url.replace(/http:/g, 'https:'), commentExtraPicSubmit($('.input form')[0]))
      },
      error: function (a) {
        console.log(a)
        $('.upload-btn').html('<span style="color: #c50808">图片上传出错</span>')
      },
      data: a,
      dataType: 'json',
      cache: !1,
      contentType: !1,
      processData: !1
    })
    return !1
  }
}
