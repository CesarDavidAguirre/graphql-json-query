> **Librery for tranform object json in query or mutation graphql without variables**

JSON TO QUERY (type query)

```
import { jsonToQuery } from 'graphql-json-query'

return jsonToQuery({
  schemaName: 'test',
  jsonData: {
    data: {
      testString: 'hola',
      testNumber: 56,
      testBoolean: true,
      testNull: null,
      testUndefined: undefined,
      testArray: ['aaa', 'bbb'],
      testjson: {
        testString2: 'hola3',
        testNumber2: 57,
      },
    },
  },
  returnData: ['Id', 'name', { opcion: [' data ', 'EJEMPLO'] }],
})
```

RESPONSE

```
query {test(data: {testString: "hola", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hola3", testNumber2: 57}}){Id name opcion : {  data  EJEMPLO  } }}
```

JSON TO QUERY (type mutation)

```
import { jsonToMutation } from 'graphql-json-query'

return jsonToMutation({
  schemaName: 'test',
  jsonData: {
    data: {
      testString: 'hola',
      testNumber: 56,
      testBoolean: true,
      testNull: null,
      testUndefined: undefined,
      testArray: ['aaa', 'bbb'],
      testjson: {
        testString2: 'hola3',
        testNumber2: 57,
      },
    },
  },
  returnData: ['Id', 'name', { opcion: [' data ', 'EJEMPLO'] }],
})
```

RESPONSE

```
mutation {test(data: {testString: "hola", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hola3", testNumber2: 57}}){Id name opcion : {  data  EJEMPLO  } }}
```

JSON TO QUERY (type own)

```
import { jsonToQueryOwn } from 'graphql-json-query'

return jsonToQueryOwn("testQuery",{
  schemaName: 'test',
  jsonData: {
    data: {
      testString: 'hola',
      testNumber: 56,
      testBoolean: true,
      testNull: null,
      testUndefined: undefined,
      testArray: ['aaa', 'bbb'],
      testjson: {
        testString2: 'hola3',
        testNumber2: 57,
      },
    },
  },
  returnData: ['Id', 'name', { opcion: [' data ', 'EJEMPLO'] }],
})
```

RESPONSE

```
testQuery {test(data: {testString: "hola", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hola3", testNumber2: 57}}){Id name opcion : {  data  EJEMPLO  } }}
```
