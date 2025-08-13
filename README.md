# Zustand 学习笔记

## 基础使用

```ts
import { create } from 'zustand';
const useStore = create<Type>((set) => ({
  name: 'chen',
  updateName: (name) => set(() => ({ name })),
}));
```

核心就是这个`create`函数，返回一个`hook`，然后就可以在任意地方使用声明的`state`和更新`state`的函数

默认情况下`zustand`在更新state的时候会做一次**更新合并**

```ts
const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  // 等价于下面
  // set((state) => ({ ...state, count: state.count + 1 }))
}))
```

> 但是注意，这种合并只处理第一层，如果是包裹多层的对象还是要自己手动写扩展运算符

如果要禁用这种自动合并，可以增加set的第二个参数

```ts
set((state) => newState, true)
```
