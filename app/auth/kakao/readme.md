```mermaid
graph LR

front <-- 1.state요청 --> back

front -- 2.user 리다이렉트 --> kakao
kakao -- 3.인가 코드 발급 --> front

front <-- 4.인가코드로 로그인 요청 --> back

```
