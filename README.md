# Graphql-json-query

> Library for transform object json in query or mutation graphql without variables

JSON TO QUERY (type query)

```typescript
import { jsonToQuery } from 'graphql-json-query';

return jsonToQuery({
  schemaName: 'test',
  jsonData: {
    data: {
      testString: 'hello',
      testNumber: 56,
      testBoolean: true,
      testNull: null,
      testUndefined: undefined,
      testArray: ['aaa', 'bbb'],
      testjson: {
        testString2: 'hello3',
        testNumber2: 57,
      },
    },
  },
  returnData: ['Id', 'name', { options: ['data', 'example'] }],
});
```

RESPONSE

```graphql
query {test(data: {testString: "hello", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hello3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

JSON TO QUERY (type mutation)

```typescript
import { jsonToMutation } from 'graphql-json-query';

return jsonToMutation({
  schemaName: 'test',
  jsonData: {
    data: {
      testString: 'hello',
      testNumber: 56,
      testBoolean: true,
      testNull: null,
      testUndefined: undefined,
      testArray: ['aaa', 'bbb'],
      testjson: {
        testString2: 'hello3',
        testNumber2: 57,
      },
    },
  },
  returnData: ['Id', 'name', { options: ['data', 'example'] }],
});
```

RESPONSE

```graphql
mutation {test(data: {testString: "hello", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hello3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

JSON TO QUERY (type own)

```typescript
import { jsonToQueryOwn } from 'graphql-json-query';

return jsonToQueryOwn('testQuery', {
  schemaName: 'test',
  jsonData: {
    data: {
      testString: 'hello',
      testNumber: 56,
      testBoolean: true,
      testNull: null,
      testUndefined: undefined,
      testArray: ['aaa', 'bbb'],
      testjson: {
        testString2: 'hello3',
        testNumber2: 57,
      },
    },
  },
  returnData: ['Id', 'name', { options: ['data', 'example'] }],
});
```

RESPONSE

```graphql
testQuery {test(data: {testString: "hello", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hello3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

MULTIPLE QUERYS EXAMPLE

> this work in all cases

```typescript
import { jsonToQuery } from 'graphql-json-query';

return jsonToQuery([{
  schemaName: 'test1',
  jsonData: {
    data: "hello"
  },
  returnData: ['world'],
},{
  schemaName: 'test2',
  jsonData: {
    data: "hello"
  },
  returnData: ['world'],
}]);}
```

RESPONSE

```graphql
query {
  test1(data: "hello") {
    world
  }
  test2(data: "hello") {
    world
  }
}
```
