# 目的
react公式チュートリアルにreduxを組み込むとどのように実装するのかを考える。  
reduxの実装方法の学習用として使用する。


## 疑問
1. どんな単位でreducerを分割するのが良いのか？
2. ActionCreaterで一部処理しても良いのか？

## 2. ActionCreaterで一部処理しても良いのか？

reducerが受け取るactionは、更新してほしい情報だ。  
だから、更新してほしい状態をaction createrで作成して、  
reducerはそれでstateを上書きする役割だと思ってるのだが、  
どうなんだろうか？

たとえば、reduxチュートリアルの[Todoアプリ](https://redux.js.org/docs/basics/ExampleTodoList.html)はどうなっているだろうか。  

各Todoは、id、内容と完了フラグを持っており、  
ActionCreaterでは、次のソースの通りでこれがreducerに渡ることになる。

### Action Creator
```javascript
// 新規作成のactionは、id、内容を生成
  let nextTodoId = 0
  export const addTodo = text => {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    }
  }

  ...

// 完了状態を更新するactionは、idを生成
  export const toggleTodo = id => {
    return {
      type: 'TOGGLE_TODO',
      id
    }
}
```

### Reducer
```javascript
  const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false // (1)
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed} // (2)
            : todo
        )
      default:
        return state
    }
  }

  export default todos

```

(1):固定値を与えている
(2):actionのidから計算してる

次の公式サイトからも、stateの状態を変更するのはreducerのしごとで、actionはそれを知らんとある。
> Actions describe the fact that something happened,  
> but don't specify how the application's state changes in response. 
> This is the job of reducers.

よって、現状actionはreducerが処理できる最低限の情報をおくる役割で、
reducerは受け取ったactionから計算を施して、statew更新するものだと理解する

## 気がついたこと
- コンポーネントをクラスで作成することのメリット




