# <div align="center">👩🏻‍💻 React : Form을 만들기 위해서는 상태를 설정해주어야한다!</div>

<br>

## ⭐️ React의 주요 철학은 모든 UI의 업데이트는 상태 변경으로 부터 발생해야 한다.

모든 UI에 업데이트가 상태 변경으로 인해 발생이 되어야하는데!!

Form UI의 경우 text input처럼 텍스트를 입력하면 바로바로 글자가 입력되면서 UI가 바뀌는 것을 볼 수 있다.

이러한 것을 **uncontrol components(통제되지 않는 컴포넌트)** 라고 한다.

이러한 경우 **보여지고 있는 것이(타이핑되고 있는 value) 리액트 컴포넌트에서 가지고있는 상태와 매칭이 되도록 타이밍을 맞춰주는 것이 중요하다.**

