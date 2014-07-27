# !/bin/usr/bash

d=`pwd`
dir=${d//\//\\\/}
data='./imgTag.txt'
img=$(find $1 -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif")
count=$(ls -1 $img | wc -l)

sips --getProperty pixelWidth --getProperty pixelHeight $img > $data && \
perl -p -i -e "s/$dir//g" $data && \
perl -p -i -e "s/^\//<img src=\"\//g" $data && \
perl -p -i -e "s/pixelWidth: /width=\"/g" $data && \
perl -p -i -e "s/pixelHeight: /height=\"/g" $data && \
perl -p -i -e "s/\s\s//g" $data && \
perl -p -i -e "s/\n/\" /g" $data && \
perl -p -i -e "s/(?!^)</alt=\"\" \/>\n</g" $data && \
perl -p -i -e "s/\"\$|\" $/ alt=\"\" \/>/g" $data && \
pbcopy < $data && \
rm $data && \
echo $count'tags : <img src="'$1'" />'
