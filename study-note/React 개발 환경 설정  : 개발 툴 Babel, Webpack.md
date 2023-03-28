# <div align="center">📌 React 개발 환경 설정 : 개발 툴 Babel, Webpack</div>

<br>

## BABEL (JavaScript Transcompiler)

> ECMAScript 2015+ → older version

babel 을 이용해서 프로젝트를 빌드할 때 사용자에게 배포하기 전에 최신문법을 예전 버전으로 변환해주는 것이 바벨이다.

사용자의 브라우저 버전에 상관하지 않고 마음껏 최신 버전으로 개발하거나 타입스크립트나 JSX를 사용할 수도 있다.

타입스크립트도 예전 자바스크립트 버전으로 변환해주기 때문에!!

<br>

## Webpck (Bundling the code, JavaScript module bundler)

- 사용자에게 처음으로 보여줘야하는 html 파일 이미지파일들은 무엇이 있는지
- 어떤 이미지들끼리 그룹화해야하는지

<br>

번들링 외에도 아래와 같은 일들을 해준다.

- 쓰이지 않는 코드는 제거하고
- 코드를 압축하고
- 코멘트들은 제거해서 사용자에게 전달하고
- css 파일 이름들도 줄여줘서 용량도 줄여주고

<br>

### 그 외 필요한 브라우저 준비 및 익스텐션

- **`크롬 브라우저 확장 프로그램`** : React Developer Tools
- **`Visual Code 익스텐션`** : Auto Import
  - 다른 파일들을 import 해올 때 자동으로 완성해준다
