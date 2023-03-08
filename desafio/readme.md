node --prof ./src/server.js
artillery quick --count 50 -n 20 http://localhost:8080/info > result_fork.txt
node --prof-process result_fork_sinCL.log > result_fork_prof_sinCL.txt
node --prof-process result_fork_conCL.log > result_fork_prof_conCL.txt

node --inspect ./src/server.js

     "scripts": {
        "test": "node ./lib/benchmark.js",
        "start": "0x server.js"
    },

npm start
npm test
