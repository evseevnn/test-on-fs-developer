FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db library --collection books --type json --file /init.json --jsonArray
