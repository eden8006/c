function http(params, callback) {
  // https://points.epayworld.us/epayworld/sys/WebsiteEmailServe/addWebsiteEmail
  var xhr = new XMLHttpRequest();
  xhr.open(
    params.method || "post",
    `https://merchant.aiyaorder.us/epayworld${params.url}`
  );
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(params.data || {});
  xhr.onreadystatechange = function () {
    let res = eval("(" + xhr.responseText + ")");
    callback(xhr, res);
  };
}
//接口文档地址
//http://18.222.222.223:9002/doc.html#/default/%E5%AE%98%E7%BD%91%E6%8E%A5%E5%8F%A3/sendBusinessesEmailUsingPOST

// const data = {
//   "subject": `【客户预定】-- Hibashi boy  --  ${$('.checktime').text()}`,
//   "email": 'hibachiboyflordia@gmail.com',
//   "content": {
//     "Time": $('.checktime').text(),
//     "Name": this.form.firstName + ' ' + this.form.lastName,
//     "Phone Number": this.form.phone,
//     "Email": this.form.email,
//     "Address": this.form.address,
//     "Special requirements": this.form.requirements
//   },
//   "extraContent": ''
// }
//发送邮件通用版
export const sendEmailGeneral = (data, callback) => {
  let params = {
    url: `/website/sendEmailGeneral`,
    data: JSON.stringify(data),
  };
  http(params, callback);
};

//发送只有邮箱的邮件
export const sendOnlyEmail = (data, callback) => {
  let params = {
    url: `/website/sendOnlyEmail`,
    data: JSON.stringify(data),
  };
  http(params, callback);
};
