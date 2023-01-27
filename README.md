# coding-dojo

## Introduction

- 하루에 한 문제씩 코딩 테스트를 풀고 기록하는 코딩도장(a.k.a coding-dojo)!
- 문제 풀기 전/후에 작성하는 How to solve it? 문서는 Issue로 작성한다.
  - 🔗 [지금까지 작성한 How to solve it? 보러가기](https://github.com/bohyunkang/coding-dojo/issues?q=is%3Aissue+is%3Aclosed)
  - 🔗 [How to solve it 문서란?](./.github/ISSUE_TEMPLATE/💡-how-to-solve-it-.md)
- 브랜치는 `YYYYMMDD-문제명`으로 생성하고, 문제를 다 풀면 문제 내용과 테스트를 통과한 화면을 캡쳐하여 Pull Request를 날린다.
  - 🔗 [지금까지 푼 문제 보러가기](https://github.com/bohyunkang/coding-dojo/pulls?q=is%3Apr+is%3Aclosed)
- 아래와 같은 기준을 가지고 Issue와 PR을 [라벨링](https://github.com/bohyunkang/coding-dojo/issues/labels)한다.
  - `how to solve`: 문제 풀기 전/후에 작성하는 문제풀이 계획 및 회고 문서에 사용
  - `solved again`: 이미 풀어본 문제이나 다시 푼 경우 사용
  - `should try again`: 풀긴 하였으나 한번 다시 풀어보고 싶은 경우 사용
  - `언어`: 해당 언어로 푼 경우 사용(현재 `JavaScript`, `Java`, `SQL`이 존재)

## Directory Structure

플랫폼별로 폴더를 나누고, 해당 폴더 안에서 플랫폼에서 제공하는 챌린지 혹은 레벨 단위로 폴더를 인덱싱하여 문제를 쌓는다.

```
📦coding-dojo
 ┣ 📂.github 👉 Issue, PR template
 ┃ ┣ 📂ISSUE_TEMPLATE
 ┃ ┃ ┗ 📜💡-how-to-solve-it-.md
 ┃ ┗ 📜pull_request_template.md
 ┣ 📂megaptera 👉 메가테라 문제
 ┣ 📂programmers 👉 프로그래머스 문제(레벨 별로 하위 폴더 나눔)
 ┃ ┣ 📂level1
 ┃ ┣ 📂level2
 ┃ ┗ 📂level3
 ┣ 📂leetcode 👉 리트코드 문제(챌린지 별로 하위 폴더 나눔)
 ┃ ┣ 📂leetcode75 👉 레벨 별로 하위 폴더 나눔
 ┃ ┃ ┗ 📂level1
 ┣ 📜.gitignore
 ┗ 📜README.md
```
