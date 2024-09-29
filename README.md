# react-native-pure-structure

손쉽게 직관적인 컴포넌트 구조를 잡아줍니다.

## Installation

```sh
npm i @pureboard/react-native-pure-structure
yarn add @pureboard/react-native-pure-structure
```

## Usage

컴포넌트 구조를 잡기 위해서는 반복적으로 flexDirection, alignItems, justifyContent 등 스타일을 주어야하고, 필연적으로 귀찮고 가독성 낮은 코드를 만들어냅니다.
```js
// without react-native-pure-structure
<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity style={{gap:24}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
            <View style={{gap:12,flexDirection:'row',alignItems:'center'}}>
                <Avatar/>
                <View style={{gap:4}}>
                    <Text>{name}</Text>
                    <Text>{introduce}</Text>
                </View>
            </View>
            <Button/>
        </View>
        <Text>{card information}</Text>
    </TouchableOpacity>
</View>
```
react-native-pure-structure를 사용하면, 간편하게 구조를 잡으면서도 직관적인 코드를 작성할 수 있습니다.
```js
// with react-native-pure-structure
<CenteredColumn flex>
    <TouchableColumn gap={24}>
        <SpacedRow >
            <AlignedRow gap={12}>
                <Avatar/>
                <Column gap={4}>
                    <Text>{name}</Text>
                    <Text>{introduce}</Text>
                </Column>
            </AlignedRow>
            <Button/>
        </SpacedRow>
        <Text>{card information}</Text>
    </TouchableColumn>
</CenteredColumn>
```
## Components
### Column
- Column
- AlignedColumn
- AlignedTouchableColumn
- CenteredColumn
- CenteredTouchableColumn
- EndJustifiedColumn
- EndJustifiedTouchableColumn
- JustifiedColumn
- JustifiedTouchableColumn
- RightAlignedColumn
- RightAlignedTouchableColumn
- SpacedColumn
- SpacedTouchableColumn
- TouchableColumn

### Row
- Row
- AlignedRow
- AlignedTouchableRow
- CenteredRow
- CenteredTouchableRow
- EndJustifiedRow
- EndJustifiedTouchableRow
- JustifiedRow
- JustifiedTouchableRow
- RightAlignedRow
- RightAlignedTouchableRow
- SpacedRow
- SpacedTouchableRow
- TouchableRow

### Wrapper
- TouchableWrapper
- Wrapper

### SizedBox
- SizedBox

## Note
react-native-pure-structure는 굉장히 강력하지만, 한편으로는 개선되어야 할 점도 많은 라이브버리입니다.   
다양한 style의 조합을 대응하려다보니 종류가 너무 장황해진데 반해, 100%의 커버리지를 갖지 않아 종종 추가적인 style을 넘겨주어야합니다.   
이에, 빠른 시일 내에 적절한 절충점을 찾아 보완 예정입니다. (당연히 현재 버전과의 호환성을 고려할 것입니다.)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
