# api insee
fetch de api officiel de l'insee

## recuperation credential
pour autoriser le fetch, il faut recuperer la cle sur le site de l'insee et faire un 



`curl -k -d "grant_type=client_credentials" \
            -H "Authorization: Basic VzVUOXV1N2d3U2x3V2txMDlwNTJtMFp2TTUwYTp2TzR2cnpWYlFQSkRQUHl4QUdZcE1mQmphbm9h" \
             https://api.insee.fr/token`