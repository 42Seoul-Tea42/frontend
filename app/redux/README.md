# 프로젝트 사양

<details>
<summary> 문서 규약 </summary>

UML의 일종인 mermaid를 사용하여 프로젝트의 구조를 설명합니다.

- rule1: 최종구현체는 -Slice의 형태로 끝납니다.
- rule2: 인터페이스는 리듀서들의 인스턴스 타입을 정의합니다.
- rule3: 같은 인터페이스를 사용하더라도 다른 서비스를 위한 상태값은 다른 slice으로 분리되어야 합니다. 추후 도메인 분리를 위한 확장성 고려.
- rule4: api 사양 변경에 상태(state)가 의존적이지 않아야합니다.
- rule5: 필요한 데이터를 나열하고 상위노드부터 필요한 데이터를 골라 하위노드로 이동하는 방식으로 인터페이스를 결정한후 구현체를 추가, 반드시 문서를 업데이트해야 합니다.

</details>

<details>
<summary> slice의 구분 기준 </summary>

> 공통의 인터페이스를 정의한 후 필요한 데이터값에 따라서 특수화

- 동기 데이터 (회원가입 입력, 검색옵션 등)
- 비동기 데이터 (api, socket)
- UI 제어 (기본적으로 뷰를 위한 상태는 컴포넌트 단위로 관리하지만 복잡한 컴포넌트의 경우에만 예외적으로 추가)

</details>

## 서비스 별 리듀서 인터페이스, 슬라이스 구조

- 인터페이스 `I-`
- 슬라이스 `S-`
- 상속관계 `--|>`
- 인스턴스 `..|>`
- 동기 상태 `S`
- 비동기 상태 `A`

```mermaid

classDiagram

I-User --|> I-UserFancy

I-Location --|> I-UserDetailAccount
I-User --|> I-UserDetail
I-User --|> I-UserChatting : api
I-Message --|> I-UserChatting : socket
I-UserDetail --|> I-UserDetailAccount

I-UserFancy ..|> S-fancySlice : Fancy Service
I-UserFancy ..|> S-homeSlice : Suggestion Service
I-UserFancy ..|> S-historySlice : History Service
I-UserChatting ..|> S-chattingSlice: Chatting Service
I-UserDetailAccount ..|> S-accountSlice : Account Service

I-UserDetail ..|> S-profileInquirySlice : Profile Inquiry Service
I-SearchParams ..|> S-searchSlice : Search Service
I-UserDetail ..|> S-searchSlice


class I-User {
   A id: string
   A name: string
   A age: number
   A distance: number
   A gender: string
   A picture: string
}

class I-UserFancy {
   A fancy: boolean
}

class I-Message {
    A id: string
    A name: string
    A time: string
}

class I-UserChatting {
    A user: User
    A messages: Message[]
    A connect: boolean
    S noti: boolean
}

class I-UserDetail {
   A subPicture: string[]
   A tag: Tag[]
   A rating: number
   A taste: string
}

class I-Location {
    A latitude: number
    A longitude: number
}

class I-UserDetailAccount {
    A location: Location
    A email: string
    A token: string
    A refreshToken: string
}

class I-SearchParams {
    S ageRange: number[]
    S distance: number
    S fame: number
    S tag: Tag[]
}

class S-homeSlice {
    A users: UserFancy[]
}

class S-fancySlice {
    A users: UserFancy[]
    S noti: boolean
}

class S-historySlice {
    A users: UserFancy[]
    S noti: boolean
}

class S-chattingSlice {
    A users: UserChatting[]
}

class S-profileInquirySlice {
    A user: UserDetail
    S block: boolean
    S report: boolean
    S reason: string
}

class S-accountSlice {
    A user: UserDetailAccount
}

class S-searchSlice {
    A users: UserDetail[]
    S searchParams: SearchParams
}

```

## 회원가입 & 최초 접속

- DB, api사양에 의존적으로 구현

```mermaid

classDiagram

I-UserSignup ..|> S-signupSlice
I-RegisterSteps ..|> S-loginSlice

class I-UserSignup {
    s email: string
    s id: string
    s password: string
    s firstname: string
    s lastname: string
}

class I-RegisterSteps {
    A emailCheck: boolean
    A profileCheck: boolean
    A emojiCheck: boolean
}

class S-signupSlice {
    S user: UserSignup
}

class S-loginSlice {
    A steps: RegisterSteps
}

```
