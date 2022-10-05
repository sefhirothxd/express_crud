
#!/bin/bash
echo "Waiting database initialization"
# while true;
# do
#   PGPASSWORD=probando psql -h 127.0.0.1 -p 5432 -U sefhiroth -d test_larnu -c "\set VERBOSITY 'verbose'" 2>error
#   code=$(sed '1q;d' error | awk '{print $2}')
#   if [ $code = '42P04:' ];
#   then
#     break
#   else
#     echo $code
#     sleep 1
#   fi
# done
# rm error
ls
npm test