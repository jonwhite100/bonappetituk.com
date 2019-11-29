@echo off
Title Multiple file Upload by Hackoo
mode con cols=85 lines=22 & Color A
::***********************************
Set FTPSERVER=51.75.169.216
Set USER=bonappcom
Set Password=hint-car-prince
Set LocalFolder=C:\xampp\htdocs\bonappetituk.com\wp-content\themes\understrap-child\dist
Set RemoteFolder=/public_html/wp/wp-content/themes/understrap-childf
::***********************************
> ft.do echo Open %FTPSERVER%
>> ft.do echo %USER%
>> ft.do echo %Password%
>> ft.do echo prompt n
>> ft.do echo bin
>> ft.do echo lcd %LocalFolder%
>> ft.do echo cd %RemoteFolder%
>> ft.do echo mput *.*
>> ft.do echo bye
ftp -s:ft.do
del ft.do
Pause
