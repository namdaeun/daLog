---
title: unknown 타입, 알고 쓰자
date: 2025-06-17
tagName: unknown, any
image: /assets/image/blog/unknown.jpg
description: 요즘 등장하는 디자인 패턴들과 이에 대한 간단한 의견 정리
---

TypeScript를 쓰다 보면 any 타입은 편하지만 위험하다는 얘기를 자주 들어봤을 거예요. any의 사용은 간편하게 당장의 오류를 무시할 수 있지만, 타입 검사를 완전히 우회하기 때문에 더욱 더 큰 코드 오류를 발생시키는 원인이 될 수 있어요.

이런 any의 단점을 보완하기 위해 나온 타입이 바로 **unknown**이에요. 
any와 비슷하다고 생각할 수 있지만 중요한 차이점이 존재해요. 이번 글에서는 unknown을 언제 어떻게 써야 하는지, 그리고 어떤 상황에서 any보다 더 나은 선택이 될 수 있는지 정리해보고자 해요.

### any와 unknown, 뭐가 다를까요?
any는 다음과 같은 특징을 가지고 있어요:
>
1. 어떤 타입이든 any 타입에 할당할 수 있어요.
2. any 타입은 어떤 타입으로든 다시 할당할 수 있어요.

이게 편리해 보이지만, 사실상 타입 시스템을 무시하게 되기 때문에 실수를 알아채지 못하고 런타임 오류로 이어질 가능성이 커요.

unknown은 다음과 같은 특징이 있어요:
>
1. 어떤 값이든 unknown 타입에 할당할 수는 있어요.
2. 하지만 unknown 값을 다른 타입으로 바로 사용할 수는 없어요. 타입 검사나 단언을 거쳐야 해요.

예를 들어, unknown 값을 바로 `.length`로 접근하려고 하면 오류가 나요. 반드시 타입을 확인하거나 단언을 해줘야 해요.

_참고로 never는 이와 반대예요. 어떤 타입에도 할당할 수는 없지만, 어떤 타입으로든 변환은 가능해요._

<br />

## unknown 타입의 세 가지 활용 예시

### 1. 함수 반환값에서의 unknown
```ts
function fetchData(): unknown {
  return Math.random() > 0.5 ? "data" : 123;
}
```
위 함수처럼 반환 타입이 확정되지 않았을 때 unknown을 사용하면, 이 값을 사용하는 쪽에서 반드시 타입을 검사하거나 단언해야 해서 더 안전해요.

```ts
const data = fetchData();

if (typeof data === "string") {
  console.log(data.length); // 타입이 확인된 후 사용 가능
}
```

### 2. 변수 선언에서의 unknown
```ts
let value: unknown;

value = 10;
value = "hello";
value = { a: 1 };
```
이처럼 어떤 타입이 들어올지 모르는 경우 unknown으로 선언하면, 이후 값을 사용할 때마다 타입 검사를 하게 돼요. any를 쓰는 것보다 훨씬 안전한 방식이에요.

#### 제네릭과 unknown의 비교
```ts
// 제네릭 버전
function getValue<T>(): T {
  return someValue as T;
}

// unknown 버전
function getValue(): unknown {
  return someValue;
}
```
제네릭은 호출하는 쪽에서 타입을 지정해주지만, 내부에서 그 타입을 실제로 만족하는지 보장하기 어려워요.

반면 unknown으로 반환하면, 사용하는 쪽에서 직접 타입을 확인하거나 단언하게 되어 타입 안정성이 더 높아져요. 또한, 의도적으로 타입 사용을 강제하는 효과도 있어요.

```ts
const result = getValue();

if (typeof result === "string") {
  console.log(result.length); // 타입 체크 후 안전하게 사용
}
```

### 3. 단언문에서의 unknown
`이중 단언(as any as T)`을 쓸 때, 중간에 any 대신 unknown을 끼워주면 더 안전하게 동작해요.

```ts
declare const foo: Foo;

let barAny = foo as any as Bar;
let barUnknown = foo as unknown as Bar;
```
기능은 같지만, unknown을 중간에 쓰면 타입 시스템을 완전히 무시하지 않아서 `리팩토링`이나 `타입 추론` 시 도움이 돼요.



### 마무리
any는 타입 시스템을 완전히 무시하기 때문에 가능하면 지양하는 게 좋아요.
unknown은 어떤 값이든 담을 수 있지만, 사용할 때는 타입 확인을 거쳐야 해서 더 안전해요.

특히 앞서 설명 드린 함수 반환값, 변수 선언, 이중 단언문과 같은 경우에는 unknown을 활용하여 타입안전성을 높일 수 있어요.

다만, unknown 또한 의도를 분명히 하고 타입 안정성을 높이는 방향으로 사용하는 게 중요해요.

