# <div align="center">✏️ React : 이미지 넣는 방법 (이미지 경로)</div>

<br>

## ✨ 리액트에서 이미지 파일 가져오는 방법

src/components 경로에서 public 에 있는 이미지 경로에 접근이 되지 않았다!

- public 폴더 : 정적 파일들을 넣는 폴더 (ex. index.html / image파일 등)
- src 폴더 : 개발하면서 작업하는 파일 대부분을 넣는 디렉토리 (ex. index.js / components / .css 등)

<br>
<br>

## 📁 public 폴더

리액트의 가장 큰 특징 중 하나는 Virtual DOM(가상돔)이다.⭐️

Virtual DOM(가상돔)을 사용하기 위해선 Virtual DOM(가상돔)이 들어갈 빈 껍데기 HTML이 필요한데

여기서 빈 껍데기 HTML이 곧 public/index.html 파일이다.

```html
<body>
  <div id="root"></div>
</body>
```

public 폴더에는 사용자가 웹페이지 상에서 직접 볼 수 있는 정적인 파일들이 담기는 공간이라는 것을 알 수 있다.

<br>
<br>

## 📁 src 폴더

src 폴더는 index.html과 내가 만든 컴포넌트들을 연결해주는 index.js파일 그리고 컴포넌트 파일, CSS파일 등 작업하는 대부분의 파일들이 존재하는 폴더이다.

<br>
<br>

## 📍 이미지 파일 가져오기

### 👉 src/App.jsx파일에서 public폴더 내 이미지 가져오기

> jsx파일에서 절대경로는 public폴더를 기준으로 한다.

- src 폴더 속 jsx파일은 public폴더에 접근할 수 있다.
- jsx파일에서 절대경로는 public폴더를 기준으로 하기 떄문이다.
- PUBLIC_URL 환경변수를 사용해 접근할 수 있다.

<br>

**public/images 폴더에 있는 이미지를 가져온다면,**

```jsx
<img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="프로필 이미지" />
```

<br>

### 👉 src/components 폴더 속 파일에서 이미지 가져오기

> components 파일에서 절대경로는 src폴더가 기준이다.

- src/components 안에 .jsx 파일은 src 폴더 안에 존재한다.
- 따라서 절대경로를 설정하면 자신이 속한 src 폴더를 기준으로 경로를 찾는다.
- **⭐️ src폴더 내에 있는 jsx 파일에서는 public 폴더에 있는 이미지 파일에 접근할 수 없다!**

<br>

따.라.서.
src폴더 내 images폴더를 따로 만들어서 경로를 직접 지정해주든, import 해오든 자유롭게 가져올 수 있다.

<br>

## 총정리!!

**case1**

- src/Components.jsx 파일에서 이미지를 가져올 경우,
- src폴더 내 jsx파일의 절대경로는 public를 기준으로 하기 때문에 public/images폴더 안에 있는 이미지를 가져올 수 있다.

  ```jsx
  import profile from "./images/profile.jpg"; // public 폴더에서 가져옴

  export default function Profile() {
    return <img className="photo" src={profile} alt="profile" />;
  }
  ```

<br>

**case2**

- src/components/Components.jsx 파일에서 이미지를 가져올 경우,
- src/components 내 파일의 절대경로 기준은 src 이기 때문에 public 이미지 파일에 접근할 수 없다.
- src/images폴더를 새로 만들어줘서 그 안에 이미지를 추가하여 가져와야한다.

  ```jsx
  import profile from "../images/profile.jpg"; // src/images폴더에서 가져옴

  export default function Profile() {
    return <img className="photo" src={profile} alt="profile" />;
  }
  ```

<br>

---

<br>

참고 https://velog.io/@hye_rin/React-public-src%ED%8F%B4%EB%8D%94%EC%97%90-%EB%94%B0%EB%A5%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
