<?php
include "phpmailer/PHPMailerAutoload.php";
$nombre = $_POST["nombre"];
$apellido = $_POST['apellido'];
$email = $_POST["correo"];
$personas = $_POST['personas'];
$dni = $_POST['dni'];
$soles = $_POST['soles'];
$dolares = $_POST['dolares'];
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "tig.boxsecured.com";
$mail->Port = 465;
$mail->Username = "yourormytour@portuhermana.com";
$mail->Password = "123456qwerty";
$mail->SetFrom("yourormytour@portuhermana.com", "Your or my Tour");
$mail->Subject = "Paquete personalizado de Your or my Tour";
$mail->MsgHTML('<HTML xmlns="http://www.w3.org/1999/xhtml"><HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<STYLE type=text/css>
    tr {font-family:Gill Sans MT, Arial}
 td {border-collapse:collapse}
 p { padding: 0; margin: 0}
 ul, ol {margin: 0; padding: 0}
 background { none !important}
 .ReadMsgBody { width: 100%}
 .ExternalClass {width: 100%}
 div, p, a, li, td {-webkit-text-size-adjust:none;-ms-text-size-adjust:none}
    </STYLE>
</HEAD>
<BODY style="padding:0; margin:0">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td bgcolor="#DBDBDD">
        <table align="center" width="629" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="629" valign="top">
              <br><br><br><br><br>
              <table width="629" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="19" bgcolor="#DBDBDD"></td>
                  <td width="35" bgcolor="#DEEAF6">&nbsp;</td>
                  <td width="521">
                    <table width="521" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td bgcolor="#DEEAF6">
                          <center>Your or my Tour</center>
                        </td>
                      </tr>
                    </table>
                    <table width="521" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="43" bgcolor="#DEEAF6">&nbsp;</td>
                        <td bgcolor="#DEEAF6">
                            <font size=3 color="#333333" face=Arial>
                            Hola <b>'.$nombre.' '.$apellido.'</b>,<br>
                            <p>'.$personas.'</p>
                            <p>'.$dni.'</p>
                            <p>'.$soles.'</p>
                            <p>'.$dolares.'</p>
                            
                            <br><br>
                            Te escribio: '.$email.'
                            </font>
                        </td>
                        <td width="43" bgcolor="#DEEAF6">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                  <td width="35" bgcolor="#DEEAF6">&nbsp;</td>
                  <td width="19" bgcolor="#DBDBDD">&nbsp;</td>
                </tr>
              </table>
              <br><br><br><br><br>
              <table width="629" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-bottom:15px">
                  <div align="center">
                  <font size=2 color="#999999" face=Arial>
                  Todos los derechos reservados
                  <a href="http://yourormytour.portuhermana.com" style="color:#000">
                  Your or my Tour
                  </a>
                  </font>
                  </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</BODY>
</HTML>');
$mail->AddAddress("mkmv1195@gmail.com", "Kati");
$mail->Send();
?>