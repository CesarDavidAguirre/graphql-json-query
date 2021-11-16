> **Librery for tranform object json in query or mutation graphql without variables**

JSON TO QUERY (type query)

```typescript
import { jsonToQuery } from 'graphql-json-query';

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
  returnData: ['Id', 'name', { options: ['data', 'example'] }],
});
```

RESPONSE

```graphql
query {test(data: {testString: "hola", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hola3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

JSON TO QUERY (type mutation)

```typescript
import { jsonToMutation } from 'graphql-json-query';

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
  returnData: ['Id', 'name', { options: ['data', 'example'] }],
});
```

RESPONSE

```graphql
mutation {test(data: {testString: "hola", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hola3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

JSON TO QUERY (type own)

```typescript
import { jsonToQueryOwn } from 'graphql-json-query';

return jsonToQueryOwn('testQuery', {
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
  returnData: ['Id', 'name', { options: ['data', 'example'] }],
});
```

RESPONSE

```graphql
testQuery {test(data: {testString: "hola", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hola3", testNumber2: 57}}){Id name options : {  data  example  } }}
```
