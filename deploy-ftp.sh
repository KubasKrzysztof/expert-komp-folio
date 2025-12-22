#!/bin/bash
DIR=$1

lftp -c "
set ftp:ssl-allow no
open -u $FTP_USER,$FTP_PASS $FTP_HOST
mirror -R --delete --verbose $DIR $FTP_PATH
bye
"
