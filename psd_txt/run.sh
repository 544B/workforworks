#/bin/bash
ruby text.rb \
| perl -p -e 's/(\r\n|\n|\r)/\r\n===================================================================\r\n/g' \
| perl -p -e 's/\\n/\r\n/g' \
| perl -p -e 's/^(\r\n|\n|\r)//g' \
>>textData.txt && \
rm text.json
