1. `store/index` 中，暴露存放所有的全局数据的 `store` 对象和 `Context`
2. `store/reducers` 合并所有 `reducer`
3. 各个组件中的 `reducer` 写入相应数据的 `action` 操作
4. `App.jsx` 用过 `Provider` 将读写 `Api` 提供的其包裹的组件
5. 各个组件中通过 `const { state, dispatch } = useContext(Context)` 获取 `App.jsx` 提供的读写 `Api`
