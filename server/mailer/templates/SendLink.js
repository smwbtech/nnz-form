const config = require('./../../config/nnz_form_config.js');

module.exports = {
    sendLink(userObj) {
        let fullName = userObj.anonym ? '' : userObj.name.split(' ');
        let name = fullName.length > 2 ? `${fullName[1]} ${fullName[2]}`: `${fullName[1]}`;
        let gender = userObj.gender === 'male' ? 'Уважаемый ' : 'Уважаемая ';
        return {
            from: `"nnz-ipc.ru" <ipc@nnz.ru>`, // sender address
            to: `${userObj.email}`, // list of receivers
            subject: `Ниеншанц-Автоматика: опрос среди наших клиентов`, // Subject line
            html: `
            <!doctype html>
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

            <head>
            <title>
            </title>
            <!--[if !mso]><!-- -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
            #outlook a {
            padding: 0;
            }

            .ReadMsgBody {
            width: 100%;
            }

            .ExternalClass {
            width: 100%;
            }

            .ExternalClass * {
            line-height: 100%;
            }

            body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            }

            table,
            td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            }

            img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
            }

            p {
            display: block;
            margin: 13px 0;
            }
            </style>
            <!--[if !mso]><!-->
            <style type="text/css">
            @media only screen and (max-width:480px) {
            @-ms-viewport {
            width: 320px;
            }

            @viewport {
            width: 320px;
            }
            }
            </style>
            <!--<![endif]-->
            <!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <!--[if lte mso 11]>
            <style type="text/css">
              .outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
            <!--[if !mso]><!-->
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
            <style type="text/css">
            @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
            </style>
            <!--<![endif]-->
            <style type="text/css">
            @media only screen and (min-width:480px) {
            .mj-column-px-600 {
            width: 600px !important;
            max-width: 600px;
            }

            .mj-column-px-500 {
            width: 500px !important;
            max-width: 500px;
            }

            .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
            }
            }
            </style>
            <style type="text/css">
            @media only screen and (max-width:480px) {
            table.full-width-mobile {
            width: 100% !important;
            }

            td.full-width-mobile {
            width: auto !important;
            }
            }
            </style>
            </head>

            <body>
            <div style="">
            <!-- Header -->
            <!--[if mso | IE]>
            <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">

            <v:rect  style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
            <v:fill  origin="0.5, 0" position="0.5, 0" src="https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540289496/bg.jpg" type="tile" />
            <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
            <div style="background:url(https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540289496/bg.jpg) top center / cover no-repeat;Margin:0px auto;max-width:600px;">
            <div style="line-height:0;font-size:0;">
            <table align="center" background="https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540289496/bg.jpg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540289496/bg.jpg) top center / cover no-repeat;width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">

            <tr>

                <td
                   class="" style="vertical-align:top;width:600px;"
                >
              <![endif]-->
                    <div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tr>
                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                              <tbody>
                                <tr>
                                  <td style="width:100px;">
                                    <img height="auto" src="https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540291948/Logo_NNZ_RUS_white.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="100" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--[if mso | IE]>
                </td>

            </tr>

                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
            <!--[if mso | IE]>
            </v:textbox>
            </v:rect>

              </td>
            </tr>
            </table>
            <![endif]-->
            <!-- text -->
            <!--[if mso | IE]>
            <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
            <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                  <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">

            <tr>

                <td
                   class="" style="vertical-align:top;width:500px;"
                >
              <![endif]-->
                  <div class="mj-column-px-500 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-style:bold;line-height:1;text-align:center;color:#231f20;"> ${userObj.anonym ? 'Добрый день, ' : gender}${userObj.anonym ? 'коллеги' : name}</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#231f20;"> Компания "Ниеншанц-Автоматика" проводит опрос среди постоянных клиентов с целью улучшить наши взаимодействие и коммуникацию. </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#231f20;"> Для того, чтобы ответить на вопросы, пройдите по ссылке. </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                            <tr>
                              <td align="center" bgcolor="#0072b4" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#0072b4;" valign="middle">
                                <a href="${config.hostname}?i=${userObj._id}" style="background:#0072b4;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank"> Заполнить анкету </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#231f20;"> Заранее благодарим за ответы, вы помогаете нам становиться лучше! </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
                </td>

            </tr>

                      </table>
                    <![endif]-->
                </td>
              </tr>
            </tbody>
            </table>
            </div>
            <!--[if mso | IE]>
              </td>
            </tr>
            </table>

            <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
            <div style="background:#f3f1f1;background-color:#f3f1f1;Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f3f1f1;background-color:#f3f1f1;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:15px;text-align:center;vertical-align:top;">
                  <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">

            <tr>

                <td
                   class="" style="vertical-align:top;width:570px;"
                >
              <![endif]-->
                  <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <!--[if mso | IE]>
            <table
             align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            >
            <tr>

                  <td>
                <![endif]-->
                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                            <tr>
                              <td style="padding:4px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:30px;">
                                  <tr>
                                    <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                      <a href="https://vk.com/nnz_ipc" target="_blank">
                                        <img height="30" src="https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540289516/vk.png" style="border-radius:3px;" width="30" />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso | IE]>
                  </td>

                  <td>
                <![endif]-->
                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                            <tr>
                              <td style="padding:4px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:30px;">
                                  <tr>
                                    <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                      <a href="https://twitter.com/nnz_ipc" target="_blank">
                                        <img height="30" src="https://res.cloudinary.com/dx2wsnmqr/image/upload/v1540289510/twitter.png" style="border-radius:3px;" width="30" />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso | IE]>
                  </td>

              </tr>
            </table>
            <![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;"> www.nnz-ipc.ru </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;"> (812) 326-5924 </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;"> (495) 980-6406 </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;"> ipc@nnz.ru </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
                </td>

            </tr>

                      </table>
                    <![endif]-->
                </td>
              </tr>
            </tbody>
            </table>
            </div>
            <!--[if mso | IE]>
              </td>
            </tr>
            </table>
            <![endif]-->
            </div>
            </body>

            </html>
            `
        };
    }
};
