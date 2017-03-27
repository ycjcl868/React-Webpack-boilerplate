# 五、常用函数解析

<!-- toc -->

### help
作用：帮助函数，查看提供的方法。类似于`--help`作用  
用法：`( help )`  
样例：  
```json
( help )

=>

['$', '*', '+', '-', '/', ':', 'apply', 'def', 'do', 'file', 'fn', 'get', 'glob', 'help', 'id', 'jsonp', 'log', 'map', 'merge', 'num', 'page', 'parse', 'pick', 'query', 'reduce', 'set', 'str', 'stringify', 'template', 'throw', '|']

```

### :
作用：用于生成JSON数据  
用法：`(: key1 value1 key2 value2 ...)`  
样例：生成JSON格式数据`{"a":1,"b":2}`  

```json
(:
    a 1
    b 2
)


=> 

{
    a: 1,
    b: 2
}

```

### +-*/
作用：实现数字的加减乘除  
用法：`(+ number number ...)`、`(- number number)`、`(* number number ...)`、`(/ number number)`，注意：当`(/ 1 0)`时，会返回null  
样例：执行`+-*/`方法  
```json
(:
    add (+
            1 1
    )
    sub (-
        2 1
    )
    multipy (*
        2 2
    )
    divide (/
        10 5
    )
)   


=>

{
    add: 2,
    sub: 1,
    multipy: 4,
    divide: 2
}

```





### |
作用：用于生成数组  
用法：`(| val1 val2 ...)`， `val1`和`val2`为任意值，返回数组 `Array`  
样例：生成数组`[a,b,c,d]`  
```json
(|
    a
    b
    c
    d
)

=> 

[
    'a',
    'b',
    'c',
    'd'
]
```

### str
作用：参数类型转成字符串。  
用法：`(str str1)`，`str1`为任意值，返回值为 `string` 字符串  
样例：  
```json
(str 1235)
(str true)
(str key)

=>
'1235'
'true'
'key'
```

### num
作用：参数类型转成数字类型  
基础用法：`(num any)`，`any` 为任意值，返回值为数字类型 ，其中`true`为`1`，`false`为`2`。  
样例：将'2121'转成2121  
```json
(:
    a (num 123)
    b (num '2121')
    c (num 'weofjewio')
    d (num true)
    f (num false)
)    


=>

{
    a: 123,
    b: 2121,
    c: null,
    d: 1,
    f: 0
}
```

### get
作用：用来获取指定`key`值。  
用法`(get arg1 arg2)`，`arg1`为 `JSON` 对象类型， `arg2`传入 `JSON` 对象路径。最终得到路径对应的 `value` 值，返回值为任意值  
样例：获取JSON中的`data2`中的`data2-1`值。  

```json
(get (:
        version '1.0'
        status '200'
        value (:
            key1 value1
        )
        data (|
            (:
                data1 data1            
            )
            (:
                data2 (:
                    data2-1 data2-1  
                    data2-2 data2-2
                )
            )
        )        
    ) data[1].data2.data2-1
)

=>

data2-1

```

### set
作用：在原JSON对象的基础上新增/修改新的数据。  
用法：`(set data)`， `data`为 `JSON` 对象类型  
样例：`key1-1`的`value`值更改成`value1`，`key2`中新增`{key2-2 : value2-2}`值。  
```json
(:
    key1 (set 
        (: key1-1 value) key1-1 value1
    )
    key2 (set
        (: key2-1 value2) key2-2 value2-2
    )
)  
=>
{
    key1: {
        key1-1: 'value1'
    },
    key2: {
        key2-1: 'value2',
        key2-2: 'value2-2'
    }
}

```


### log
作用：收集log信息，不影响原函数的执行  
用法：`(log any)` ，`any`为任意值，返回为数组  
样例：  
```json
(:
    key (+ 1 (log (+ 1 2)))
    key2 (+ 2 (log (+ 3 4)))
)

=>

log: [
    3,
    7
]
```



### jsonp
作用：让数据支持 `jsonp` 跨域请求  
用法：`(jsonp callbackName data)`，`callbackName`为回调函数名，`data`为json数据。  
样例：  
```json
(jsonp
    callback (:
        status 200
    )
)

=>

'callback({"status":200})'
```

###apply
作用：类似于`JS`中的`apply`,用于改变调用主体对象。  
用法：`(apply fun data)`，`fun`中为提供的方法 ，`data`为任意值，传给`fun`中的方法去使用,返回任意值  
样例：  
```json
(:
    key (apply
        | (| 1  2) 
    )
    key2 (apply
        : (| key2-1 value2)
    )
)    

=>
{
    key: [
        1,
        2
    ],
    key2: {
        key2-1: 'value2'
    }
}

```

### stringify
作用：将JSON对象传成JSON字符串  
用法：`(stringify val)`，`val` 为 `JSON` 对象类型，返回字符串类型  
样例：  
```json
(stringify
    (:
        key value            
    )
)    

=> 

'{"key":"value"}'
```



### def
作用：定义变量的值  
用法：`(def var val)`， `var`为`string`类型，`val`为任意值   ，返回值为任意值  
样例：  
```json
(def a 123) ( a )

=> 

123
```



### do
作用：执行每个表达式，返回最后一个表达式的值  
用法：`(do exp exp exp ...)`，其中 `exp` 为任意值  ，返回值为任意值  
样例：  
```json
(do
    (def a 123)
    (+ ( a ) 1)
)

=>

124

```

### throw
作用：抛出错误  
用法：`(throw errorname)`， `errorname` 为 `string` 类型，返回值为 `never` ，需要抛错的错误名  
样例：  
```json
(: 
    key1 1
    key2 (throw
        error 
    ) 
)

=>

nisp error: "error"
stack: [
    "throw",
    4,
    ":",
    2,
    ":",
    0
]
```

### parse
作用：将 `json` 字符串转成 `json` 对象。  
用法：`(parse param)`，`param`为任意值，返回任意值   
样例：  

```json
(:
    a (parse
        {"user":1,"pass":2}
    )
)

=> 

{
    a: {
        user: 1,
        pass: 2
    }
}

```

### fn
作用：匿名函数表达式，用来定义函数表达式  
用法：`(fn ( [var] ) ( exp ) )`， `var` 为字符串类型 ，`var` 可以为空，也可以为任意多个，`exp` 传入表达式，返回函数类型。  
样例：  
```json
// 有参
(do
    (def foo 
        (fn ( a b )
            (+ ( a ) ( b ) )
        ) 
    )
    ( foo 1 2  )
)

// 无参
(do 
    (def foo
        (fn ()
            (+ 1 5)
        )
    )
    ( foo )
)
=>


3  // 有参
6  // 有参
```

### reduce
作用：相当于`JavaScript`中的`reduce`方法，对累加器和数组的每个值 (从左到右)应用一个函数。    
用法：`(reduce arr fn)`，`arr` 传入数组类型，`fn`传入执行函数，返回数字类型    
样例：实现数组相加  

```json
(reduce
    (| 1 2 3 4 5 6 ) (fn (| a b )
        (+ ( a ) ( b ) )
    )
)  

=> 

11

```


### map
作用：相当于`JavaScript`中的`map`方法，该数组中的每个元素调用一个提供的函数。  
用法：`(map arr fn)`，`arr` 传入数组类型，`fn`传入执行函数，返回数组类型  
样例：将一个数组里的所有值乘以2  
```json
(map
    (| 1 2 3 4 5 6 ) (fn ( a )
        (* ( a ) 2 )
    )
)  

=>

[
    2,
    4,
    6,
    8,
    10,
    12
]
```

### pick
作用：类似于`lodash`的`_.pick`方法，做一份投影，映射出指定的 `key`  
用法：`(pick obj key)`，`obj` 为`JSON`对象，`key`为字符串，返回 `JSON`对象  
样例：  
```json
(pick
    (:
        key1 value1
        key2 value2
    ) key1
)  

=> 

{
    key1: 'value1'
}

```

### id
作用：类似于`lodash`中的`_.identity`方法，传什么返回什么。  
用法：`(id any)`， `any` 表示任意类型，返回任意类型  
样例：  
```json
(:
    key1 (id 12)
    key2 (id (| 1 2 3))
    key3 (id (: key3-1 value3-1))
)  

=> 

{
    key1: 12,
    key2: [
        1,
        2,
        3
    ],
    key3: {
        key3-1: 'value3-1'
    }
}
```

### merge
作用：类似于`lodash`中的`_.merge`方法，合并`JSON`数据。  
用法：`(merge obj obj )`，`obj` 只能传 `JSON` 对象，返回合并后的 `JSON` 对象  
样例：  
```json
(: 
    key(merge
        (:
            name Kylin
            age 20
        )
        (:
            kylin 1
        ) 
    )
)

=>

{
    key: {
        name: 'Kylin',
        age: 20,
        kylin: 1
    }
}
```




### $
作用：依次取出 `()` 的值，但不执行 `()` 内的方法或函数
用法：`($ any)`，`any`为任意类型，返回任意类型  
样例：依次取出 `+ / 1 0`

```json
($
    (+ / 1 0)
)
=> 

[
    '+',
    '/',
    1,
    0
]
```


### template
作用：为后台传入模板数据
用法：`(template any)`，`any`为传入模板数据。
样例：
```json
(template
    ($ + 1 1)
)

=>

2

```


