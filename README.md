# Graphql-json-query

> Library for transform object json in query or mutation graphql without variables

<hr>

**Examples**:

1. [Query type query](#id1)
2. [Query type mutation](#id2)
3. [Query owners](#id3)
4. [Multiple queries](#id4)

<hr>

### JSON TO QUERY (type query) <a name="id1"></a>

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

### RESPONSE

```graphql
query {test(data: {testString: "hello", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hello3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

<hr>

### JSON TO QUERY (type mutation) <a name="id2"></a>

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

### RESPONSE

```graphql
mutation {test(data: {testString: "hello", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hello3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

<hr>

### JSON TO QUERY (type own) <a name="id3"></a>

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

### RESPONSE

```graphql
testQuery {test(data: {testString: "hello", testNumber: 56, testBoolean: true, testNull: null, testArray: ["aaa", "bbb"], testjson: {testString2: "hello3", testNumber2: 57}}){Id name options : {  data  example  } }}
```

<hr>

### MULTIPLE QUERYS EXAMPLE <a name="id4"></a>

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

### RESPONSE

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
